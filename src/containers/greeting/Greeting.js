"use client";

import React, { useState, useEffect } from "react";
import "./Greeting.css";
import SocialMedia from "@/components/socialMedia/SocialMedia";
import { whoami } from "@/portfolio";
import Fade from "@/components/Fade/Fade";
import FeelingProud from "./FeelingProud";
import theme from "@/app/theme";
import ConnectButton from "@/components/connectButton/ConnectButton";

export default function Greeting() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const setSize = () => setWindowWidth(window.innerWidth);
    setSize();
  }, []);

  const content = (
    <div className="greeting-main">
      <div className="greeting-content">
        <h1 className="title" style={{ color: theme.text }}>
          {whoami.title}
        </h1>
        <p className="greeting-text-p text" style={{ color: theme.secondaryText }}>
          {whoami.subTitle}
        </p>
        <SocialMedia />
        <div className="button-greeting-div">
          <ConnectButton />
        </div>
      </div>
      <div className="greeting-image-div">
        <FeelingProud/>
      </div>
    </div>
  );

  // Don't animate on mobile devices
  if (windowWidth === 0) {
    return;
  } else if (windowWidth <= 420) {
    return content;
  } else {
    return (
      <Fade direction="bottom" duration={2000} distance="40px">
        {content}
      </Fade>
    );
  }
}
