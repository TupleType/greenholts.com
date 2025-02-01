import React, { Component } from "react";
import "./Blog.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import TopBlog from "../../components/TopBlog/TopBlog";
import BlogGrid from "../../components/BlogGrid/BlogGrid";
import blogs from "../../shared/blogs.json";
import PageSeoHeader from "../../components/PageSeoHeader/PageSeoHeader";
import { greeting, seo } from "../../portfolio.js";

class Blog extends Component {
  getJsonld = () => {
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
  };

  render() {
    return (
      <>
        <PageSeoHeader
          title="Asi Greenholts - Blog"
          jsonld={this.getJsonld()}
        />
        <div className="blog-container">
          <Header theme={this.props.theme} />
          <div className="blog-content-wrapper">
            <BlogHeader theme={this.props.theme} />
            <TopBlog blog={blogs.data[0]} theme={this.props.theme} />
            <BlogGrid blogs={blogs.data.slice(1)} theme={this.props.theme} />
          </div>
          <Footer theme={this.props.theme} />
          <TopButton theme={this.props.theme} />
        </div>
      </>
    );
  }
}

export default Blog;
