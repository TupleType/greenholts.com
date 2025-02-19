"use client";

import React from "react";
import "./Talks.css";
import TalksCard from "@/components/talksCard/TalksCard";
import TalksData from "@/shared/talks.json";
import Fade from "@/components/Fade/Fade";

export default function Talks() {
  return (
    <div className="talks-main">
      <Fade direction="left" duration={1000}>
        <h1 className="talks-title title">Talks</h1>
      </Fade>
      <div className="talks-cards-div">
        {TalksData.data.map((talk) => {
          return <TalksCard talk={talk} key={`${talk.event}-${talk.title}`} />;
        })}
      </div>
    </div>
  );
}
