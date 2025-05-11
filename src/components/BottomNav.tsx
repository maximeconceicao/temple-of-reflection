import { Folder, Home } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { SearchButton } from "./SearchButton";

export default function BottomNav() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background backdrop-blur-lg mask-gradient-to-top" />
      <div className="relative z-50 mx-auto flex h-full min-h-full items-center gap-1 rounded-full border border-border bg-background p-2 shadow-md pointer-events-auto">
        <a
          href={"/"}
          aria-label={"Accueil"}
          title={"Accueil"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <Home className="h-5 w-5" />
        </a>
        <a
          href={"/"}
          aria-label={"Accueil"}
          title={"Accueil"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <Folder className="h-5 w-5" />
        </a>

        <SearchButton />

        <ModeToggle
          variant="ghost"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
    </div>
  );
}
