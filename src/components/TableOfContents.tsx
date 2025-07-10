import { categoryMeta, type GardenCategory } from "@/lib/categories";
import type { TocItem } from "@/lib/types";
import React, { useEffect, useState, useRef } from "react";

function shortenTitle(title: string, maxLength = 28) {
  const dashIndex =
    title.indexOf("—") !== -1 ? title.indexOf("—") : title.indexOf("-");

  let shortTitle = dashIndex !== -1 ? title.slice(0, dashIndex).trim() : title;

  if (shortTitle.length <= maxLength) {
    return shortTitle;
  }

  return shortTitle.slice(0, maxLength).trimEnd() + "…";
}

export default function TableOfContents({
  toc,
  category,
}: {
  toc?: TocItem[];
  category?: GardenCategory;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const color = category ? categoryMeta[category].color : "chart-0";

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

  // Scroll automatique du sommaire pour que l'élément actif soit visible
  useEffect(() => {
    if (!navRef.current) return;

    if (!activeId) {
      // Aucun élément actif : scroll en haut du sommaire
      navRef.current.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const activeLink = navRef.current.querySelector<HTMLAnchorElement>(
      `a[href="#${activeId}"]`
    );
    if (!activeLink) return;

    const container = navRef.current;
    const containerRect = container.getBoundingClientRect();
    const activeRect = activeLink.getBoundingClientRect();

    if (
      activeRect.top < containerRect.top ||
      activeRect.bottom > containerRect.bottom
    ) {
      activeLink.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeId]);

  if (!toc || toc.length === 0) return null;

  return (
    <nav
      ref={navRef}
      className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 pb-8 text-sm leading-relaxed"
    >
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
              style={{
                color: activeId === item.slug ? `var(--${color})` : undefined,
              }}
              className={
                activeId === item.slug
                  ? "font-semibold hover:underline"
                  : "text-gray-700 dark:text-gray-300 hover:underline transition-colors"
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
