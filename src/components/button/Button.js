import React from "react";
import "./Button.css";
import theme from "@/app/theme";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Button({ text, href, newTab, icon }) {
  const content = icon ? (
    <div className="button-content">
      <Icon icon={icon} className="button-icon" />
      {text}
    </div>
  ) : (
    text
  );

  return (
    <Link
      className="main-button subText"
      href={href}
      target={newTab && "_blank"}
      style={{
        "--button-text-color": theme.body,
        "--button-bg-color": theme.text,
        "--button-border-color": theme.text,
        "--button-hover-text-color": theme.text,
        "--button-hover-bg-color": theme.body,
      }}
    >
      {content}
    </Link>
  );
}
