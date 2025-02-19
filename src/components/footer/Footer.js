import React from "react";
import "./Footer.css";
import { whoami } from "../../portfolio.js";
import SocialMedia from "../socialMedia/SocialMedia";
import theme from "@/app/theme";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-div">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-logo">
              <span style={{ color: theme.text }}>&gt;&gt;&gt; </span>
              <span className="logo-name" style={{ color: theme.text }}>
                {whoami.name}
              </span>
              <span style={{ color: theme.text }}></span>
            </div>
            <a
              href="https://github.com/TupleType/greenholts.com"
              target="_blank"
              rel="noreferrer"
              className="footer-text"
              style={{ color: theme.secondaryText }}
            >
              &lt;/&gt; View Source
            </a>
            <div className="footer-social">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
