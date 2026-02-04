import BlurFade from "@/components/magicui/blur-fade";
import { TalkCard } from "@/components/talk-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function TalksSection() {
  return (
    <section id="talks">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="flex w-full items-center">
            <div className="via-border h-px flex-1 bg-linear-to-r from-transparent from-5% via-95% to-transparent" />
            <div className="bg-blue-accent z-10 rounded-xl border px-4 py-1">
              <h2>
                <span className="text-blue-accent-foreground text-sm font-medium">
                  Talks
                </span>
              </h2>
            </div>
            <div className="via-border h-px flex-1 bg-linear-to-l from-transparent from-5% via-95% to-transparent" />
          </div>
        </div>
        <div className="mx-auto grid max-w-200 grid-cols-1 gap-3 sm:grid-cols-2 lg:max-w-4xl lg:gap-4">
          {DATA.talks.map((talk, id) => (
            <BlurFade
              key={talk.href + talk.conference.name}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              className="h-full"
            >
              <TalkCard
                href={talk.href}
                key={talk.href + talk.conference.name}
                title={talk.title}
                youtubeId={"youtubeId" in talk ? talk.youtubeId : undefined}
                image={"image" in talk ? talk.image : undefined}
                imageWidth={"imageWidth" in talk ? talk.imageWidth : undefined}
                imageHeight={
                  "imageHeight" in talk ? talk.imageHeight : undefined
                }
                conference={talk.conference}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
