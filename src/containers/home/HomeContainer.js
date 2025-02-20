"use client";

import Greeting from "@/containers/greeting/Greeting";
import dynamic from "next/dynamic";
import "./HomeContainer.css";
import Header from "@/components/header/Header";

// const Header = dynamic(() => import("@/components/header/Header"), {
//   ssr: false,
// });
const Skills = dynamic(() => import("@/containers/whatido/Whatido"), {
  ssr: false,
});
const Footer = dynamic(() => import("@/components/footer/Footer"), {
  ssr: false,
});
const TopButton = dynamic(() => import("@/components/topButton/TopButton"), {
  ssr: false,
});
const Projects = dynamic(() => import("@/containers/projects/Projects"), {
  ssr: false,
});
const Talks = dynamic(() => import("@/containers/talks/Talks"), { ssr: false });
const GoToBlog = dynamic(() => import("@/components/GoToBlogButton/GoToBlog"), {
  ssr: false,
});

export default function HomeContainer() {
  return (
    <>
      <div className="home-header">
        <Header />
      </div>
      <div className="home-container">
        <Greeting />
        <Skills />
        <Projects />
        <Talks />
        <GoToBlog />
      </div>
      <Footer />
      <TopButton />
    </>
  );
}
