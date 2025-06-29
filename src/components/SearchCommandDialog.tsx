// components/SearchCommandDialog.tsx
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  Calendar,
  Smile,
  Calculator,
  User,
  CreditCard,
  Settings,
} from "lucide-react";

import { useCommandDialog } from "@/components/CommandDialogContext";
import { useState, useMemo, useEffect } from "react";
import Fuse from "fuse.js";

export function SearchCommandDialog({ entries: notes }: { entries: any[] }) {
  const { open, setOpen } = useCommandDialog();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(notes);

  console.log("notes", notes);

  const fuse = useMemo(() => {
    return new Fuse(notes, {
      keys: ["data.title", "data.category"],
      threshold: 0.4,
    });
  }, [notes]);

  useEffect(() => {
    if (!query) {
      setResults(notes);
    } else {
      const results = fuse.search(query).map((res) => res.item);
      setResults(results);
    }
  }, [query, fuse]);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Type a command or search..."
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {/* <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup> */}
        <CommandGroup heading="Notes">
          {results.map((note) => (
            <CommandItem
              key={note.path}
              onSelect={() => {
                setOpen(false);
                window.location.href = note.path;
              }}
            >
              <span>{note.data.title}</span>
              <span className="ml-auto text-muted-foreground text-sm">
                [{note.data.category}]
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
        {/* <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup> */}
      </CommandList>
    </CommandDialog>
  );
}
