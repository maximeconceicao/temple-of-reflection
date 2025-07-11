import { Search } from "lucide-react";
import { SearchCommandDialog } from "./SearchCommandDialog";
import { useEffect, useState } from "react";
import type { GardenEntry } from "@/lib/types";

export function SearchButton({ entries }: { entries: GardenEntry[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
        aria-label="Search"
        title="Search"
      >
        <Search className="h-5 w-5" />
      </button>
      <SearchCommandDialog open={open} setOpen={setOpen} entries={entries} />
    </>
  );
}
