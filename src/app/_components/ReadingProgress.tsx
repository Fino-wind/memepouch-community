"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  // only on article pages, not the /blog index
  const isArticle = /^\/blog\/.+/.test(pathname);

  useEffect(() => {
    if (!isArticle) return;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isArticle]);

  if (!isArticle) return null;

  return (
    <div aria-hidden="true" className="fixed top-0 inset-x-0 z-[60] h-[3px] bg-transparent">
      <div
        className="h-full bg-pouch transition-[width] duration-100 ease-linear"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
