import { Suspense } from "react";
import { BlogCard } from "@/components/blog/blog-card";
import { TagFilter } from "@/components/blog/tag-filter";
import { BLOG_POSTS, BLOG_CONFIG } from "@/data/blog";
import { DATA } from "@/data/resume";
import { Metadata } from "next";
import { BlogData } from "@/data/blog";

const metadataKeywords = [
  "cyber security",
  "security research",
  "GitHub Actions",
  "CI/CD security",
  "supply chain attacks",
  "software supply chain",
  "open source security",
  "DevSecOps",
  "malware analysis",
  "incident response",
  "vulnerability research",
  "security best practices",
  "threat intelligence",
];

export const metadata: Metadata = {
  title: `${DATA.name} - ${BLOG_CONFIG.pageTitle}`,
  description: BLOG_CONFIG.pageDescription,
  keywords: metadataKeywords,
  authors: [
    {
      name: DATA.name,
      url: DATA.url,
    },
  ],
  creator: "MagicUI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: DATA.url,
    title: `${DATA.name} - ${BLOG_CONFIG.pageTitle}`,
    description: BLOG_CONFIG.pageDescription,
    siteName: DATA.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${DATA.name} - ${BLOG_CONFIG.pageTitle}`,
    description: BLOG_CONFIG.pageDescription,
    creator: DATA.contact.social.X.url.split("/")[3],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const allPages: BlogData[] = BLOG_POSTS;
  const sortedBlogs = allPages.sort((a, b) => {
    const dateA = new Date(a.publishedAt).getTime();
    const dateB = new Date(b.publishedAt).getTime();
    return dateB - dateA;
  });

  const allTags = [
    "All",
    ...Array.from(
      new Set(sortedBlogs.flatMap((blog) => blog.tags || [])),
    ).sort(),
  ];

  const selectedTag = resolvedSearchParams.tag || "All";
  const filteredBlogs =
    selectedTag === "All"
      ? sortedBlogs
      : sortedBlogs.filter((blog) => blog.tags?.includes(selectedTag));

  const tagCounts = allTags.reduce(
    (acc, tag) => {
      if (tag === "All") {
        acc[tag] = sortedBlogs.length;
      } else {
        acc[tag] = sortedBlogs.filter((blog) =>
          blog.tags?.includes(tag),
        ).length;
      }
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <main className="bg-background relative min-h-screen">
      <div className="border-border relative z-10 flex flex-col justify-start gap-6 border-b pb-14">
        <div className="mx-auto w-full max-w-2xl lg:max-w-4xl">
          <div className="flex flex-col gap-2">
            {/* The last word has accent color */}
            <h1 className="text-4xl font-semibold tracking-tighter md:text-5xl">
              {BLOG_CONFIG.pageTitle.split(" ").map((word, index, arr) => (
                <span
                  key={index}
                  className={index === arr.length - 1 ? "text-blue-accent" : ""}
                >
                  {word}
                  {index < arr.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>
            <p className="text-muted-foreground md:text-lg lg:text-xl">
              {BLOG_CONFIG.pageDescription}
            </p>
          </div>
        </div>
        {allTags.length > 0 && (
          <div className="mx-auto w-full max-w-2xl lg:max-w-4xl">
            <TagFilter
              tags={allTags}
              selectedTag={selectedTag}
              tagCounts={tagCounts}
            />
          </div>
        )}
      </div>

      <div className="mx-auto w-full max-w-2xl px-6 lg:max-w-4xl lg:px-0">
        <Suspense fallback={<div>Loading articles...</div>}>
          <div
            className={`border-border relative grid grid-cols-1 overflow-hidden border-x md:grid-cols-2 lg:grid-cols-3 ${
              filteredBlogs.length < 4 ? "border-b" : "border-b-0"
            }`}
          >
            {filteredBlogs.map((blog, index) => {
              const date = new Date(blog.publishedAt);
              const formattedDate = formatDate(date);

              return (
                <BlogCard
                  key={blog.link}
                  url={blog.link}
                  title={blog.title}
                  description={blog.summary}
                  date={formattedDate}
                  readTime={blog.readTime}
                  thumbnail={blog.thumbnail}
                  thumbnailWidth={blog.thumbnailWidth}
                  thumbnailHeight={blog.thumbnailHeight}
                  showRightBorder={filteredBlogs.length < 3}
                  priority={index === 0}
                />
              );
            })}
          </div>
        </Suspense>
      </div>
    </main>
  );
}
