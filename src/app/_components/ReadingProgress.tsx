"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  trackBlogReadMilestone,
  trackBlogReadStarted,
} from "../../lib/analytics";

export default function ReadingProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  // only on article pages, not the /blog index
  const isArticle = /^\/blog\/.+/.test(pathname);

  // 里程碑触发状态记录（防止重复上报）
  const slugRef = useRef<string>("");
  const startTimeRef = useRef<number>(0);
  const startedRef = useRef<boolean>(false);
  const milestonesRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    if (!isArticle) return;

    // 切换文章时重置计时与里程碑
    const slug = pathname.replace(/^\/blog\//, "").replace(/\/$/, "");
    slugRef.current = slug;
    startTimeRef.current = Date.now();
    startedRef.current = false;
    milestonesRef.current = new Set();

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      setProgress(currentProgress);

      const pct = Math.round(currentProgress * 100);
      const elapsedSec = (Date.now() - startTimeRef.current) / 1000;

      // 1. 开始阅读事件（超过 5% 视为有效阅读开始）
      if (pct >= 5 && !startedRef.current) {
        startedRef.current = true;
        trackBlogReadStarted(slugRef.current);
      }

      // 2. 四大深度里程碑：25%, 50%, 75%, 100%
      const checkMilestone = (milestone: 25 | 50 | 75 | 100, threshold: number) => {
        if (pct >= threshold && !milestonesRef.current.has(milestone)) {
          milestonesRef.current.add(milestone);
          trackBlogReadMilestone({
            slug: slugRef.current,
            depth: milestone,
            reading_time_sec: elapsedSec,
          });
        }
      };

      checkMilestone(25, 25);
      checkMilestone(50, 50);
      checkMilestone(75, 75);
      checkMilestone(100, 95); // 滚动到 95% 即认为全文阅读完成
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isArticle, pathname]);

  if (!isArticle) return null;

  return (
    <div aria-hidden="true" className="fixed top-0 inset-x-0 z-[60] h-[3px] bg-transparent pointer-events-none">
      <div
        className="h-full bg-pouch transition-[width] duration-100 ease-linear"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
