import projectsData from "./shared/projects.json";
import TalksData from "./shared/talks.json";

// SEO Related settings
const seo = {
  title: "Asi Greenholts",
  xHandle: "@TupleType",
  og: {
    type: "website",
    url: "https://greenholts.com/",
    locale: "en_US",
  },
};

// Home Page
const whoami = {
  title: "Who Am I",
  name: "Asi Greenholts",
  subTitle:
    "I've always been curious about computers and how they work, which led to a decade-long career in cybersecurity. I enjoy starting never ending projects and automating things that can be done much faster manually.",
  button_link: "https://www.linkedin.com/in/asi-greenholts",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/TupleType",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/asi-greenholts",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "X-Twitter",
    link: "https://x.com/TupleType",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const whatido = {
  title: "Security Research",
  companyName: "Palo Alto Networks",
  fileName: "Research",
  skills: [
    "🔎 I research software development processes, exploring how they can be attacked and how to protect them.",
    "🔎 I research how AI can be used to solve security challenges.",
    "🔎 I read about 400 cyber stories a month because paranoia is just good security practice.",
  ],
  softwareSkills: [
    {
      iconName: "Python",
      iconifyName: "logos:python",
    },
    {
      iconName: "TypeScript",
      iconifyName: "logos:typescript-icon",
    },
    {
      iconName: "Langchain",
      iconifyName: "simple-icons:langchain",
      color: "#1C3B3B",
    },

    {
      iconName: "GitHub",
      iconifyName: "logos:github-icon",
    },
    {
      iconName: "GitLab",
      iconifyName: "logos:gitlab",
    },

    {
      iconName: "Jenkins",
      iconifyName: "vscode-icons:file-type-jenkins",
    },
    {
      iconName: "CircleCI",
      iconifyName: "logos:circleci",
    },
    {
      iconName: "Artifactory",
      iconifyName: "simple-icons:jfrog",
      color: "#41BF47",
    },
    {
      iconName: "AWS",
      iconifyName: "logos:aws",
    },
    {
      iconName: "GCP",
      iconifyName: "logos:google-cloud",
    },
    {
      iconName: "Azure",
      iconifyName: "logos:microsoft-azure",
    },
    {
      iconName: "Feedly",
      iconifyName: "simple-icons:feedly",
      color: "#2bb24c",
    },
  ],
};

const projects = projectsData.data;
const talks = TalksData.data;

// Blog Page
const blogSettings = {
  title: "Security Research Blog",
  subtitle: '"Cybersecurity is a team sport"',
};

// CVEs
// https://www.oracle.com/security-alerts/cpuoct2021.html
// https://www.jenkins.io/security/advisory/2022-12-07/#SECURITY-2661

export {
  projects,
  talks,
  seo,
  whoami,
  socialMediaLinks,
  whatido,
  blogSettings,
};
