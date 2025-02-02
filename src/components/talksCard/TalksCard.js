import React from "react";
import "./TalksCard.css";
import { Fade } from "react-swift-reveal";

export default function TalksCard({ talk, isDark }) {
  const handleClick = () => {
    if (talk.link) {
      window.open(talk.link, "_blank");
    }
  };

  const imagePath = `/images/${talk.logo}`;

  return (
    <Fade right duration={1000}>
      <div
        className={isDark ? "dark-card-mode talk-card-div" : "talk-card-div"}
        onClick={handleClick}
        style={{ cursor: talk.link ? "pointer" : "default" }}
      >
        <div className="talk-name-div">
          <div className="talk-title-row">
            <img className="logo_img" src={imagePath} alt={talk.logo} />
            <p className="talk-name">{talk.event}</p>
          </div>
          <p className="talk-subtitle">{talk.title}</p>
        </div>
        <div className="talk-content">
          {talk.videoUrl ? (
            <iframe
              width="560"
              height="315"
              src={talk.videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            <p className="talk-abstract">{talk.abstract}</p>
          )}
        </div>
      </div>
    </Fade>
  );
}
