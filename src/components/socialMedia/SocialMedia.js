import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);

const IconWrapper = styled.span.withConfig({
  shouldComponentUpdate: (prop) => !["link", "fontAwesomeIcon"].includes(prop),
})`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.$backgroundColor};
  padding: 0.7rem;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;

  svg {
    color: white;
    width: 100%;
    height: 100%;
  }

  &:hover {
    background-color: ${({ theme }) => theme.text};
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        return (
          <a
            key={i}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper $backgroundColor={media.backgroundColor}>
              <FontAwesomeIcon icon={`fab ${media.fontAwesomeIcon}`} />
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
}
