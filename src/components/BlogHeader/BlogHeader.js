import React from "react";
import { Fade } from "react-reveal";
import "./BlogHeader.css";
import { blogSettings } from "../../portfolio";

const BlogHeader = ({ theme }) => {
  return (
    <div className="blog-header">
      <Fade bottom duration={2000} distance="20px">
        <h1 className="blog-header-text" style={{ color: theme.text }}>
          {blogSettings.title}
        </h1>
        <p
          className="subTitle blog-subtitle"
          style={{ color: theme.secondaryText }}
        >
          {blogSettings.subtitle}
        </p>
      </Fade>
    </div>
  );
};

export default BlogHeader;
