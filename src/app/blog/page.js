import blogs from "@/shared/blogs.json";
import { greeting, seo } from "@/portfolio.js";
import BlogContainer from "@/containers/blog/BlogContainer";

const title = "Asi Greenholts - Blog";

function getJsonld() {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const pad = (num) => String(num).padStart(2, "0");

    // Format date and time
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());

    // Format timezone
    const tzOffset = date.getTimezoneOffset();
    const tzHours = pad(Math.abs(Math.floor(tzOffset / 60)));
    const tzMinutes = pad(Math.abs(tzOffset % 60));
    const tzSign = tzOffset <= 0 ? "+" : "-";

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${tzSign}${tzHours}:${tzMinutes}`;
  };

  const blogPosts = blogs.data.map((blog) => {
    return {
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.description,
      image: `${seo.og.url}thumbnails/${blog.thumbnail}`,
      datePublished: formatDate(blog.date),
      author: {
        "@type": "Person",
        name: greeting.name,
        url: seo.og.url,
      },
      url: blog.link,
    };
  });
  const jsonld = {
    "@context": "https://schema.org/",
    "@type": "Blog",
    name: greeting.name,
    description: greeting.description,
    url: `${seo.og.url}blog`,
    blogPost: blogPosts,
  };
  return jsonld;
}

const jsonLd = getJsonld();

export const metadata = {
  title: title,
  openGraph: {
    title: title,
  },
  twitter: {
    title: title,
  },
};

export default function Blog() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogContainer blogs={blogs} />
    </>
  );
}
