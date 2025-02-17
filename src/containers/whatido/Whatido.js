"use client";

import React from "react";
import "./Whatido.css";
import SkillSection from "../../components/skillSection/SkillSection";
import Fade from "@/components/Fade/Fade";
import theme from "@/app/theme";
import Research from "@/components/ResearchImg";

export default function Skills() {
  return (
    <div className="skills-main-div">
      <div className="skills-content">
        <Fade direction="left" duration={1500}>
          <h1 className="title" style={{ color: theme.text }}>
            What I Do
          </h1>
        </Fade>
        <SkillSection />
      </div>
      <Fade direction="right" duration={1500} className="skills-image-div">
        <Research />
      </Fade>
    </div>
  );
}
