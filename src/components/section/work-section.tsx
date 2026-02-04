"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

function calculateDuration(start: string, end: string | null): string {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth() + 1;

  if (months <= 0) {
    years--;
    months += 12;
  }

  if (months >= 12) {
    years++;
    months -= 12;
  }

  const parts: string[] = [];
  if (years > 0) {
    parts.push(`${years} year${years > 1 ? "s" : ""}`);
  }
  if (months > 0) {
    parts.push(`${months} month${months > 1 ? "s" : ""}`);
  }

  return parts.length > 0 ? parts.join(" ") : "1 month";
}

function LogoImage({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="ring-border bg-muted size-8 flex-none rounded-full border p-1 shadow ring-2 md:size-10" />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="ring-border size-8 flex-none overflow-hidden rounded-full border bg-white object-contain p-1 shadow ring-2 md:size-10"
      onError={() => setImageError(true)}
    />
  );
}

export default function WorkSection() {
  return (
    <Accordion type="single" collapsible className="grid w-full gap-6">
      {DATA.work.map((work) => (
        <AccordionItem
          key={work.company}
          value={work.company}
          className="grid w-full gap-2 border-b-0"
        >
          <AccordionTrigger className="group cursor-pointer rounded-none p-0 transition-colors hover:no-underline [&>svg]:hidden">
            <div className="flex w-full items-center justify-between gap-x-3 text-left">
              <div className="flex min-w-0 flex-1 items-center gap-x-3">
                <LogoImage
                  src={work.logoUrl}
                  alt={work.company}
                  width={work.logoWidth}
                  height={work.logoHeight}
                />
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <div className="flex items-center gap-2 leading-none font-semibold">
                    {work.company}
                    <span className="relative inline-flex h-3.5 w-3.5 items-center">
                      <ChevronRight
                        className={cn(
                          "text-muted-foreground absolute h-3.5 w-3.5 shrink-0 stroke-2 transition-all duration-300 ease-out",
                          "translate-x-0 opacity-100",
                          "group-hover:translate-x-1 group-hover:opacity-100",
                          "group-data-[state=open]:translate-x-0 group-data-[state=open]:opacity-0",
                        )}
                      />
                      <ChevronDown
                        className={cn(
                          "text-muted-foreground absolute h-3.5 w-3.5 shrink-0 stroke-2 transition-all duration-200",
                          "rotate-0 opacity-0",
                          "group-data-[state=open]:rotate-180 group-data-[state=open]:opacity-100",
                        )}
                      />
                    </span>
                  </div>
                  <div className="text-muted-foreground font-sans text-sm">
                    {work.title}
                  </div>
                </div>
              </div>
              <div className="text-muted-foreground flex flex-none flex-col items-end gap-0.5 text-right text-xs tabular-nums">
                <span>
                  {work.start} - {"end" in work ? work.end : "Present"}
                </span>
                <span>
                  {calculateDuration(
                    work.start,
                    "end" in work ? work.end : null,
                  )}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground ml-13 p-0 text-xs sm:text-sm">
            {work.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
