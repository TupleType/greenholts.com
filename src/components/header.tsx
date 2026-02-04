"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { DATA } from "@/data/resume";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-30">
      <nav className="bg-card/90 shadow-primary/5 pointer-events-auto relative mx-auto flex w-fit items-center gap-1 rounded-full border px-3 py-2 shadow-[0_0_10px_3px] backdrop-blur-3xl">
        {DATA.navigation.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              isActive(item.href)
                ? "bg-blue-accent text-blue-accent-foreground hover:bg-blue-accent/90"
                : "text-muted-foreground hover:text-foreground hover:bg-muted",
            )}
          >
            {item.label}
          </a>
        ))}
        <Separator orientation="vertical" className="bg-border mx-2 h-6 w-px" />
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="bg-background text-muted-foreground hover:text-foreground hover:bg-muted border-border flex size-10 cursor-pointer items-center justify-center rounded-3xl border p-0 backdrop-blur-3xl transition-colors">
              <ModeToggle className="size-5 cursor-pointer" />
            </div>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="bg-primary text-primary-foreground rounded-xl px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>Theme</p>
            <TooltipArrow className="fill-primary" />
          </TooltipContent>
        </Tooltip>
      </nav>
    </header>
  );
}
