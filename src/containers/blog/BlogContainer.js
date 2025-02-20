"use client";

import dynamic from "next/dynamic";
import TopBlog from "@/components/TopBlog/TopBlog";
import "./BlogContainer.css";
import Header from "@/components/header/Header";
import BlogHeader from "@/components/BlogHeader/BlogHeader";

const Footer = dynamic(() => import("@/components/footer/Footer"), {
  ssr: false,
});
const TopButton = dynamic(() => import("@/components/topButton/TopButton"), {
  ssr: false,
});
const BlogGrid = dynamic(() => import("@/components/BlogGrid/BlogGrid"), {
  ssr: false,
});

export default function BlogContainer({ blogs }) {
  return (
    <>
      <div className="blog-container">
        <Header />
        <div className="blog-content-wrapper">
          <BlogHeader />
          <TopBlog blog={blogs.data[0]} />
          <BlogGrid blogs={blogs.data.slice(1)} />
        </div>
      </div>
      <Footer />
      <TopButton />
    </>
  );
}
