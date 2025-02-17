import React, { useState } from "react";
import "./SoftwareSkill.css";
import { Icon } from "@iconify/react";
import TooltipPortal from "./TooltipPortal";

const SoftwareSkill = ({ logos }) => {
  const [tooltipAnchor, setTooltipAnchor] = useState(null);
  const [tooltipText, setTooltipText] = useState("");

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {logos.map((logo) => (
            <li
              key={logo.iconName}
              className="software-skill-inline"
              onMouseEnter={(e) => {
                setTooltipAnchor(e.currentTarget);
                setTooltipText(logo.iconName);
              }}
              onMouseLeave={() => setTooltipAnchor(null)}
            >
              <Icon icon={logo.iconifyName} style={{ color: logo.color }} />
            </li>
          ))}
        </ul>
      </div>
      <TooltipPortal text={tooltipText} anchorEl={tooltipAnchor} />
    </div>
  );
};

export default SoftwareSkill;
