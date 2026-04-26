import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isMainNote = (slug: string) =>
  !slug.includes("/") || slug.endsWith("/index");

export const buildUrl = (...segments: string[]) => {
  const base = import.meta.env.BASE_URL; // always ends with /
  const path = segments.filter(Boolean).join("/").replace(/^\/+/, "");
  return path ? `${base}${path}` : base;
};
