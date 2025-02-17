import React from "react";
import "./Project.css";
import GithubRepoCard from "@/components/githubRepoCard/GithubRepoCard";
import ProjectsData from "@/shared/projects.json";

export default function Projects() {
  return (
    <div className="projects-main">
      <h1 className="title">Open Source</h1>
      <div className="repo-cards-div-main">
        {ProjectsData.data.map((repo) => {
          return <GithubRepoCard repo={repo} key={repo.id} />;
        })}
      </div>
    </div>
  );
}
