import HomeContainer from "@/containers/home/HomeContainer";
import {
  greeting,
  seo,
  socialMediaLinks,
  skills,
  talks,
  projects,
} from "@/portfolio.js";

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
}

const jsonLd = getJsonld();

export const metadata = {
  title: "Asi Greenholts - Home",
  twitter: {
    title: "Asi Greenholts - Home",
  },
};

export default function Home() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContainer />
    </div>
  );
}
