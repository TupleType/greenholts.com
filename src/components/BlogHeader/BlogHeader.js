"use client";

import React from "react";
import { Fade } from "react-swift-reveal";
import "./BlogHeader.css";
import { blogSettings } from "../../portfolio";
import theme from "@/app/theme";

const BlogHeader = () => {
  return (
    <div className="blog-header">
      <Fade left duration={1000} distance="40px">
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
