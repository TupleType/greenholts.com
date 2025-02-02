"use client";

import React, { useContext } from "react";
import Header from "@/components/header/Header";
import Greeting from "@/containers/greeting/Greeting";
import Skills from "@/containers/skills/Skills";
import Footer from "@/components/footer/Footer";
import TopButton from "@/components/topButton/TopButton";
import Projects from "@/containers/projects/Projects";
import Talks from "@/containers/talks/Talks";
import { ThemeContext } from "styled-components";
import GoToBlog from "@/components/GoToBlogButton/GoToBlog";

export default function HomeContainer() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <Header theme={theme} />
      <main style={{ flex: 1 }}>
        <Greeting theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Talks theme={theme} />
        <GoToBlog theme={theme} />
      </main>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </>
  );
}
