"use client";

import React from "react";
import "./Skills.css";
import SoftwareSkill from "@/components/softwareSkills/SoftwareSkill";
import { skills } from "@/portfolio";
import { Fade } from "react-swift-reveal";
import Research from "./ResearchImg";
import { chosenTheme as theme } from "@/app/theme";

function GetSkillSvg(props) {
  if (props.fileName === "Research") return <Research theme={props.theme} />;
}

export default function SkillSection() {
  return (
    <div>
      {skills.data.map((skill, i) => {
        return (
          <div key={i} className="skills-main-div">
            <div className="skills-text-div">
              <Fade left duration={1000}>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
                <h2
                  className="skills-heading"
                  style={{ color: theme.secondaryText }}
                >
                  @{skill.companyName}
                </h2>
              </Fade>
              <Fade left duration={1500}>
                <SoftwareSkill logos={skill.softwareSkills} />
              </Fade>
              <Fade left duration={2000}>
                <div>
                  {skill.skills.map((skillSentence, i) => {
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

            <Fade right duration={2000}>
              <div className="skills-image-div">
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>
            </Fade>
          </div>
        );
      })}
    </div>
  );
}
