import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { List } from "lucide-react";
import { CategoryList } from "./CategoryList";
import type { CategoryCount } from "@/lib/categories";

export function CategoryDialog({
  categories,
}: {
  categories: CategoryCount[];
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          aria-label="Catégories"
          title="Catégories"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium text-foreground transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <List className="h-5 w-5" />
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Catégories</DialogTitle>
        </DialogHeader>

        <CategoryList categories={categories} className="text-center" />
      </DialogContent>
    </Dialog>
  );
}
