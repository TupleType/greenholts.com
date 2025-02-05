"use client";

import React from "react";
import { Fade } from "react-swift-reveal";
import BlogCard from "../blogCard/BlogCard";
import "./BlogGrid.css";
import theme from "@/app/theme";

const BlogGrid = ({ blogs }) => {
  return (
    <div className="blog-grid">
      {blogs.map((blog) => (
        <Fade bottom duration={2000} distance="20px" key={blog.id}>
          <BlogCard blog={blog} />
        </Fade>
      ))}
    </div>
  );
};

export default BlogGrid;
