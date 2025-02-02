"use client";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import TopButton from "@/components/topButton/TopButton";
import BlogHeader from "@/components/BlogHeader/BlogHeader";
import TopBlog from "@/components/TopBlog/TopBlog";
import BlogGrid from "@/components/BlogGrid/BlogGrid";
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import "./Blog.css";

export default function BlogContainer({ blogs }) {
  const theme = useContext(ThemeContext);
  return (
    <div className="blog-container">
      <Header theme={theme} />
      <div className="blog-content-wrapper">
        <BlogHeader theme={theme} />
        <TopBlog blog={blogs.data[0]} theme={theme} />
        <BlogGrid blogs={blogs.data.slice(1)} theme={theme} />
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
