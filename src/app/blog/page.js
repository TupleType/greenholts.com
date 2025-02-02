import blogs from "@/shared/blogs.json";
import { greeting, seo } from "@/portfolio.js";
import BlogContainer from "@/containers/blog/BlogContainer";

function getJsonld() {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toISOString().split("T")[0]; // Returns YYYY-MM-DD
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
  title: "Asi Greenholts - Blog",
  openGraph: {
    title: "Asi Greenholts - Blog",
  },
  twitter: {
    title: "Asi Greenholts - Blog",
  },
};

export default function Blog() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogContainer blogs={blogs} />
    </>
  );
}
