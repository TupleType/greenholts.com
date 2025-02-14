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
    "I've always been curious about computers and how they work, which led to a career of 9+ years in cybersecurity. I enjoy starting never ending projects and automating things that can be done much faster manually.",
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
    "🔎 Turning Application Security from 'meh' to 'whoa!' one line of code at a time.",
    "🔎 Writes code to break code, then writes more code to protect it. Basically, I'm my own worst enemy.",
    "🔎 I read about 400 cyber stories a month because paranoia is just good security practice.",
  ],
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "React",
      fontAwesomeClassname: "logos:react",
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "vscode-icons:file-type-jenkins",
    },
    {
      skillName: "Langchain",
      fontAwesomeClassname: "simple-icons:langchain",
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "and more...",
      fontAwesomeClassname: "fa-ellipsis-h",
    },
  ],
};

const projects = projectsData.data;
const talks = TalksData.data;

// Blog Page
const blogSettings = {
  title: "Security Research & Insights",
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
