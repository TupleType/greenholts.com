"use client";

import React from "react";
import "./Greeting.css";
import SocialMedia from "@/components/socialMedia/SocialMedia";
import { greeting } from "@/portfolio";
import { Fade } from "react-swift-reveal";
import FeelingProud from "./FeelingProud";
import { chosenTheme as theme } from "@/app/theme";
import ConnectButton from "@/components/connectButton/ConnectButton";

export default function Greeting() {
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="portfolio-repo-btn-div">
                <ConnectButton />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
