# Web 修复任务（直接 copy 给 GPT 执行）

> 把下面这一整段（从 "## 任务"到文末）发给 GPT。先确保 GPT 在 `/Users/finochat/Desktop/stickmaker/website/` 这个工作目录有读写权限，并能跑 `npm run build`。

---

## 任务

你是负责修复 MemePouch 营销站的工程师。下面 4 个 bug 都已审过、定性、给出方案。**严格按顺序做**，每步做完跑一次 `npm run build` 确认 `Compiled successfully` 再进下一步。

### 项目背景（必读）

- 工作目录：`/Users/finochat/Desktop/stickmaker/website/`
- 技术栈：**Next.js 16.2.4 + React 19 + Tailwind v4**（这版本对 typography 插件兼容性差，不要装 `@tailwindcss/typography`）
- 部署模式：`output: "export"` 静态导出
- 域名：`https://memepouch.app`
- 主 App 商店链接：`https://apps.apple.com/us/app/memepouch/id6763726992`
- 项目根目录有 `AGENTS.md` 和 `CLAUDE.md`，提醒"This is NOT the Next.js you know" —— **遇到不熟悉的 API 优先看 `node_modules/next/dist/docs/`**，不要凭印象写代码。

### 必读文件（开工前 Read 一遍）

1. `src/app/layout.tsx` — 根 layout，已有 metadata 和 JSON-LD
2. `src/app/page.tsx` — 主页，**nav 和 footer 都在这里**，需要抽出来
3. `src/app/faq/page.tsx`
4. `src/app/compare/page.tsx`
5. `src/app/blog/page.tsx`
6. `src/app/blog/turn-photos-into-imessage-stickers/page.tsx`
7. `src/app/globals.css` — 看现有 Tailwind v4 配置
8. `src/app/support/page.tsx` 和 `src/app/privacy/page.tsx`（顺手看，这俩也缺 nav/footer 但本任务暂不动）

---

## 任务 1：抽 SiteNav + SiteFooter 组件，子页全部接上

**目标**：所有页面（主页 + faq + compare + blog 索引 + blog 文章）都有同一个 nav 和 footer。

### 1.1 新建组件目录

新建 `src/app/_components/SiteNav.tsx` 和 `src/app/_components/SiteFooter.tsx`。Next.js 16 的 App Router 里以 `_` 开头的目录默认私有，不会被路由化。

### 1.2 抽 SiteNav

把 `src/app/page.tsx` 第 7-22 行的 `<nav>...</nav>` 整段（从 `fixed top-0 inset-x-0 z-50 ...` 到 `</nav>`）原样剪到 `SiteNav.tsx`，包成 default export 函数组件。**保留所有现有样式和链接**（FAQ / Compare / Blog / Support / Privacy）。

```tsx
// src/app/_components/SiteNav.tsx
import Link from "next/link";

export default function SiteNav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
      {/* ... 原 page.tsx 的整段 nav 内容 */}
    </nav>
  );
}
```

### 1.3 抽 SiteFooter

同样把 `page.tsx` 第 162-180 行（`<footer>...</footer>`）剪到 `SiteFooter.tsx`。

### 1.4 注入到 layout.tsx

修改 `src/app/layout.tsx` 的 `RootLayout`，把 `<SiteNav />` 和 `<SiteFooter />` 包到 `{children}` 外：

```tsx
import SiteNav from "./_components/SiteNav";
import SiteFooter from "./_components/SiteFooter";

// ... 在 <body> 里：
<body className="min-h-full flex flex-col">
  <script ... /> {/* 现有 JSON-LD 不动 */}
  <SiteNav />
  <main className="flex-1">{children}</main>
  <SiteFooter />
</body>
```

> 注意：当前 `layout.tsx` 没用 `<main>` 包裹 children，这次加上正好顺便修语义。但如果某些子页内部已经用了 `<main>`，会变成嵌套——**那就用 `<div className="flex-1">` 而不是 `<main>` 来避免重复**。先 grep 确认。

### 1.5 子页 `<main>` 可能要去掉

`faq/page.tsx`、`compare/page.tsx`、`blog/page.tsx`、`blog/turn-photos-into-imessage-stickers/page.tsx`、`support/page.tsx`、`privacy/page.tsx` 里如果当前用了 `<main>` 作根容器，**改成 `<div>` 或 `<section>`**，避免和 layout 的 `<main>` 嵌套。className 保留。

### 1.6 主页去掉重复 nav 和 footer

`page.tsx` 把已经搬走的 `<nav>` 和 `<footer>` 删掉，**保留中间所有内容**（hero / bento grid / clean up 区域）。返回值结构变成：

```tsx
return (
  <div className="bg-[#fafafa] font-sans selection:bg-blue-200 text-slate-900">
    {/* Hero */}
    <main className="...">...</main>
    {/* Bento Grid */}
    <section className="...">...</section>
  </div>
);
```

> 顶部容器不再需要 `min-h-screen`，layout 的 flexbox 会处理。但保留 `bg-[#fafafa]` 背景色。

### 1.7 处理 fixed nav 与 hero `pt-32` 关系

主页 hero 当前 `pt-32 lg:pt-48` 是为了腾出 `fixed nav` 的空间。**子页（faq/compare/blog）的内容当前用 `py-24` 起步，被 fixed nav 盖住了**——验证修完后访问每个子页，确认页面顶部内容没被 nav 挡。如有挡住：把子页的 `py-24` 改成 `pt-32 pb-24` 或加全局 `<main className="pt-16">`（nav 高度是 h-16）。

### 1.8 验证

- `npm run build` 通过
- 访问 `/`、`/faq`、`/compare`、`/blog`、`/blog/turn-photos-into-imessage-stickers`、`/support`、`/privacy` 都能看到 nav 和 footer
- 检查 nav 链接点击都能正常跳转
- 顶部内容没被 fixed nav 遮挡

---

## 任务 2：Blog 文章手写样式，去掉失效的 prose

**问题**：`blog/turn-photos-into-imessage-stickers/page.tsx` 用了 `<div className="prose prose-slate max-w-none">`，但项目没装 `@tailwindcss/typography`，所有 H2/p 样式失效，正文挤成一团。

**方案 B（不装插件，手写样式）**：

把 `<div className="prose ...">` 整段替换成手写样式的结构。每个 `<h2>` 加 `text-2xl font-semibold mt-12 mb-4`，每个 `<p>` 加 `text-slate-700 leading-relaxed mb-6`，每个 `<h3>` 加 `text-xl font-semibold mt-8 mb-3`。

可以提取一个内部小组件：

```tsx
function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-semibold mt-12 mb-4 text-slate-900">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="text-slate-700 leading-relaxed mb-6">{children}</p>;
}
```

或者直接每个标签写 className 重复几次也行——文章只有 1 篇，不强求抽组件。

**不要装** `@tailwindcss/typography`，会引入兼容问题。

**验证**：访问 `/blog/turn-photos-into-imessage-stickers`，看到 Step 1 / Step 2 / Step 3 / Common Pitfalls 4 个 H2 有清晰的视觉层级，标题加粗加大，段落之间有 24-32px 间距。

---

## 任务 3：Compare 页命名统一

**问题**：`compare/page.tsx` 的对比表格里列名是 `"Sticker Maker"`，但叙述部分用的是 `"WA Sticker Maker"`。两个名字混用。

**方案**：统一成 `"WA Sticker Maker"`（更具体，避免和"sticker maker"通用搜索词混淆）。

- 表格 header 列名改 "Sticker Maker" → "WA Sticker Maker"
- 叙述段标题已经是 "MemePouch vs WA Sticker Maker"，保持不变

**验证**：访问 `/compare`，确认表格列名和段落标题完全一致。

---

## 任务 4（暂缓，等 iOS 改完再做）

iOS 端有一个并行任务正在把视频转 GIF 上限从 3 秒提到 5 秒。改完后**前端 3 处文案需要同步**：

- 主页 Bento Grid "Video to GIF" 卡片的描述（`page.tsx` 约 77 行）："trim up to 3 seconds" → "trim up to 5 seconds"
- FAQ "Can I make an animated sticker from a video?" 答案（`faq/page.tsx` 约 21 行）："trim up to 3 seconds" → "trim up to 5 seconds"
- Blog 文章 Step 2 段落如果提到秒数（暂未提，可忽略）

**这一步在你做这次改动时不要做**——iOS 代码可能还没 merge。除非用户明确确认 iOS 端 5 秒功能已上线，否则不动。

---

## 完工验收

完成 1、2、3 后：

1. `cd /Users/finochat/Desktop/stickmaker/website && npm run build`，看到 `Compiled successfully`，11 个静态页全部生成
2. `npm run dev`，依次访问 6 个页面（`/`、`/faq`、`/compare`、`/blog`、`/blog/turn-photos-into-imessage-stickers`、`/support`、`/privacy`），每个页面：
   - 顶部有 nav，底部有 footer
   - 顶部内容没被 fixed nav 盖住
   - nav 里所有链接点击能正常跳转
3. Blog 文章 H2/H3/p 有清晰视觉层级
4. Compare 表格和叙述命名一致

---

## 报告格式（中文，不超过 250 字）

完工后报告：

1. **任务 1**：新建了哪 2 个组件、子页是否都接上 nav/footer、有无 `<main>` 嵌套需要处理
2. **任务 2**：blog 文章的 prose 是否替换为手写样式，有没有装 typography 插件（应该没有）
3. **任务 3**：compare 命名是否统一
4. **build 是否通过 + 静态页总数**
5. **遗留风险**（比如某些样式 fixed nav 遮挡边界情况）

不要写多余注释，不要加 emoji。
