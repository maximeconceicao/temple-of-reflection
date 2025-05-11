"use client";

import { Search } from "lucide-react";

import { useCommandDialog } from "./CommandDialogContext";
import { Button } from "./ui/button";

export function SearchBar() {
  const { setOpen } = useCommandDialog();

  return (
    <Button
      variant="ghost"
      onClick={() => setOpen(true)}
      className="flex items-center gap-2 border border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground w-full"
    >
      <Search className="h-4 w-4" />
      <span className="hidden sm:inline">Search</span>
      <kbd className="ml-auto hidden items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  );
}
