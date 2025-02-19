import blogs from "@/shared/blogs.json";
import { whoami, seo } from "@/portfolio.js";
import BlogContainer from "@/containers/blog/BlogContainer";
import Script from "next/script";
import { blogSettings } from "@/portfolio";

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

  const jsonld = blogs.data.map((blog) => {
    return {
      "@context": "https://schema.org/",
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.description,
      image: `${seo.og.url}thumbnails/${blog.thumbnail}`,
      datePublished: formatDate(blog.date),
      author: {
        "@type": "Person",
        name: whoami.name,
        url: seo.og.url,
      },
      url: blog.link,
    };
  });
  return jsonld;
}

const jsonLd = getJsonld();

export const metadata = {
  title: title,
  description: blogSettings.subtitle,
  openGraph: {
    title: title,
    description: blogSettings.subtitle,
  },
  twitter: {
    title: title,
    description: blogSettings.subtitle,
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
