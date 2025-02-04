"use client";

import React from "react";
import "./Greeting.css";
import SocialMedia from "@/components/socialMedia/SocialMedia";
import Button from "@/components/button/Button";
import { greeting } from "@/portfolio";
import { Fade } from "react-swift-reveal";
import FeelingProud from "./FeelingProud";
import { chosenTheme as theme } from "@/app/theme";
import { Icon } from "@iconify/react";

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
                <Button
                  text={
                    <>
                      <Icon icon="rivet-icons:user-add-solid" />
                      <span style={{ marginLeft: "10px" }}>
                        Connect with me
                      </span>
                    </>
                  }
                  newTab={true}
                  href={greeting.linkedin_link}
                  theme={theme}
                  className="portfolio-repo-btn"
                ></Button>
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
