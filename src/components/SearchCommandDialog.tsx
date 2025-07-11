import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import Fuse from "fuse.js";
import { useEffect, useMemo, useState } from "react";
import { categoryMeta } from "@/lib/categories";
import type { GardenEntry } from "@/lib/types";

export function SearchCommandDialog({
  entries,
  open,
  setOpen,
}: {
  entries: GardenEntry[];
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(entries);

  console.log("entries", entries);

  const fuse = useMemo(() => {
    return new Fuse(entries, {
      keys: ["data.title", "data.category"],
      threshold: 0.5,
    });
  }, [entries]);

  useEffect(() => {
    if (!query) {
      setResults(entries);
    } else {
      const results = fuse.search(query).map((res) => res.item);
      setResults(results);
    }
  }, [query, fuse]);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Rechercher une note..."
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>Aucune note trouvée.</CommandEmpty>
        <CommandGroup heading={query ? "Résultat(s)" : "Dernières notes"}>
          {results.map((note) => (
            <CommandItem
              key={note.slug}
              onSelect={() => {
                setOpen(false);
                window.location.href = `/${note.data.category}/${note.slug}`;
              }}
            >
              <span>{note.data.title}</span>
              <span className="ml-auto text-muted-foreground text-sm">
                [{categoryMeta[note.data.category].label}]
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
