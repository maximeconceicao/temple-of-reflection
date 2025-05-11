"use client";

import { CommandDialogProvider } from "@/components/CommandDialogContext";
import BottomNav from "./BottomNav";
import { SearchCommandDialog } from "./SearchCommandDialog";
import { Sidebar } from "./Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <CommandDialogProvider>
      <div className="hidden lg:block lg:sticky lg:top-0 lg:h-screen">
        <Sidebar />
      </div>
      <div className="flex-1 pt-24">{children}</div>
      <div className="lg:hidden h-20">
        <BottomNav />
      </div>
      <SearchCommandDialog />
    </CommandDialogProvider>
  );
}
