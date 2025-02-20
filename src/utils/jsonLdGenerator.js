import {
  whoami,
  seo,
  socialMediaLinks,
  whatido,
  talks,
  projects,
} from "@/portfolio.js";

const personId = `#author`;

export function getJsonld() {
  let socialMedia = socialMediaLinks
    .filter(
      (media) =>
        !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
    )
    .map((media) => media.link);

  const knowsAbout = whatido.softwareSkills.map((skill) => skill.iconName);

  const performerIn = talks.map((talk) => ({
    "@type": "Event",
    name: talk.title,
    description: talk.description,
    startDate: talk.date,
    performer: { "@id": personId },
    location: {
      "@type": "Place",
      name: talk.event,
    },
  }));

  const openSource = projects.map((project) => ({
    "@context": "https://schema.org/",
    "@type": "SoftwareSourceCode",
    name: project.name,
    description: project.description,
    codeRepository: project.url,
    programmingLanguage: project.primaryLanguage?.name,
    author: { "@id": personId },
  }));

  return [
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
        knowsAbout,
        performerIn,
      },
    },
    ...openSource,
  ];
}
