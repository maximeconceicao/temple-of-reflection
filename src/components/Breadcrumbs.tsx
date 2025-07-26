import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

type Crumb = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const total = items.length;
  const shouldCondense = total > 3;
  const first = items[0];
  const middle = items.slice(1, -2);
  const lastTwo = items.slice(-2);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {shouldCondense ? (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={first.href}>{first.label}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="size-4" />
                  <span className="sr-only">Toggle menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {middle.map((item) => (
                    <DropdownMenuItem key={item.href}>
                      <a href={item.href}>{item.label}</a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            {lastTwo.map((item, index) => (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={item.href}
                    aria-current={index === 1 ? "page" : undefined}
                  >
                    {item.label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index === 0 && <BreadcrumbSeparator />}
              </>
            ))}
          </>
        ) : (
          items.map((item, index) => (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={item.href}
                  aria-current={index === items.length - 1 ? "page" : undefined}
                >
                  {item.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < items.length - 1 && <BreadcrumbSeparator />}
            </>
          ))
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
