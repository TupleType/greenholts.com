"use client";

import React from "react";
import Button from "@/components/button/Button";
import { Fade } from "react-swift-reveal";
import "./GoToBlog.css";

export default function GoToBlog(props) {
  const theme = props.theme;
  return (
    <Fade left duration={1000}>
      <div className="btn-div">
        <Button
          text={<span className="btn">Go To Blog</span>}
          href="/blog"
        ></Button>
      </div>
    </Fade>
  );
}
