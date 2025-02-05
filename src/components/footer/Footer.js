import React from "react";
import "./Footer.css";
import { greeting } from "../../portfolio.js";
import SocialMedia from "../socialMedia/SocialMedia";
import { chosenTheme as theme } from "@/app/theme";

export default function Footer(props) {
  return (
    <div className="footer-main">
      <div className="footer-div">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-logo">
              <span style={{ color: theme.text }}>&gt;&gt;&gt; </span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.name}
              </span>
              <span style={{ color: theme.text }}></span>
            </div>
            <p className="footer-text" style={{ color: theme.secondaryText }}>
              Theme by{" "}
              <a
                href="https://github.com/ashutosh1919/masterPortfolio"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.secondaryText }}
              >
                masterPortfolio
              </a>
            </p>
            <div className="footer-social">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
