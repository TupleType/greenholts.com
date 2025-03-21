import { whoami } from "@/portfolio.js";
import { getJsonld } from "@/utils/jsonLdGenerator";
import HomeContainer from "@/containers/home/HomeContainer";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeContainer />
    </>
  );
}
