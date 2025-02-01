import React from "react";
import "./Project.css";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import ProjectsData from "../../shared/projects.json";

export default function Projects({ theme }) {
  return (
    <div className="main" id="opensource">
      <h1 className="project-title">Open Source</h1>
      <div className="repo-cards-div-main">
        {ProjectsData.data.map((repo) => {
          return (
            <GithubRepoCard repo={repo} theme={theme.isDark} key={repo.id} />
          );
        })}
      </div>
    </div>
  );
}
