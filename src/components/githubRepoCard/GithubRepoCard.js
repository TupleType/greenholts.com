"use client";

import React from "react";
import "./GithubRepoCard.css";
import Fade from "@/components/Fade/Fade";
import RepoIcon from "./RepoIcon";
import StarIcon from "./StarIcon";
import ForkIcon from "./ForkIcon";

export default function GithubRepoCard({ repo }) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL in ${name} is undefined`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade direction="right" duration={1000}>
      <div
        className="repo-card-div"
        key={repo.id}
        onClick={() => openUrlInNewTab(repo.url, repo.name)}
      >
        <div className="repo-name-div">
          <RepoIcon />
          <h2 className="repo-name">{repo.name}</h2>
        </div>
        <p className="repo-description subText">{repo.description}</p>
        <div className="repo-stats">
          <div className="repo-left-stat">
            {repo.primaryLanguage !== null && (
              <span>
                <div
                  className="language-color"
                  style={{ backgroundColor: repo.primaryLanguage.color }}
                ></div>
                <p>{repo.primaryLanguage.name}</p>
              </span>
            )}
            <span>
              <StarIcon />
              <p>{repo.stargazers.totalCount}</p>
            </span>
            <span>
              <ForkIcon />
              <p>{repo.forkCount}</p>
            </span>
          </div>
        </div>
      </div>
    </Fade>
  );
}
