"use client";

import "./Project.css";
import GithubRepoCard from "@/components/githubRepoCard/GithubRepoCard";
import ProjectsData from "@/shared/projects.json";
import Fade from "@/components/Fade/Fade";

export default function Projects() {
  return (
    <div className="projects-main">
      <Fade direction="right" duration={1000}>
        <h1 className="title">Open Source</h1>
      </Fade>
      <div className="repo-cards-div-main">
        {ProjectsData.data.map((repo) => {
          return <GithubRepoCard repo={repo} key={repo.id} />;
        })}
      </div>
    </div>
  );
}
