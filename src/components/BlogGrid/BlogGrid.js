"use client";

import React from "react";
import Fade from "@/components/Fade/Fade";
import BlogCard from "../blogCard/BlogCard";
import "./BlogGrid.css";

const BlogGrid = ({ blogs }) => {
  return (
    <div className="blog-grid">
      {blogs.map((blog) => (
        <Fade direction="bottom" duration={2000} distance="20px">
          <BlogCard blog={blog} />
        </Fade>
      ))}
    </div>
  );
};

export default BlogGrid;
