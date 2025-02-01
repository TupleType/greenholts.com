// Settings
const settings = {
  url: "https://greenholts.com/",
};

//Home Page
const greeting = {
  title: "Who Am I?",
  name: "Asi Greenholts",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  linkedin_link: "https://www.linkedin.com/in/asi-greenholts",
};

//SEO Related settings
const seo = {
  title: "Asi Greenholts",
  description: greeting.subTitle,
  charset: "utf-8",
  contentType: "text/html; charset=utf-8",
  viewport: "width=device-width, initial-scale=1",
  xHandle: "@TupleType",
  og: {
    title: "Asi Greenholts",
    type: "website",
    url: settings.url,
    image: `${settings.url}icons/preview.png`,
    imageWidth: "1200",
    imageHeight: "640",
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

export { settings, seo, greeting, socialMediaLinks };
