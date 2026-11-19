import Link from "next/link";
import { buildBreadcrumbLd, type BreadcrumbItem } from "../_lib/schema";

export default function BlogBreadcrumbs({
  current,
  currentHref,
  guidesLabel = "Guides",
  homeLabel = "Home",
}: {
  current: string;
  currentHref: string;
  guidesLabel?: string;
  homeLabel?: string;
}) {
  const items: BreadcrumbItem[] = [
    { name: homeLabel, href: "/" },
    { name: guidesLabel, href: "/blog" },
    { name: current, href: currentHref },
  ];

  const ld = buildBreadcrumbLd(items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
      <nav
        aria-label="Breadcrumb"
        className="not-prose text-sm text-slate-500 mb-6 flex flex-wrap items-center gap-2"
      >
        <Link href="/" className="hover:text-slate-900 transition-colors">
          {homeLabel}
        </Link>
        <span aria-hidden="true">/</span>
        <Link href="/blog" className="hover:text-slate-900 transition-colors">
          {guidesLabel}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-slate-800 font-medium truncate max-w-[260px] sm:max-w-none">
          {current}
        </span>
      </nav>
    </>
  );
}
