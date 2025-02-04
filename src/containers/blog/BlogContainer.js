import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import TopButton from "@/components/topButton/TopButton";
import BlogHeader from "@/components/BlogHeader/BlogHeader";
import TopBlog from "@/components/TopBlog/TopBlog";
import BlogGrid from "@/components/BlogGrid/BlogGrid";
import "./Blog.css";

export default function BlogContainer({ blogs }) {
  return (
    <div className="blog-container">
      <Header />
      <div className="blog-content-wrapper">
        <BlogHeader />
        <TopBlog blog={blogs.data[0]} />
        <BlogGrid blogs={blogs.data.slice(1)} />
      </div>
      <Footer />
      <TopButton />
    </div>
  );
}
