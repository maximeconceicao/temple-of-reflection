"use client";

import { CommandDialogProvider } from "@/components/CommandDialogContext";
import BottomNav from "./BottomNav";
import { SearchCommandDialog } from "./SearchCommandDialog";
import { Sidebar } from "./Sidebar";

type Category = {
  theme: string;
  count: number;
};

export default function AppShell({
  children,
  categories,
}: {
  children: React.ReactNode;
  categories: Category[];
}) {
  return (
    <CommandDialogProvider>
      <div className="hidden lg:block lg:sticky lg:top-0 lg:h-screen">
        <Sidebar categories={categories} />
      </div>
      <div className="flex-1 pt-24">{children}</div>
      <div className="lg:hidden h-20">
        <BottomNav />
      </div>
      <SearchCommandDialog />
    </CommandDialogProvider>
  );
}
