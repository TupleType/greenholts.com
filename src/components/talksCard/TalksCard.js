"use client";

import React from "react";
import "./TalksCard.css";
import { Fade } from "react-swift-reveal";
import dynamic from "next/dynamic";
import ExportedImage from "next-image-export-optimizer";

const YouTubeEmbed = dynamic(
  () => import("@next/third-parties/google").then((mod) => mod.YouTubeEmbed),
  { ssr: false }
);

export default function TalksCard({ talk }) {
  const handleClick = () => {
    if (talk.link) {
      window.open(talk.link, "_blank");
    }
  };

  const imagePath = `/images/${talk.logo}`;

  return (
    <Fade right duration={1000}>
      <div
        className="talk-card-div"
        onClick={handleClick}
        style={{ cursor: talk.link ? "pointer" : "default" }}
      >
        <div className="talk-name-div">
          <div className="talk-title-row">
            {/* Width and height are defined in css */}
            <ExportedImage
              className="logo_img"
              src={imagePath}
              width={40}
              height={40}
              alt={talk.logo}
            />
            <p className="talk-name">{talk.event}</p>
          </div>
          <p className="talk-subtitle">{talk.title}</p>
        </div>
        <div className="talk-content">
          {talk.videoId ? (
            <YouTubeEmbed videoid={talk.videoId} params="controls=0" />
          ) : (
            <p className="talk-abstract">{talk.abstract}</p>
          )}
        </div>
      </div>
    </Fade>
  );
}
