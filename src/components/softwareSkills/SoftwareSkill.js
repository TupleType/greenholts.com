import React, { useState, useEffect } from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const SoftwareSkill = ({ logos }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
                {isClient && logo.fontAwesomeClassname && (
                  <span
                    className="iconify"
                    data-icon={logo.fontAwesomeClassname}
                    data-inline="false"
                  />
                )}
                {isClient && !logo.fontAwesomeClassname && logo.imageSrc && (
                  <img
                    className="skill-image"
                    src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                    alt={logo.skillName}
                  />
                )}
              </li>
            </OverlayTrigger>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SoftwareSkill;
