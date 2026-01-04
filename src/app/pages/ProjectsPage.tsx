import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  SiAmazonwebservices,
  SiFigma,
  SiFramer,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiReact,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import ContentContainer from "@/app/components/ContentContainer";
import SideBar from "@/app/components/SideBar";
import RevealContent from "@/app/components/RevealContent";

type Skill = {
  label: string;
  icon: IconType;
};

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  skills: Skill[];
  href?: string;
  badge?: string;
  tone: string;
};

const projects: Project[] = [
  {
    id: "studio",
    title: "Studio OS",
    description:
      "A workspace for roadmaps, approvals, and stakeholder updates. Automated intake, SLA tracking, and dashboards keep leadership in-sync without extra meetings.",
    image: "/images/image1.jpg",
    skills: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind", icon: SiTailwindcss },
      { label: "Supabase", icon: SiSupabase },
      { label: "Framer Motion", icon: SiFramer },
    ],
    href: "https://gsha22.github.io/projects/studio",
    badge: "live",
    tone: "from-accent-200/70 via-white/60 to-transparent",
  },
  {
    id: "ai-coach",
    title: "AI Study Coach",
    description:
      "Conversational tutor that breaks topics into micro-lessons, practice quizzes, and spaced repetition cards. Users see mastery trends and can export weekly recaps.",
    image: "/images/giphy.gif",
    skills: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "OpenAI", icon: SiOpenai },
      { label: "Postgres", icon: SiPostgresql },
      { label: "Prisma", icon: SiPrisma },
      { label: "Vercel", icon: SiVercel },
    ],
    href: "https://gsha22.github.io/projects/ai-coach",
    tone: "from-accent-100/60 via-white/30 to-transparent",
  },
  {
    id: "portfolio",
    title: "This Portfolio",
    description:
      "A living resume with bento navigation, responsive layout, and fast Lighthouse scores. Dark-mode aware with lightweight motion and accessible focus states.",
    image: "/images/gsha.JPG",
    skills: [
      { label: "TypeScript", icon: SiTypescript },
      { label: "Next.js", icon: SiNextdotjs },
      { label: "Tailwind", icon: SiTailwindcss },
      { label: "Framer Motion", icon: SiFramer },
      { label: "Vercel", icon: SiVercel },
    ],
    tone: "from-accent-200/60 via-white/40 to-transparent",
  },
  {
    id: "ops",
    title: "Ops Dashboard",
    description:
      "Single-pane dashboard that surfaces incidents, SLAs, and on-call handoffs. Includes streaming charts, drilldowns, and a lightweight runbook drawer.",
    image: "/images/workin.jpg",
    skills: [
      { label: "Node.js", icon: SiNodedotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Postgres", icon: SiPostgresql },
      { label: "AWS", icon: SiAmazonwebservices },
      { label: "Figma", icon: SiFigma },
    ],
    href: "https://gsha22.github.io/projects/ops",
    badge: "case study",
    tone: "from-accent-100/70 via-white/50 to-transparent",
  },
  {
    id: "climb",
    title: "Climb Tracker",
    description:
      "Tracks sessions, grades, and hangboard progress. Includes weekly micro-goals, streaks, and a feed for beta notes with gym-specific tagging.",
    image: "/images/climb.jpg",
    skills: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Supabase", icon: SiSupabase },
      { label: "Tailwind", icon: SiTailwindcss },
    ],
    tone: "from-accent-200/50 via-white/30 to-transparent",
  },
  {
    id: "student-life",
    title: "Student Life",
    description:
      "Aggregates events, RSVPs, and peer groups into one feed. Pushes reminders, showcases photos, and gives organizers quick analytics on turnout.",
    image: "/images/student1.jpg",
    skills: [
      { label: "React", icon: SiReact },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind", icon: SiTailwindcss },
      { label: "Framer Motion", icon: SiFramer },
    ],
    href: "https://gsha22.github.io/projects/student-life",
    tone: "from-accent-100/60 via-white/30 to-transparent",
  },
];

type SkillBadgeProps = {
  icon: IconType;
  label: string;
};

function SkillBadge({ icon: Icon, label }: SkillBadgeProps) {
  return (
    <div className="group/icon relative font-sans">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-100/70 dark:bg-charcoal-700/70 ring-1 ring-charcoal-100/70 dark:ring-charcoal-700/70 transition-transform duration-200 group-hover/icon:-translate-y-0.5">
        <Icon size={16} className="text-charcoal-700 dark:text-offwhite" aria-hidden />
      </div>
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-charcoal text-offwhite px-2 py-1 text-[11px] opacity-0 shadow-lg transition-all duration-150 group-hover/icon:opacity-100 group-hover/icon:translate-y-0 group-hover/icon:scale-100 translate-y-1 scale-95 font-sans">
        {label}
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group relative flex h-full w-full max-w-xl flex-col overflow-hidden rounded-xl border border-charcoal-100/80 bg-white/30 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.35)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:border-charcoal-600/60 dark:bg-charcoal-600/70"
    >
      <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-200 group-hover:opacity-80 dark:bg-charcoal-50/10" />
      {project.badge && (
        <span className="absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-charcoal shadow-sm dark:bg-charcoal-700/90 dark:text-offwhite">
          {project.badge}
        </span>
      )}

      <div className="relative aspect-[16/9] w-full overflow-hidden bg-charcoal-100/50 shadow-inner dark:bg-charcoal-700/50">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 1200px) 440px, (min-width: 768px) 50vw, 100vw"
          priority={project.id === "studio"}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-900/35 via-transparent to-transparent" />
      </div>

      <div className="relative flex flex-1 flex-col gap-4 p-6 font-sans">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-black font-sans dark:text-offwhite">{project.title}</h3>
          </div>
          {project.href && (
            <Link
              href={project.href}
              className="group/link inline-flex items-center gap-2 rounded-full bg-charcoal-900/5 px-3 py-1.5 text-xs font-medium text-charcoal-800 opacity-0 shadow-sm transition-all duration-200 hover:bg-charcoal-900/10 hover:shadow group-hover:opacity-100 dark:bg-offwhite/10 dark:text-offwhite dark:hover:bg-offwhite/20"
            >
              details
              <ArrowUpRight size={16} className="transition-transform duration-200 group-hover/link:-translate-y-[2px]" />
            </Link>
          )}
        </div>

        <p className="text-sm leading-relaxed text-charcoal-700 font-sans dark:text-offwhite/75">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-3">
          {project.skills.map((skill) => (
            <SkillBadge key={`${project.id}-${skill.label}`} icon={skill.icon} label={skill.label} />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-0 ring-accent-400/0" />
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen bg-warm dark:bg-charcoal-900 font-[var(--font-inter)] font-sans">
      <SideBar />
      <main className="flex-1 md:ml-60 pt-28 md:pt-16 pb-16 font-sans">
        <RevealContent>
        <ContentContainer>
          <header className="max-w-xl pt-8 pb-10">
            <h1 className="mt-2 text-4xl font-semi text-black dark:text-offwhite font-sans">projects</h1>
            {/* <p className="mt-3 text-base text-charcoal-700 dark:text-offwhite/75 font-sans">
              Some things I did for fun. 
            </p> */}
          </header>

          <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 auto-rows-[minmax(340px,1fr)] gap-6 justify-items-center">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </section>
        </ContentContainer>
        </RevealContent>
      </main>
    </div>
  );
}
