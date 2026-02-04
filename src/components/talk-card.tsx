"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";

interface Props {
  title: string;
  href: string;
  youtubeId?: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  conference?: {
    name: string;
    icon: string;
  };
  className?: string;
}

export function TalkCard({
  title,
  href,
  youtubeId,
  image,
  imageWidth,
  imageHeight,
  conference,
  className,
}: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "border-border hover:ring-muted flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border transition-all duration-200 hover:ring-2",
        className,
      )}
    >
      <div
        className="bg-muted relative aspect-video shrink-0 overflow-hidden"
        onClick={(e) => (youtubeId ? e.preventDefault() : undefined)}
      >
        {youtubeId ? (
          <div className="bg-muted h-full w-full [&>lite-youtube]:absolute [&>lite-youtube]:inset-0 [&>lite-youtube]:h-full [&>lite-youtube]:w-full">
            <YouTubeEmbed videoid={youtubeId} params="controls=1" />
          </div>
        ) : image && imageWidth && imageHeight ? (
          <Image
            src={image}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="bg-muted h-full w-full" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-start gap-2">
            {conference && (
              <div className="text-muted-foreground shrink-0">
                <Image
                  src={conference.icon}
                  alt={conference.name}
                  width={40}
                  height={40}
                  className="h-12 w-12 object-contain"
                />
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              <h3 className="font-semibold">{title}</h3>
              {conference && (
                <span className="text-muted-foreground text-sm">
                  {conference.name}
                </span>
              )}
            </div>
          </div>
          <button
            className="text-muted-foreground hover:text-foreground focus-visible:ring-ring shrink-0 cursor-pointer rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>
    </Link>
  );
}
