// CommandButtonInNav.tsx
import { Search } from "lucide-react";
import { useCommandDialog } from "./CommandDialogContext";

export function SearchButton() {
  const { setOpen } = useCommandDialog();

  return (
    <button
      onClick={() => setOpen(true)}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
      aria-label="Search"
      title="Search"
    >
      <Search className="h-5 w-5" />
    </button>
  );
}
