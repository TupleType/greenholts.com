import React from "react";
import "./BlogCard.css";
import theme from "@/app/theme";
import ExportedImage from "next-image-export-optimizer";

export default function BlogCard({ blog }) {
  const handleClick = () => window.open(blog.link, "_blank");

  return (
    <article
      className="blog-card"
      onClick={handleClick}
      role="article"
      aria-label={blog.title}
      tabIndex={0}
    >
      <div className="blog-image">
        <ExportedImage
          src={`/images/${blog.thumbnail}`}
          width={blog.thumbnail_width}
          height={blog.thumbnail_height}
          alt={blog.title}
          priority={true}
        />
      </div>
      <div className="blog-content">
        <h2 style={{ color: theme.text }}>{blog.title}</h2>
        <p className="blog-meta" style={{ color: theme.secondaryText }}>
          {blog.date} · {blog.reading_time}
        </p>
        <p className="blog-description" style={{ color: theme.text }}>
          {blog.description}
        </p>
      </div>
    </article>
  );
}
