"use client";

import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span.withConfig({
  shouldComponentUpdate: (prop) => !['link', 'fontAwesomeIcon'].includes(prop),
})`
  i {
    background-color: ${(props) => props.$backgroundColor};
  }
  &:hover i {
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
            <IconWrapper
              $backgroundColor={media.backgroundColor}
            >
              <i className={`fab ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
}
