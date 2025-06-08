import { CommandDialogProvider } from "@/components/CommandDialogContext";
import BottomNav from "./BottomNav";
import { SearchCommandDialog } from "./SearchCommandDialog";
import { Sidebar } from "./Sidebar";
import type { CategoryCount } from "@/lib/categories";
import { TableOfContents } from "lucide-react";

export default function AppShell({
  children,
  categories,
}: {
  children: React.ReactNode;
  categories: CategoryCount[];
}) {
  return (
    <CommandDialogProvider>
      <div className="hidden lg:block lg:sticky lg:top-0 lg:h-screen">
        <Sidebar categories={categories} />
      </div>
      <main className="flex-1 pt-24 px-8 xl:px-0 max-w-3xl mx-auto mb-24 lg:mb-16">
        {children}
      </main>
      <div className="hidden xl:block xl:sticky xl:top-24 xl:h-[calc(100vh-6rem)] w-64 shrink-0 px-4">
        <TableOfContents />
      </div>
      <div className="lg:hidden h-20">
        <BottomNav categories={categories} />
      </div>
      <SearchCommandDialog />
    </CommandDialogProvider>
  );
}
