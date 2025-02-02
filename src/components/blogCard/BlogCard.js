import React from "react";
import "./BlogCard.css";

export default function BlogCard({ blog, theme }) {
  return (
    <div className="blog-card" onClick={() => window.open(blog.link, "_blank")}>
      <div className="blog-image">
        <img
          src={`/thumbnails/${blog.thumbnail}`}
          alt={blog.title}
        />
      </div>
      <div className={`blog-content ${theme.name}`}>
        <h3 style={{ color: theme.text }}>{blog.title}</h3>
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
