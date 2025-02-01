import React from "react";
import "./TopBlog.css";
import { Fade } from "react-reveal";

const TopBlog = ({ blog, theme }) => {
  return (
    <Fade top duration={2000} distance="20px" key={blog.id}>
      <div className="top-blog">
        <div
          className="top-blog-card"
          onClick={() => window.open(blog.link, "_blank")}
        >
          <div className="top-blog-image">
            <img
              src={`${process.env.PUBLIC_URL}thumbnails/${blog.thumbnail}`}
              alt={blog.title}
            />
          </div>
          <div className={`top-blog-content ${theme.name}`}>
            <h3 style={{ color: theme.text }}>{blog.title}</h3>
            <p className="top-blog-meta" style={{ color: theme.secondaryText }}>
              {blog.date} · {blog.reading_time}
            </p>
            <p className="top-blog-description" style={{ color: theme.text }}>
              {blog.description}
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default TopBlog;
