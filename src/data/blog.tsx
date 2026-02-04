export interface BlogData {
  title: string;
  summary: string;
  publishedAt: string;
  tags?: string[];
  readTime: string;
  thumbnail: string;
  thumbnailWidth: number;
  thumbnailHeight: number;
  link: string;
}

export const BLOG_CONFIG = {
  pageTitle: "Security Research Blog",
  pageDescription: "Sharing knowledge because cyber security is a team sport.",
} as const;

export const BLOG_POSTS: BlogData[] = [
  {
    title:
      "A Targeted Attack on Coinbase Expanded to the Widespread tj-actions/changed-files Incident",
    publishedAt: "2025-03-20",
    summary:
      "The recent compromise of the GitHub action tj-actions/changed-files and additional actions within the reviewdog organization has captured the attention of the GitHub community, marking another major software supply chain attack. Our team conducted an in-depth investigation into this incident and uncovered many more details about how the attack occurred and its timeline.",
    readTime: "26 min read",
    thumbnail: "/images/blogs/tj-actions-thumbnail.jpg",
    thumbnailWidth: 1920,
    thumbnailHeight: 900,
    link: "https://unit42.paloaltonetworks.com/github-actions-supply-chain-attack/",
    tags: ["GitHub Actions", "Malware", "Incident Response"],
  },
  {
    title:
      "The GitHub Actions Worm: Compromising GitHub Repositories Through the Actions Dependency Tree",
    publishedAt: "2023-09-14",
    summary:
      "Learn how a novel attack vector in GitHub Actions allows attackers to distribute malware across repositories using a technique that exploits the actions dependency tree and puts countless open-source projects and internal repositories at risk. Get an in-depth look at the attack vectors, technical details and a real-world demo in this blog post highlighting our latest research.",
    readTime: "16 min read",
    thumbnail: "/images/blogs/worm-thumbnail.png",
    thumbnailWidth: 1600,
    thumbnailHeight: 838,
    link: "https://www.paloaltonetworks.com/blog/prisma-cloud/github-actions-worm-dependencies/",
    tags: ["GitHub Actions", "Malware", "Research"],
  },
  {
    title:
      "Abusing Repository Webhooks to Access Internal CI/CD Systems at Scale",
    publishedAt: "2023-07-13",
    summary:
      "On the surface, repository webhooks seem secure. But we recently tested these webhooks to identify security issues and discovered that anyone on the internet can overcome the IP restriction, access data and execute code on internal CI/CD pipelines at scale.",
    readTime: "15 min read",
    thumbnail: "/images/blogs/webhook-thumbnail.png",
    thumbnailWidth: 1062,
    thumbnailHeight: 461,
    link: "https://www.paloaltonetworks.com/blog/prisma-cloud/repository-webhook-abuse-access-ci-cd-systems-at-scale/",
    tags: ["Research"],
  },
  {
    title:
      "How to Secure Your Open Source Project - A Quick Guide for Developers",
    publishedAt: "2022-12-08",
    summary:
      "This blog is designed to provide developers with a practical, straightforward guide to secure their open source (OS) projects. We'll cover the most important aspects of securing OS projects, and provide practical guidelines using GitHub as the source control management system (SCM), and GitHub Actions as the CI/CD solution.",
    readTime: "9 min read",
    thumbnail: "/images/blogs/secure-os-thumbnail.png",
    thumbnailWidth: 1024,
    thumbnailHeight: 307,
    link: "https://web.archive.org/web/20230601060727/https://www.cidersecurity.io/blog/research/how-to-secure-your-open-source-project-a-quick-guide-for-developers/",
    tags: ["Open Source", "Best Practices"],
  },
  {
    title:
      "Optimizing CI/CD Credential Hygiene - A Comparison of CI/CD Solutions",
    publishedAt: "2022-07-06",
    summary:
      "Attackers are always on the lookout to gain access to credentials, which are a critical asset to protect and are widespread throughout the organization. This is highly relevant in CI/CD systems, which are a vital part of the engineering ecosystem.",
    readTime: "7 min read",
    thumbnail: "/images/blogs/credentials-thumbnail.png",
    thumbnailWidth: 1024,
    thumbnailHeight: 307,
    link: "https://web.archive.org/web/20230928082723/https://www.cidersecurity.io/blog/research/optimizing-ci-cd-credential-hygiene-a-comparison-of-ci-cd-solutions/",
    tags: ["Best Practices"],
  },
  {
    title: "CI/CD Goat - A Deliberately Vulnerable CI/CD Environment",
    publishedAt: "2022-04-07",
    summary:
      'Today we are excited to announce the launch of "CI/CD Goat" - a deliberately vulnerable CI/CD environment which allows engineers, security practitioners, and curious hackers to learn and experience the major CI/CD security risks out there.',
    readTime: "3 min read",
    thumbnail: "/images/blogs/cicd-goat-thumbnail.png",
    thumbnailWidth: 765,
    thumbnailHeight: 493,
    link: "https://web.archive.org/web/20230601062424/https://www.cidersecurity.io/blog/research/ci-cd-goat/",
    tags: ["Open Source", "CTF"],
  },
  {
    title: "How to Secure Jenkins' Default Build Authorization Configuration",
    publishedAt: "2022-02-17",
    summary:
      'The default build authorization configuration in Jenkins — controlling the permissions allocated to pipelines — is insecure and is often left unmodified in production environments. To address this issue, you should use the "Authorize Project" and the "Role-Based Authorization Strategy" plugins to define secure build authorization configurations.',
    readTime: "11 min read",
    thumbnail: "/images/blogs/jenkins-thumbnail.jpg",
    thumbnailWidth: 1024,
    thumbnailHeight: 659,
    link: "https://www.paloaltonetworks.com/blog/prisma-cloud/secure-jenkins-default-build-authorization-configuration/",
    tags: ["Jenkins", "Best Practices"],
  },
];
