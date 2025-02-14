"use client";

import React from "react";
import "./Header.css";
import Fade from "@/components/Fade/Fade";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { whoami } from "../../portfolio.js";
import theme from "@/app/theme";

const Header = () => {
  const pathname = usePathname();

  return (
    <Fade direction="top" duration={1000} distance="20px">
      <div className="header">
        <Link href="/" className="logo">
          <span className="logo-name" style={{ color: theme.text }}>
            &gt;&gt;&gt; {whoami.name}
          </span>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu" style={{ backgroundColor: theme.body }}>
          <li>
            <Link
              href="/"
              style={{
                color: theme.text,
                fontWeight: pathname === "/" ? "bold" : "normal",
              }}
              className="menu-item"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              style={{
                color: theme.text,
                fontWeight: pathname === "/blog" ? "bold" : "normal",
              }}
              className="menu-item"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </Fade>
  );
};

export default Header;
