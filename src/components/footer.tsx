import Link from "next/link";
import { DATA } from "@/data/resume";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-background/50 mt-auto border-t backdrop-blur-sm">
      <div className="mx-auto max-w-2xl px-6 py-8 lg:max-w-4xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo/Brand */}
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {Object.entries(DATA.contact.social)
              .filter(([_, social]) => social.footer)
              .map(([name, social]) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={name}
                  >
                    <IconComponent className="size-5" />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </footer>
  );
}
