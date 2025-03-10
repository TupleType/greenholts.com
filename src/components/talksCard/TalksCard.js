"use client";

import React from "react";
import "./TalksCard.css";
import Fade from "@/components/Fade/Fade";
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
    <Fade direction="left" duration={1000}>
      <div
        className="talk-card-div"
        onClick={handleClick}
        style={{ cursor: talk.link ? "pointer" : "default" }}
      >
        <div className="talk-content">
          {talk.videoId ? (
            <YouTubeEmbed
              videoid={talk.videoId}
              params="controls=0"
              height={"auto"}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                aspectRatio: "16/9",
              }}
            >
              <ExportedImage
                className="talk-video"
                src={`/images/${talk.thumbnail}`}
                width={talk.thumbnail_width}
                height={talk.thumbnail_height}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                alt={talk.event}
              />
            </div>
          )}
        </div>
        <div className="talk-name-div">
          <h2 className="talk-title base-title">{talk.title}</h2>
          <div className="talk-title-row">
            {/* Width and height are defined in css */}
            <ExportedImage
              className="logo_img"
              src={imagePath}
              width={40}
              height={40}
              alt={talk.logo}
            />
            <h3 className="event-name base-title">{talk.event}</h3>
          </div>
        </div>
      </div>
    </Fade>
  );
}
