import projectsData from "./shared/projects.json";
import TalksData from "./shared/talks.json";

//Home Page
const greeting = {
  title: "Who Am I",
  name: "Asi Greenholts",
  subTitle:
    "With 9+ years in cybersecurity, I thrive on solving complex problems. My experience includes SOC management, incident response, security architecture and security engineering. I enjoy developing software and automating things that can be done much faster manually.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  linkedin_link: "https://www.linkedin.com/in/asi-greenholts",
};

//SEO Related settings
const seo = {
  title: "Asi Greenholts",
  description: greeting.subTitle,
  xHandle: "@TupleType",
  og: {
    type: "website",
    url: "https://greenholts.com/",
    locale: "en_US",
  },
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

const skills = {
  data: [
    {
      title: "Security Research",
      companyName: "Palo Alto Networks",
      fileName: "Research",
      skills: [
        "🔎 Turning Application Security from 'meh' to 'whoa!' one line of code at a time.",
        "🔎 Writes code to break code, then writes more code to protect it. Basically, I'm my own worst enemy.",
        "🔎 Reads about 400 cyber stories a month because paranoia is just good security practice.",
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
    },
  ],
};

//Blog Page
const blogSettings = {
  title: "Security Research & Insights",
  subtitle: '"Cybersecurity is a team sport"',
};

const projects = projectsData.data;
const talks = TalksData.data;

// CVEs
// https://www.oracle.com/security-alerts/cpuoct2021.html
// https://www.jenkins.io/security/advisory/2022-12-07/#SECURITY-2661

export {
  projects,
  talks,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  blogSettings,
};
