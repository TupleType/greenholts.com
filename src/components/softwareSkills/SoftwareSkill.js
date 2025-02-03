import React, { useState, useEffect } from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Icon } from "@iconify/react";

const SoftwareSkill = ({ logos }) => {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {logos.map((logo) => (
            <OverlayTrigger
              key={logo.skillName}
              placement="top"
              overlay={
                <Tooltip id={`tooltip-${logo.skillName}`}>
                  <strong>{logo.skillName}</strong>
                </Tooltip>
              }
            >
              <li className="software-skill-inline" name={logo.skillName}>
                <Icon icon={logo.fontAwesomeClassname} />
              </li>
            </OverlayTrigger>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkill;
