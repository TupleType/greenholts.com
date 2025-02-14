import {
  whoami,
  seo,
  socialMediaLinks,
  whatido,
  talks,
  projects,
} from "@/portfolio.js";
import Header from "@/components/header/Header";
import Greeting from "@/containers/greeting/Greeting";
import Skills from "@/containers/skills/Skills";
import Footer from "@/components/footer/Footer";
import TopButton from "@/components/topButton/TopButton";
import Projects from "@/containers/projects/Projects";
import Talks from "@/containers/talks/Talks";
import GoToBlog from "@/components/GoToBlogButton/GoToBlog";
import "./page.css";
import Script from "next/script";

const personId = `#author`;

function getJsonld() {
  let socialMedia = [];
  socialMediaLinks
    .filter(
      (media) =>
        !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
    )
    .forEach((media) => {
      socialMedia.push(media.link);
    });

  const knowsAbout = whatido.softwareSkills.map((skill) => {
    return skill.skillName;
  });

  const performerIn = talks.map((talk) => {
    return {
      "@type": "Event",
      name: talk.title,
      description: talk.description,
      startDate: talk.date,
      performer: { "@id": personId },
      location: {
        "@type": "Place",
        name: talk.event,
      },
    };
  });

  const openSource = projects.map((project) => {
    return {
      "@context": "https://schema.org/",
      "@type": "SoftwareSourceCode",
      name: project.name,
      description: project.description,
      codeRepository: project.url,
      programmingLanguage: project.primaryLanguage?.name,
      author: {
        "@id": personId,
      },
    };
  });

  const jsonld = [
    {
      "@context": "https://schema.org/",
      "@type": "ProfilePage",
      mainEntity: {
        "@type": "Person",
        "@id": personId,
        name: whoami.name,
        url: seo.og.url,
        sameAs: socialMedia,
        jobTitle: whatido.title,
        worksFor: {
          "@type": "Organization",
          name: whatido.title,
        },
        image: seo.og.image,
        description: whoami.description,
        knowsAbout: knowsAbout,
        performerIn: performerIn,
      },
    },
    ...openSource,
  ];
  return jsonld;
}

const jsonLd = getJsonld();

export const metadata = {
  title: "Asi Greenholts - Home",
  description: whoami.subTitle,
  openGraph: {
    title: "Asi Greenholts - Home",
    description: whoami.subTitle,
  },
  twitter: {
    title: "Asi Greenholts - Home",
    description: whoami.subTitle,
  },
};

export default function Home() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="home-container">
        <Header />
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
