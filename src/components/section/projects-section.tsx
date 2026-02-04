import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="flex w-full items-center">
            <div className="via-border h-px flex-1 bg-linear-to-r from-transparent from-5% via-95% to-transparent" />
            <div className="bg-blue-accent z-10 rounded-xl border px-4 py-1">
              <h2>
                <span className="text-blue-accent-foreground text-sm font-medium">
                  Projects
                </span>
              </h2>
            </div>
            <div className="via-border h-px flex-1 bg-linear-to-l from-transparent from-5% via-95% to-transparent" />
          </div>
        </div>
        <div className="mx-auto grid max-w-200 auto-rows-max grid-cols-1 gap-3 sm:grid-cols-2 md:auto-rows-fr lg:max-w-4xl lg:gap-4">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              className="h-full"
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                imageWidth={project?.imageWidth}
                imageHeight={project?.imageHeight}
                github={project.github}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
