import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  SiFramer,
  SiNextdotjs,
  SiGithub,
  SiFigma,
  SiJavascript,
  SiVercel,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiNumpy,
  SiGo,
  SiEslint,
  SiGooglesheets,
  SiGoogleappsscript,
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
  hrefdesc?: string,
  badge?: string;
  tone: string;
};

const OrcaScanIcon: IconType = ({ size = 16, className }) => {
  const pixelSize = typeof size === "string" ? parseInt(size, 10) || 16 : size;

  return (
    <Image
      src="/images/icons/orca-scan.png"
      alt="Orca Scan"
      width={pixelSize}
      height={pixelSize}
      className={className ?? ""}
    />
  );
};

const UpcitemdbIcon: IconType = ({ size = 16, className }) => {
  const pixelSize = typeof size === "string" ? parseInt(size, 10) || 16 : size;

  return (
    <Image
      src="/images/icons/upcitemdb.png"
      alt="Orca Scan"
      width={pixelSize}
      height={pixelSize}
      className={className ?? ""}
    />
  );
};

const NodejsIcon: IconType = ({ size = 16, className }) => {
  const pixelSize = typeof size === "string" ? parseInt(size, 10) || 16 : size;

  return (
    <span className="relative inline-flex">
      <Image
        src="/svgs/node.js.svg"
        alt="Node.js"
        width={pixelSize}
        height={pixelSize}
        className={`${className ?? ""} block dark:hidden`}
      />
      <Image
        src="/svgs/node.js-dark.svg"
        alt="Node.js"
        width={pixelSize}
        height={pixelSize}
        className={`${className ?? ""} hidden dark:block`}
      />
    </span>
  );
};

const projects: Project[] = [
  {
    id: "proj_1",
    title: "Donation Tracker",
    description:
      "Worked with Christopher's Kitchen, a 501c3 non-profit, to automate their donation value tracking process. Built the process through a phone barcode scanner, a UPC database, Google Sheets, and Google Apps Scripts. Definitely my most visibly impactful project to date, we were able to free volunteer hours by reducing the time spent tallying donations by over 75%.",
    image: "/images/projects/ck_logo.png",
    skills: [
      { label: "Javascript", icon: SiJavascript },
      { label: "Orca Scan", icon: OrcaScanIcon },
      { label: "Google Sheets", icon: SiGooglesheets },
      { label: "Google Apps Script", icon: SiGoogleappsscript },
      { label: "Upcitemdb", icon: UpcitemdbIcon },
    ],
    href: "/blog/ck-post",
    hrefdesc: "more!",
    badge: "featured",
    tone: "from-accent-200/70 via-white/60 to-transparent",
  },
  {
    id: "proj_2",
    title: "Distributed Bitcoin Miner",
    description:
      "Developed the Live Sequence Protocol (LSP), a network protocol combining ideas from TCP and UDP to support a client-server communication model. The network protocol included techniques like the sliding window algorithm, acknowledgements, heartbeats, and checksums. Using this, I then built a load-balancer to distribute 'bitcoin mining' load across multiple of these custom servers.",
    image: "/images/projects/bitcoinminer.png",
    skills: [
      { label: "Go", icon: SiGo },
      { label: "Github", icon: SiGithub }
    ],
    tone: "from-accent-100/70 via-white/50 to-transparent",
  },
  {
    id: "proj_3",
    title: "Mermaid Open Source",
    description:
      "Contributed to Mermaid.js, an open-source text-based diagramming library used for technical documentation. Made PR's for: fixes to Gantt diagram duration parsing, support for accented characters in chart labels, and configuration bugs in gitGraph that prevented dynamic updates.",
    image: "/images/projects/Mermaid_Logo.png",
    skills: [
      { label: "TypeScript", icon: SiTypescript },
      { label: "Node.js", icon: NodejsIcon },
      { label: "Eslint", icon: SiEslint },
    ],
    tone: "from-accent-200/60 via-white/40 to-transparent",
  },
  {
    id: "proj_4",
    title: "Personal Portfolio",
    description:
      "My own little nook of the internet. This was a super fun way to get more versed in web dev and exercise my creative muscles. I developed it using Next.js and a lot of inspiration from many other beautiful websites. After spending many hours staring at pixels until my eyes were bleeding, I have a newfound respect for designers.",
    image: "/images/projects/websitedesign.png",
    skills: [
      { label: "Next.js", icon: SiNextdotjs },
      { label: "TypeScript", icon: SiTypescript },
      { label: "Tailwind", icon: SiTailwindcss },
      { label: "Vercel", icon: SiVercel },
      { label: "Framer Motion", icon: SiFramer },
      { label: "Figma", icon: SiFigma}
    ],
    tone: "from-accent-200/50 via-white/30 to-transparent",
  },
  {
    id: "proj_5",
    title: "Character Reconition NN",
    description:
      "Implemented a neural network in Python to perform handwritten character recognition on an OCR dataset. The project involved deriving and coding forward propagation and backpropagation by hand, implementing sigmoid and softmax layers, and training the model using stochastic gradient descent.",
    image: "/images/projects/nn.png",
    skills: [
      { label: "Python", icon: SiPython },
      { label: "Numpy", icon: SiNumpy },
    ],
    tone: "from-accent-100/60 via-white/30 to-transparent",
  },
  {
    id: "proj_6",
    title: "Raft Consensus",
    description:
      "Super interesting project taking a deep dive on the Raft distributed consensus algorithms. Using the paper by Diego Ongaro and John Ousterhout as a guide, I built a version from scratch in Go supporting leader elections, log replication, and the long list of edge cases associated with maintainence across network partitions and node failures.",
    image: "/images/projects/raft.png",
    skills: [
      { label: "Go", icon: SiGo },
      { label: "Github", icon: SiGithub },
    ],
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
              {project.hrefdesc}
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
