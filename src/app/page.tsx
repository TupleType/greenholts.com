import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Image from "next/image";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import WorkSection from "@/components/section/work-section";
import ProjectsSection from "@/components/section/projects-section";
import TalksSectionDynamic from "@/components/section/talks-section-dynamic";

const BLUR_FADE_DELAY = 0.04;

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": DATA.name,
      "alternateName": DATA.alternateName,
      "description": DATA.description,
      "image": `${DATA.url}${DATA.avatarUrl}`,
      "sameAs": [
        DATA.contact.social.GitHub.url,
        DATA.contact.social.LinkedIn.url,
        DATA.contact.social.X.url,
      ],
      "jobTitle": DATA.work[0].title,
      "worksFor": {
        "@type": "Organization",
        "name": DATA.work[0].company,
        "url": DATA.work[0].href,
      },
      "url": DATA.url,
    },
  };

  return (
    <main className="relative flex min-h-dvh flex-col gap-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8 lg:max-w-4xl">
          <div className="flex flex-col justify-between gap-2 gap-y-6 md:flex-row md:items-center">
            <div className="order-2 flex flex-col gap-2 md:order-1">
              <h1>
                <div className="flex flex-col flex-nowrap text-4xl font-semibold tracking-tighter md:flex-row md:text-5xl">
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="inline-block"
                    yOffset={8}
                    text="Hi, I'm&nbsp;"
                  />
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-blue-accent inline-block"
                    yOffset={8}
                    text={DATA.name}
                  />
                </div>
              </h1>
              <BlurFadeText
                className="text-muted-foreground max-w-150 md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Image
                alt={DATA.name}
                src={DATA.avatarUrl}
                width={126}
                height={126}
                className="ring-muted size-24 rounded-full border shadow-lg ring-4 md:size-32"
                priority
              />
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <h2 className="text-xl font-bold">About</h2>
          <div className="prose text-muted-foreground dark:prose-invert max-w-full font-sans leading-relaxed text-pretty">
            {DATA.summary}
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
            <div className="mt-2 flex items-center gap-4">
              {Object.entries(DATA.contact.social).map(([name, social]) => {
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
                    <IconComponent className="size-6" />
                  </Link>
                );
              })}
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <Link
              href={DATA.contact.social.LinkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-blue-accent text-blue-accent-foreground hover:bg-blue-accent/90 mt-2 gap-2"
                size="lg"
              >
                <Icons.linkedin className="size-4" />
                Connect with me
              </Button>
            </Link>
          </BlurFade>
        </div>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <BlurFade
            delay={BLUR_FADE_DELAY * 10 + DATA.skills.length * 0.05 + 0.2}
          >
            <div className="mt-2 space-y-2">
              {DATA.skillHighlights.map((highlight, index) => (
                <div key={index} className="group flex items-start gap-3">
                  <div className="bg-primary mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
            {DATA.cves.map((cve, id) => (
              <BlurFade key={cve.id} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Link
                  href={cve.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-200 hover:scale-105"
                >
                  <div className="bg-background border-border ring-border/20 hover:bg-primary/10 hover:border-primary hover:ring-primary/30 flex h-8 w-fit cursor-pointer items-center gap-2 rounded-xl border px-4 ring-2">
                    <span className="text-foreground hover:text-primary text-sm font-medium underline underline-offset-2">
                      {cve.id}
                    </span>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <div className="bg-background border-border ring-border/20 flex h-8 w-fit items-center gap-2 rounded-xl border px-4 ring-2">
                  {skill.icon && (
                    <skill.icon className="size-4 overflow-hidden rounded object-contain" />
                  )}
                  <span className="text-foreground text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <ProjectsSection />
        </BlurFade>
      </section>
      <section id="talks">
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <TalksSectionDynamic />
        </BlurFade>
      </section>
    </main>
  );
}
