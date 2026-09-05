#!/usr/bin/env python3
"""让网站上那些「关于 app 的断言」可被机器对账。

为什么存在
----------
2026-09-06 凌晨全站审计，一晚上挖出四类问题，全部是同一个根因的产物：
**app 和网站是两个 repo，代码改了没有任何机制提醒网站。**

  1. 说了不存在的事   2.13（7-29）上了三档订阅，网站还在 27 处说 "no subscription"，
                     其中一条是 compare 页的 JSON-LD——会进 Google rich result 和 AI 语料，
                     标题直接叫 "Why is MemePouch one-time price instead of subscription?"
  2. 自相矛盾         /privacy 页老实披露了 PostHog 匿名分析，另外 5 个页面说 "no analytics"
  3. 漏说做出来的东西  iCloud 备份(2.15)、自定义分类(2.4)、回收站、GIF 循环模式——全站零提及
  4. 数字过时         GIF 编码写着「四档 15→8 fps / 300→180 px」，实际是「七档 50→10 / 600→200」，
                     把自己最大的一次画质升级说成了三分之一

第 1 类是靠「做宣传片时正好看到 hero 那行小字」偶然发现的。下次未必有这个偶然。

检查什么
--------
零依赖、零网络、亚秒级。前三项在任何环境都跑；后两项需要 app 源码，
在 CI 里（网站 repo 单独 clone）会自动跳过并说明——**跳过不算失败**。

  1. 排他断言   —— "no subscription" 这类已经不成立的绝对化说法（跨行匹配）
  2. 死链       —— 内部 href 必须对应真实路由
  3. 缺图       —— 引用的静态图片必须存在
  4. 规格数字   —— 网站上的规格表数字必须对上 app 源码里的真值
  5. 语种数     —— 网站声明的语言必须对上 xcstrings 里实际有的

刻意不检查的
------------
文案好不好、功能讲全没讲全、竞品信息是否过期——那些需要人。这个脚本只抓机械腐烂。
而那一晚的四类里，1/2/4 都是机械腐烂，只有第 3 类（漏说功能）机器判不了。

⚠️ 扩展它之前先读「为什么跨行」和「为什么规格检查用白名单不用黑名单」两段注释。
误报的守卫会被 --no-verify 绕过，绕过一次就等于这个脚本不存在。
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

SITE = Path(__file__).resolve().parents[2]
APP = SITE.parent  # memepouch-website 嵌在 memepouch 里；CI 上不成立，下面会探测


# ── 1. 排他断言 ────────────────────────────────────────────────────────────
#
# 为什么跨行匹配：JSX 由 prettier 按宽度折行，"No subscription" 会被折成
# "No\n              subscription"。2026-09-06 我用单行 grep 扫完报「全站零命中」
# 就 commit 推送了，线上验证才发现 compare 页还有两处——**它不报错，它报干净。**
BANNED = {
    r"no\s+subscriptions?\b": '2.13 起有月订/年订，"没有订阅" 已不成立',
    r"no\s+recurring\s+(fee|subscription)": "同上",
    r"not\s+per\s+(month|year)": "同上",
    r"\bpay\s+once\b": '排他读法；要讲买断请说 "one-time unlock"，它仍然成立',
    r"no\s+analytics": "PostHog 在跑且无 opt-out 开关（/privacy 第 4 节自己披露了）",
    r"no\s+cloud\s+sync": "2.15 起有 CloudKit，且 defaultICloudSyncEnabled = true",
    # "no servers" 单独放行：加了 "of ours" 限定就成立（iCloud 是用户自己的）
    r"no\s+servers?(?!\s+of\s+ours)": '要说请说 "no server of ours"——iCloud 是用户自己的',
}


def strip_comments(text: str) -> str:
    """把注释挖成等量空白（保留换行，行号不变）。

    存在的理由：这个脚本自己的第一版把 compare/page.tsx 里一段【解释为什么要去重】
    的注释当成了违规文案 —— 那段注释里逐字引用了 "no subscription"。
    守卫必须只看用户能看见的字。
    """

    def blank(m: re.Match) -> str:
        return re.sub(r"[^\n]", " ", m.group(0))

    text = re.sub(r"/\*.*?\*/", blank, text, flags=re.S)          # 块注释
    text = re.sub(r"(?<![:\w])//[^\n]*", blank, text)              # 行注释（避开 https://）
    return text


def scan_text_files() -> list[tuple[Path, str]]:
    out = []
    for p in sorted(SITE.glob("src/**/*.tsx")) + sorted(SITE.glob("src/**/*.ts")):
        out.append((p, strip_comments(p.read_text(encoding="utf-8"))))
    readme = SITE / "README.md"
    if readme.exists():
        out.append((readme, readme.read_text(encoding="utf-8")))
    return out


def check_banned(files) -> list[str]:
    bad = []
    for path, text in files:
        for pat, why in BANNED.items():
            for m in re.finditer(pat, text, re.I):
                line = text[: m.start()].count("\n") + 1
                phrase = re.sub(r"\s+", " ", m.group(0))
                bad.append(f"{path.relative_to(SITE)}:{line}  “{phrase}” — {why}")
    return bad


# ── 2. 死链 + 3. 缺图 ──────────────────────────────────────────────────────
def check_links_and_images(files) -> tuple[list[str], list[str]]:
    routes = set()
    for p in SITE.glob("src/app/**/page.tsx"):
        r = "/" + str(p.parent.relative_to(SITE / "src/app")).replace(".", "").strip("/")
        routes.add(r.rstrip("/") or "/")

    dead, missing = [], []
    for path, text in files:
        for href in set(re.findall(r'href="(/[^"#?]*)"', text)):
            key = href.rstrip("/") or "/"
            if key not in routes:
                dead.append(f"{path.relative_to(SITE)}  → {href}")
        for src in set(re.findall(r'(?:src|srcSet)="(/[^"]+\.(?:webp|png|jpg|jpeg|svg|gif))"', text)):
            # Next.js 会把 src/app/icon.* 变成 /icon.png 这样的动态路由，
            # 它不在 public/ 里但线上真实存在——按文件名放行，别误报。
            if (SITE / "public" / src.lstrip("/")).exists():
                continue
            stem = Path(src).stem
            if list((SITE / "src/app").glob(f"{stem}.*")):
                continue
            missing.append(f"{path.relative_to(SITE)}  → {src}")
    return dead, missing


# ── 4. 规格数字（需要 app 源码）────────────────────────────────────────────
#
# 为什么用白名单不用黑名单：黑名单只能防已经犯过的错（"15 fps"），防不了下一次
# 漂移。白名单是「网站上凡是长成规格表的 fps 数字，都必须是 app 真的会用的档位」。
# 只匹配规格表形态（<strong>N fps</strong> / "N fps, max M px"），散文里提到帧率
# 不会长这样，所以不误报。
def app_specs() -> dict | None:
    vg = APP / "Shared/VideoGIFMaker.swift"
    sl = APP / "Shared/StickerLibrary.swift"
    if not vg.exists() or not sl.exists():
        return None
    v, s = vg.read_text(encoding="utf-8"), sl.read_text(encoding="utf-8")

    fps = set()
    # ⚠️ 分子分母必须在【一个】可选组里，不能写成 `A|A/B` 的交替 ——
    # 正则交替是最左优先不是最长优先，`100.0 / 3.0` 会在第一个分支就匹配成
    # `100.0` 然后收工，于是 33.3 和 16.7 两档凭空消失、真档位里多出个 100。
    # 这个 bug 第一版就犯了，而 --self-test 抓不到它（自测数据里没有分数写法）。
    for m in re.finditer(r"Recipe\(fps:\s*([\d.]+(?:\s*/\s*[\d.]+)?)", v):
        raw = m.group(1)
        if "/" in raw:
            a, b = (float(x) for x in raw.split("/"))
            val = a / b
        else:
            val = float(raw)
        fps.add(round(val, 1))

    def num(text, name):
        m = re.search(rf"{name}\s*(?::\s*\w+)?\s*=\s*(\d+)", text)
        return int(m.group(1)) if m else None

    return {
        "fps": fps,
        "trash_days": num(s, "trashRetentionDays"),
        "max_categories": num(s, "maxCategoryCount"),
        "trim_seconds": num(v, "maxDurationSeconds"),
    }


def check_specs(files, specs) -> list[str]:
    bad = []
    for path, text in files:
        # 规格表形态的 fps
        for m in re.finditer(r"<strong>([\d.]+)\s*fps</strong>|([\d.]+)\s*fps,\s*max\s+\d+\s*px", text, re.I):
            val = float(m.group(1) or m.group(2))
            if round(val, 1) not in specs["fps"]:
                line = text[: m.start()].count("\n") + 1
                ladder = ", ".join(str(x) for x in sorted(specs["fps"], reverse=True))
                bad.append(f"{path.relative_to(SITE)}:{line}  {val} fps 不在编码档位里（真值：{ladder}）")
        # 回收站天数 / 分类上限
        for pat, real, label in [
            (r"Recently Deleted[^.]{0,60}?(\d+)\s*days", specs["trash_days"], "回收站天数"),
            (r"[Uu]p to (\d+) categor", specs["max_categories"], "分类上限"),
        ]:
            if real is None:
                continue
            for m in re.finditer(pat, text):
                if int(m.group(1)) != real:
                    line = text[: m.start()].count("\n") + 1
                    bad.append(f"{path.relative_to(SITE)}:{line}  {label} 写着 {m.group(1)}，实际 {real}")
    return bad


# ── 5. 语种数（需要 app 源码）──────────────────────────────────────────────
def check_languages(files) -> list[str]:
    cat = APP / "Shared/Localizable.xcstrings"
    if not cat.exists():
        return []
    data = json.loads(cat.read_text(encoding="utf-8"))
    locales = set()
    for entry in data.get("strings", {}).values():
        locales |= set(entry.get("localizations", {}).keys())
    n = len(locales)
    bad = []
    for path, text in files:
        for m in re.finditer(r"\b(two|three|four|five|six|seven|eight|\d+)\s+languages\b", text, re.I):
            word = m.group(1).lower()
            words = {"two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8}
            said = words.get(word, int(word) if word.isdigit() else None)
            if said is not None and said != n:
                line = text[: m.start()].count("\n") + 1
                bad.append(f"{path.relative_to(SITE)}:{line}  写着 {said} 种语言，xcstrings 里实际 {n} 种")
    return bad


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--self-test", action="store_true",
                    help="喂一段已知坏的文本，证明这些检查不是空转的")
    args = ap.parse_args()

    if args.self_test:
        probes = [
            ("排他断言（单行）", "Free to try — one-time unlock, no subscription."),
            ("排他断言（折行）", "A one-time unlock removes the limit forever. No\n     subscription, no ads."),
            ("隐私断言", "Everything stays on your iPhone. No accounts, no servers, no analytics."),
            ("旧 fps 档位", "<li><strong>15 fps</strong>, max 300 px on the longest edge</li>"),
        ]
        failed = []
        for name, text in probes:
            hit = check_banned([(SITE / "probe.tsx", text)])
            sp = app_specs()
            if sp:
                hit += check_specs([(SITE / "probe.tsx", text)], sp)
            print(f"  {'✅' if hit else '❌ 没抓到'}  {name}")
            if not hit:
                failed.append(name)
        if failed:
            print(f"\nFAIL  {len(failed)} 条已知坏输入没被抓到 —— 这些检查是空转的。", file=sys.stderr)
            return 1
        print("\nPASS  已知坏输入全部被正确拒绝。")
        return 0

    files = scan_text_files()
    problems: list[tuple[str, list[str]]] = []

    problems.append(("排他断言", check_banned(files)))
    dead, missing = check_links_and_images(files)
    problems.append(("死链", dead))
    problems.append(("缺图", missing))

    specs = app_specs()
    skipped = []
    if specs:
        problems.append(("规格数字", check_specs(files, specs)))
        problems.append(("语种数", check_languages(files)))
    else:
        skipped.append("规格数字 / 语种数（找不到 app 源码，CI 环境正常）")

    total = sum(len(v) for _, v in problems)
    if total == 0:
        checked = "排他断言 / 死链 / 缺图" + ("" if skipped else " / 规格数字 / 语种数")
        print(f"PASS  {checked} 全部对得上。")
        for s in skipped:
            print(f"      跳过：{s}")
        return 0

    print(f"FAIL  {total} 处对不上\n")
    for name, rows in problems:
        if not rows:
            continue
        print(f"[{name}]")
        for r in rows:
            print(f"  {r}")
        print()
    print("每一条都是「app 变了而网站没跟」的产物。改网站，不是改这个脚本。")
    return 1


if __name__ == "__main__":
    sys.exit(main())
