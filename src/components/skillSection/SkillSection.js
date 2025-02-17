"use client";

import React from "react";
import "./SkillSection.css";
import SoftwareSkill from "@/components/softwareSkills/SoftwareSkill";
import { whatido } from "@/portfolio";
import Fade from "@/components/Fade/Fade";
import theme from "@/app/theme";

export default function SkillSection() {
  return (
      <div className="skills-content-div">
        <Fade direction="left" duration={1500}>
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
          {whatido.skills.map((skillSentence, i) => {
            return (
              <p
                key={i}
                className="skills-text text"
                style={{ color: theme.secondaryText }}
              >
                {skillSentence}
              </p>
            );
          })}
        </Fade>
        <Fade direction="left" duration={1500}>
          <SoftwareSkill logos={whatido.softwareSkills} />
        </Fade>
      </div>
  );
}
