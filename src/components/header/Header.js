"use client";

import React from "react";
import "./Header.css";
import { Fade } from "react-swift-reveal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { greeting } from "../../portfolio.js";
import theme from "@/app/theme";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
          <Link href="/" className="logo">
            <span className="logo-name" style={{ color: theme.text }}>
              &gt;&gt;&gt; {greeting.name}
            </span>
            <span style={{ color: theme.text }}></span>
          </Link>
          <input
            className="menu-btn"
            type="checkbox"
            id="menu-btn"
            onChange={handleMenuToggle}
            checked={isMenuOpen}
          />
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
        </header>
      </div>
    </Fade>
  );
};

export default Header;
