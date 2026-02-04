"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Star, GitFork } from "lucide-react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { useState } from "react";
import Image from "next/image";

function ProjectImage({
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
    return <div className="bg-muted h-48 w-full" />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="w-full object-cover"
      style={{ aspectRatio: `${width} / ${height}` }}
      onError={() => setImageError(true)}
    />
  );
}

export interface Project {
  title: string;
  href: string;
  description: string;
  technologies: readonly string[];
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  github?: {
    stars: string;
    forks: string;
  };
}

interface Props extends Project {
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  technologies,
  image,
  imageWidth,
  imageHeight,
  github,
  className,
}: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "border-border hover:ring-muted flex cursor-pointer flex-col overflow-hidden rounded-xl border transition-all duration-200 hover:ring-2 md:h-full",
        className,
      )}
    >
      <div className="relative shrink-0">
        <div className="block">
          {image && imageWidth && imageHeight && !image.startsWith("http") ? (
            <ProjectImage src={image} alt={title} width={414} height={207} />
          ) : (
            <div className="bg-muted h-48 w-full" />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3 p-6 md:flex-1">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              {github && (
                <button className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                  <Icons.github className="h-4 w-4" />
                </button>
              )}
              <h3 className="font-semibold">{title}</h3>
            </div>
            {github && (
              <div className="text-muted-foreground flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-current" />
                  <span>{github.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="h-3 w-3" />
                  <span>{github.forks}</span>
                </div>
              </div>
            )}
          </div>
          <button
            className="text-muted-foreground hover:text-foreground focus-visible:ring-ring cursor-pointer rounded-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
        <div className="prose text-muted-foreground dark:prose-invert max-w-full font-sans text-sm leading-relaxed text-pretty">
          {description}
        </div>
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {technologies.map((technology) => (
              <Badge
                key={technology}
                className="border-border h-6 w-fit border px-2 text-[11px] font-medium"
                variant="outline"
              >
                {technology}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
