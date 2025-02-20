"use client";

import dynamic from "next/dynamic";
import "./Greeting.css";
import { whoami } from "@/portfolio";
import theme from "@/app/theme";
import ResponsiveAnimation from "@/components/ResponsiveAnimation/ResponsiveAnimation";

const SocialMedia = dynamic(
  () => import("@/components/socialMedia/SocialMedia"),
  { ssr: false }
);
const ConnectButton = dynamic(
  () => import("@/components/connectButton/ConnectButton"),
  { ssr: false }
);
const FeelingProud = dynamic(() => import("./FeelingProud"), { ssr: false });

export default function Greeting() {
  return (
    <ResponsiveAnimation direction="bottom" duration={2000} distance="40px">
      <div className="greeting-main">
        <div className="greeting-content">
          <h1 className="title" style={{ color: theme.text }}>
            {whoami.title}
          </h1>
          <p
            className="greeting-text-p text"
            style={{ color: theme.secondaryText }}
          >
            {whoami.subTitle}
          </p>
          <SocialMedia />
          <div className="button-greeting-div">
            <ConnectButton />
          </div>
        </div>
        <div className="greeting-image-div">
          <FeelingProud />
        </div>
      </div>
    </ResponsiveAnimation>
  );
}
