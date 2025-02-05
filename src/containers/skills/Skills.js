"use client";

import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-swift-reveal";
import theme from "@/app/theme";

export default function Skills() {
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            What I Do
          </h1>
        </Fade>
      </div>
      <SkillSection />
    </div>
  );
}
