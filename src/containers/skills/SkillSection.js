"use client";

import React from "react";
import "./Skills.css";
import SoftwareSkill from "@/components/softwareSkills/SoftwareSkill";
import { whatido } from "@/portfolio";
import Fade from "@/components/Fade/Fade";
import Research from "./ResearchImg";
import theme from "@/app/theme";

function GetSkillSvg(props) {
  if (props.fileName === "Research") return <Research theme={props.theme} />;
}

export default function SkillSection() {
  return (
    <div>
      <div className="skills-main-div">
        <div className="skills-text-div">
          <Fade direction="left" duration={1000}>
            <h2 className="skills-heading" style={{ color: theme.text }}>
              {whatido.title}
            </h2>
            <span
              className="skills-heading"
              style={{ color: theme.secondaryText }}
            >
              @{whatido.companyName}
            </span>
          </Fade>
          <Fade direction="left" duration={1500}>
            <SoftwareSkill logos={whatido.softwareSkills} />
          </Fade>
          <Fade direction="left" duration={2000}>
            <div>
              {whatido.skills.map((skillSentence, i) => {
                return (
                  <p
                    key={i}
                    className="subTitle skills-text"
                    style={{ color: theme.secondaryText }}
                  >
                    {skillSentence}
                  </p>
                );
              })}
            </div>
          </Fade>
        </div>
        <Fade direction="right" duration={2000}>
          <div className="skills-image-div">
            <GetSkillSvg fileName={whatido.fileName} />
          </div>
        </Fade>
      </div>
    </div>
  );
}
