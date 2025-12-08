import React from "react";
import "./BlogCard.css";
import theme from "@/app/theme";
import ExportedImage from "next-image-export-optimizer";

export default function BlogCard({ blog }) {
  return (
    <div
      className="blog-card"
      onClick={() => window.open(blog.link, "_blank")}
      aria-label={blog.title}
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
        <h2 style={{ color: theme.text }} title={blog.title}>
          {blog.title}
        </h2>
        <p className="blog-meta" style={{ color: theme.secondaryText }}>
          {blog.date} · {blog.reading_time}
        </p>
        <p className="blog-description" style={{ color: theme.text }}>
          {blog.description}
        </p>
      </div>
    </div>
  );
}
