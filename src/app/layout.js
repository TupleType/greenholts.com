import "./layout.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Plus_Jakarta_Sans, Source_Code_Pro } from "next/font/google";
import { seo } from "@/portfolio";
import PageIcons from "@/components/PageIcons";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const LogoFont = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-logo",
});

export const metadata = {
  metadataBase: new URL(seo.og.url),
  description: seo.description,
  canonical: "/",
  openGraph: {
    type: seo.og.type,
    url: seo.og.url,
    description: seo.description,
    locale: seo.og.locale,
    siteName: seo.og.title,
  },
  twitter: {
    card: seo.og.title,
    site: seo.xHandle,
    description: seo.description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${LogoFont.variable}`}
    >
      <head>
        <GoogleAnalytics gaId="G-B53DBKPZ3M" />
        <PageIcons />
      </head>
      <body>{children}</body>
    </html>
  );
}
