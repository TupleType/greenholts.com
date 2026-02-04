import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  url: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  thumbnail: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  showRightBorder?: boolean;
  priority?: boolean;
}

export function BlogCard({
  url,
  title,
  description,
  date,
  readTime,
  thumbnail,
  thumbnailWidth,
  thumbnailHeight,
  showRightBorder = true,
  priority = false,
}: BlogCardProps) {
  return (
    <Link
      href={url}
      className={cn(
        "group before:bg-border after:bg-border relative block before:absolute before:top-0 before:-left-0.5 before:z-10 before:h-screen before:w-px before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-0 after:h-px after:w-screen after:content-['']",
        showRightBorder && "border-border border-b-0 md:border-r",
      )}
    >
      <div className="flex h-full flex-col">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            width={thumbnailWidth}
            height={thumbnailHeight}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            fetchPriority={priority ? "high" : "low"}
          />
        </div>

        <div className="flex flex-1 flex-col gap-2 p-6">
          <h2
            className="text-card-foreground font-semibold underline-offset-4 group-hover:underline"
            title={title}
          >
            {title}
          </h2>
          <p className="text-muted-foreground text-xs font-bold">{readTime}</p>
          <p
            className="text-muted-foreground line-clamp-5 text-sm"
            title={description}
          >
            {description}
          </p>
          <time className="text-muted-foreground mt-auto block text-sm font-medium">
            {date}
          </time>
        </div>
      </div>
    </Link>
  );
}
