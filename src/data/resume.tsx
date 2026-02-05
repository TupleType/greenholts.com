import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Python } from "@/components/ui/svgs/python";
import { Langchain } from "@/components/ui/svgs/langchain";
import { Docker } from "@/components/ui/svgs/docker";
import { AWS } from "@/components/ui/svgs/aws";
import { GCP } from "@/components/ui/svgs/gcp";
import { Azure } from "@/components/ui/svgs/azure";
import { Feedly } from "@/components/ui/svgs/feedly";
import githubStats from "./github-stats.json";

// Helper function to get GitHub stats for a repository
const getGitHubStats = (url: string) => {
  const repoKey = url.replace("https://github.com/", "").toLowerCase();
  return (
    githubStats[repoKey as keyof typeof githubStats] || {
      stars: "0",
      forks: "0",
    }
  );
};

export const DATA = {
  gaId: "G-B53DBKPZ3M",
  name: "Asi Greenholts",
  alternateName: "Asaf Greenholts",
  initials: "AG",
  url: "https://greenholts.com",
  description:
    "Security Researcher at Palo Alto Networks. I love building things and making sure they are secure. Speaker who thrives on stage.",
  summary:
    "I've always been curious about computers and how they work, which led to a decade-long career in cybersecurity. I enjoy starting never ending projects and automating things that can be done much faster manually.",
  avatarUrl: "/me.png",
  skillHighlights: [
    "Research software development processes, exploring how they can be attacked and how to protect them.",
    "Research how AI can be used to solve security challenges.",
    "Reads about 400 cyber stories a month because paranoia is just good security practice.",
  ],
  cves: [
    {
      id: "CVE-2021-35550",
      url: "https://www.oracle.com/security-alerts/cpuoct2021.html",
    },
    {
      id: "CVE-2022-46685",
      url: "https://www.jenkins.io/security/advisory/2022-12-07/",
    },
  ],
  skills: [
    { name: "Python", icon: Python },
    { name: "Typescript", icon: Typescript },
    { name: "React", icon: ReactLight },
    { name: "Langchain", icon: Langchain },
    { name: "Docker", icon: Docker },
    { name: "AWS", icon: AWS },
    { name: "GCP", icon: GCP },
    { name: "Azure", icon: Azure },
    { name: "Feedly", icon: Feedly },
  ],
  navigation: [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/tupleType",
        icon: Icons.github,
        footer: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/asi-greenholts/",
        icon: Icons.linkedin,
        footer: true,
      },
      X: {
        name: "X",
        url: "https://x.com/tupleType",
        icon: Icons.x,
        footer: true,
      },
    },
  },
  work: [
    {
      company: "Palo Alto Networks",
      href: "https://paloaltonetworks.com",
      title: "Sr. Staff Security Researcher",
      logoUrl: "/images/work/palo.svg",
      logoWidth: 91,
      logoHeight: 65,
      start: "January 2023",
      description:
        "Researched CI/CD pipeline security for the development of defensive security solutions. Analyzed real-world CI/CD attacks and explored the use of AI to enhance the security of software development processes.",
    },
    {
      company: "Cider Security",
      href: "",
      title: "Security Researcher",
      logoUrl: "/images/work/cider.png",
      logoWidth: 512,
      logoHeight: 512,
      start: "August 2021",
      end: "December 2022",
      description:
        "Researched CI/CD pipeline security as part of developing a defensive security product. Identified innovative attack vectors and designed detection and prevention mechanisms within the product. Developed processes to mitigate security vulnerabilities and established an industry-grade standard for securing CI/CD workflows.",
    },
    {
      company: "Bank Hapoalim",
      href: "https://www.bankhapoalim.com/en",
      title: "Application Security Architect",
      logoUrl: "/images/work/poalim.jpg",
      logoWidth: 225,
      logoHeight: 225,
      start: "July 2020",
      end: "July 2021",
      description:
        "As a Cybersecurity Architect, I was responsible for leading secure development processes within the bank’s modernization division, which focused on re-engineering legacy systems written in outdated programming languages. My work included implementing security standards using both commercial security products and in-house solutions, as well as driving practices such as threat modeling, secure coding implementations, code reviews and penetration testing across core banking systems, including loans, account management, and other critical services. I supported secure development throughout the entire lifecycle, from discovery and design through deployment to production.",
    },
    {
      company: "IDF",
      href: "https://splunk.com",
      title: "Security Architect, IR Team Lead, Cyber Course Instructor",
      logoUrl: "/images/work/idf.svg",
      logoWidth: 1664,
      logoHeight: 1539,
      start: "December 2015",
      end: "April 2020",
      description:
        "After completing the IDF Cyber Defense Course, I served as an instructor as part of the course command team, delivering professional training across a wide range of cybersecurity disciplines over three course cycles. I later served at Mamram as an Incident Response Team Lead, responsible for SOC and cyber incident response. Following the completion of the IDF Officers Training School, I served as  a Cybersecurity Architect, where I designed and implemented security standards and requirements for a variety of projects.",
    },
  ],
  projects: [
    {
      title: "CI/CD Goat",
      href: "https://github.com/cider-security-research/cicd-goat",
      description:
        "A deliberately vulnerable CI/CD environment. Learn CI/CD security through multiple challenges.",
      technologies: [
        "Python",
        "Gitea",
        "Jenkins",
        "LocalStack",
        "Lighttpd",
        "CTFd",
        "GitLab",
        "Docker",
      ],
      github: getGitHubStats(
        "https://github.com/cider-security-research/cicd-goat",
      ),
      image: "/images/projects/cicd-goat.jpeg",
      imageWidth: 2560,
      imageHeight: 1280,
      video: "",
    },
    {
      title: "Awesome CI/CD Attacks",
      href: "https://github.com/TupleType/awesome-cicd-attacks",
      description:
        "Practical resources for offensive CI/CD security research. Curated the best resources I've seen since 2021.",
      technologies: ["Markdown"],
      github: getGitHubStats(
        "https://github.com/TupleType/awesome-cicd-attacks",
      ),
      image: "/images/projects/awesome-cicd-attacks.jpg",
      imageWidth: 1024,
      imageHeight: 506,
      video: "",
    },
    {
      title: "Greenholts.com",
      href: "https://github.com/TupleType/greenholts.com",
      description:
        "My Portfolio website featuring a blog, built with Next.js and React.",
      technologies: ["Typescript", "Next.js", "React", "Cloudflare"],
      github: getGitHubStats("https://github.com/TupleType/greenholts.com"),
      image: "/images/projects/greenholts.png",
      imageWidth: 1280,
      imageHeight: 640,
      video: "",
    },
  ],
  talks: [
    {
      title:
        "The GitHub Actions Worm: Compromising GitHub repositories through the Actions dependency tree",
      href: "https://www.youtube.com/watch?v=j8ZiIOd53JU",
      youtubeId: "j8ZiIOd53JU",
      conference: {
        name: "DEFCON 31 (2023)",
        icon: "/images/talks/defcon.png",
      },
    },
    {
      title:
        "Abuse of Repository Webhooks to Access Hundreds of Internal CI Systems",
      href: "https://www.youtube.com/watch?v=ntFjdiYJ9K8",
      youtubeId: "ntFjdiYJ9K8",
      conference: {
        name: "RSA Conference 2023",
        icon: "/images/talks/rsac.jpg",
      },
    },
    {
      title:
        "Climbing the Production Mountain: Practical CI/CD Attacks Using CI/CD Goat",
      href: "https://www.youtube.com/watch?v=w-R2PT2jfdU",
      youtubeId: "w-R2PT2jfdU",
      conference: {
        name: "Bsides Vegas 2022",
        icon: "/images/talks/bsideslv.png",
      },
    },
    {
      title:
        "The GitHub Actions Worm: Compromising GitHub repositories through the Actions dependency tree",
      href: "https://www.youtube.com/watch?v=ktL6FZFJ_Z8",
      youtubeId: "ktL6FZFJ_Z8",
      conference: {
        name: "BsidesTLV 2024",
        icon: "/images/talks/bsidestlv.png",
      },
    },
    {
      title:
        "The GitHub Actions Worm: Compromising GitHub repositories through the Actions dependency tree",
      href: "https://archive.bsideslv.org/2023/talks#S9EJCP",
      image: "/images/talks/bsideslv.png",
      imageWidth: 381,
      imageHeight: 182,
      conference: {
        name: "Bsides Vegas 2023",
        icon: "/images/talks/bsideslv.png",
      },
    },
    {
      title:
        "How we abused repository webhooks to access hundreds of internal CI systems",
      href: "https://owaspappsecil2023.sched.com/event/1LqtW",
      image: "/images/talks/owaspil-2023.png",
      imageWidth: 2589,
      imageHeight: 828,
      conference: {
        name: "OWASP AppSec Israel 2023",
        icon: "/images/talks/owaspil.png",
      },
    },
  ],
} as const;
