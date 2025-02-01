import React from "react";
import "./Talks.css";
import TalksCard from "../../components/talksCard/TalksCard";
import TalksData from "../../shared/talks.json";

export default function Talks({ theme }) {
  return (
    <div className="main" id="talks">
      <h1 className="talks-title">Talks</h1>
      <div className="talks-cards-div">
        {TalksData.data.map((talk) => {
          return <TalksCard talk={talk} theme={theme.isDark} key={talk.id} />;
        })}
      </div>
    </div>
  );
}
