import type { TocItem } from "@/lib/types";
import React, { useEffect, useState } from "react";

function shortenTitle(title: string, maxLength = 30) {
  const dashIndex =
    title.indexOf("—") !== -1 ? title.indexOf("—") : title.indexOf("-");

  let shortTitle = dashIndex !== -1 ? title.slice(0, dashIndex).trim() : title;

  if (shortTitle.length <= maxLength) {
    return shortTitle;
  }

  return shortTitle.slice(0, maxLength).trimEnd() + "…";
}

export default function TableOfContents({ toc }: { toc: TocItem[] }) {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  useEffect(() => {
    if (!toc || toc.length === 0) return;

    const handleScroll = () => {
      let currentActiveId = null;

      for (const item of toc) {
        const el = document.getElementById(item.slug);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            currentActiveId = item.slug;
          }
        }
      }

      setActiveId(currentActiveId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toc]);

  if (!toc || toc.length === 0) return null;

  return (
    <nav className="sticky top-24 text-sm leading-relaxed">
      <h2 className="mb-4 font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">
        Sommaire
      </h2>
      <ul className="space-y-2">
        {toc.map((item) => (
          <li
            key={item.slug}
            style={{ marginLeft: `${(item.depth - 2) * 1.25}rem` }}
          >
            <a
              href={`#${item.slug}`}
              className={
                activeId === item.slug
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              }
            >
              {shortenTitle(item.text)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
