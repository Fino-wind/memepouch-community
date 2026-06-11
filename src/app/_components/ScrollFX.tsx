"use client";

import { useEffect, useState } from "react";

export default function ScrollFX() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("js");

    const targets = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach((t) => {
      // already on screen → show immediately without animation jump
      const r = t.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9) t.classList.add("in-view");
      else io.observe(t);
    });

    const onScroll = () => setShowTop(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-2xl bg-ink text-paper text-xl font-bold shadow-lifted -rotate-3 hover:rotate-0 hover:bg-pouch transition-all ${
        showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      ↑
    </button>
  );
}
