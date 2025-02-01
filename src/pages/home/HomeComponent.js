import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Projects from "../../containers/projects/Projects";
import Talks from "../../containers/talks/Talks";
import PageSeoHeader from "../../components/PageSeoHeader/PageSeoHeader";
import {
  greeting,
  seo,
  socialMediaLinks,
  skills,
  talks,
  projects,
} from "../../portfolio.js";
import GoToBlog from "../../components/GoToBlogButton/GoToBlog.js";

class Home extends Component {
  getJsonld = () => {
    let socialMedia = [];
    socialMediaLinks
      .filter(
        (media) =>
          !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
      )
      .forEach((media) => {
        socialMedia.push(media.link);
      });

    const knowsAbout = skills.data[0].softwareSkills.map((skill) => {
      return skill.skillName;
    });

    const performerIn = talks.map((talk) => {
      return {
        "@type": "Event",
        name: talk.title,
        description: talk.description,
        startDate: talk.date,
        location: {
          "@type": "Place",
          name: talk.event,
        },
      };
    });

    const openSource = projects.map((project) => {
      return {
        "@type": "SoftwareSourceCode",
        name: project.name,
        description: project.description,
        codeRepository: project.url,
        programmingLanguage: project.primaryLanguage?.name,
        contributor: {
          "@type": "Person",
          name: greeting.title,
        },
      };
    });

    const jsonld = {
      "@context": "https://schema.org/",
      "@type": "Person",
      name: greeting.name,
      url: seo.og.url,
      sameAs: socialMedia,
      jobTitle: skills.data[0].title,
      worksFor: {
        "@type": "Organization",
        name: skills.data[0].title,
      },
      image: seo.og.image,
      description: greeting.description,
      knowsAbout: knowsAbout,
      performerIn: performerIn,
      creator: openSource,
    };
    return jsonld;
  };

  render() {
    return (
      <div>
        <PageSeoHeader
          title="Asi Greenholts - Home"
          jsonld={this.getJsonld()}
        />
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Projects theme={this.props.theme} />
        <Talks theme={this.props.theme} />
        <GoToBlog theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
