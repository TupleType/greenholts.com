import React from "react";
import "./Footer.css";
import { Fade } from "react-swift-reveal";
import { greeting } from "../../portfolio.js";
import SocialMedia from "../socialMedia/SocialMedia";

export default function Footer(props) {
  return (
    <div className="footer-main">
      <div className="footer-div">
        <Fade>
          <div className="footer-content">
            <div className="footer-top">
              <div className="footer-logo">
                <span style={{ color: props.theme.text }}>&gt;&gt;&gt; </span>
                <span className="logo-name" style={{ color: props.theme.text }}>
                  {greeting.name}
                </span>
                <span style={{ color: props.theme.text }}></span>
              </div>
              <p
                className="footer-text"
                style={{ color: props.theme.secondaryText }}
              >
                Theme by{" "}
                <a
                  href="https://github.com/ashutosh1919/masterPortfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: props.theme.secondaryText }}
                >
                  masterPortfolio
                </a>
              </p>
              <div className="footer-social">
                <SocialMedia theme={props.theme} />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
