import {
  greeting,
  seo,
  socialMediaLinks,
  skills,
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

  const knowsAbout = skills.data[0].softwareSkills.map((skill) => {
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

  const jsonld = {
    "@context": "https://schema.org/",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
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
      },
      ...openSource,
    ],
  };
  return jsonld;
}

const jsonLd = getJsonld();

export const metadata = {
  title: "Asi Greenholts - Home",
  openGraph: {
    title: "Asi Greenholts - Home",
  },
  twitter: {
    title: "Asi Greenholts - Home",
  },
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <Greeting />
      <Skills />
      <Projects />
      <Talks />
      <GoToBlog />
      <Footer />
      <TopButton />
    </div>
  );
}
