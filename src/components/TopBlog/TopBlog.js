"use client";

import React from "react";
import "./TopBlog.css";
import Fade from "@/components/Fade/Fade";
import theme from "@/app/theme";
import ExportedImage from "next-image-export-optimizer";

const TopBlog = ({ blog }) => {
  return (
    <Fade direction="top" duration={2000} distance="20px">
      <div
        className="top-blog-card"
        onClick={() => window.open(blog.link, "_blank")}
        aria-label={blog.title}
      >
        <div className="top-blog-image">
          <ExportedImage
            src={`/images/${blog.thumbnail}`}
            width={blog.thumbnail_width}
            height={blog.thumbnail_height}
            alt={blog.title}
            priority
          />
        </div>
        <div className="top-blog-content">
          <h2 style={{ color: theme.text }}>{blog.title}</h2>
          <p className="top-blog-meta" style={{ color: theme.secondaryText }}>
            {blog.date} · {blog.reading_time}
          </p>
          <p className="top-blog-description" style={{ color: theme.text }}>
            {blog.description}
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default TopBlog;
