import ContentContainer from "@/app/components/ContentContainer";
import SideBar from "@/app/components/SideBar";
import RevealContent from "@/app/components/RevealContent";
import { LinkedinIcon, Github, Instagram, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const quickLinks = [
    {
      name: "LinkedIn",
      icon: LinkedinIcon,
      url: "https://www.linkedin.com/in/gabriel-sha-64b581251/",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/gsha22",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/gsha_22/",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:gsha@andrew.cmu.edu",
    },
  ];

  return (
    <div className="flex min-h-screen bg-warm dark:bg-charcoal-900">
      <SideBar />
      <main className="flex-1 md:ml-60 pt-28 md:pt-16 ">
        <RevealContent>
        <ContentContainer>
          <h1 className="pt-10 text-4xl font-semi text-black dark:text-offwhite font-sans">gabriel sha</h1>
          <p className="mt-4 text-charcoal-700 dark:text-offwhite/80 font-sans pt-8">
            Hello! My name is Gabriel, and I&apos;m a <b>software engineer</b> and a <b>student at Carnegie Mellon University</b> studying Information Systems and Computer Science. 
            <br/><br/>
            Studying IS and CS at Carnegie Mellon has taught me more than just how to code or do math, it&apos;s taught me how to think through complex problems. Because of this, I&apos;m confident in my ability to adapt, learn quickly, and tackle unfamiliar challenges. 
            <br/><br/>
            I love software engineering because it lets me do exactly that while creating meaningful, real-world products. There is no end to the amazing things to work on, and I look forward to using my background to tackle new and exciting problems everyday. 
            <br/><br/>
            Outside of tech, some of the things I love are climbing, the outdoors, and piano. If interested, you can get a little glimpse of my life <Link
									href="/gallery"
									className="underline decoration-charcoal-500 dark:decoration-offwhite/70 underline-offset-4 transition-[text-decoration-thickness] hover:decoration-2"
								>
									here.
								</Link>{" "}
          </p>

          <p className="pt-8 font-medium">find me on</p>
          <div className="flex flex-wrap gap-6 pt-4">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-2 text-charcoal-700 dark:text-offwhite/80 border-b-2 border-charcoal-300 dark:border-offwhite/30 pb-1 hover:text-charcoal-900 dark:hover:text-offwhite hover:border-charcoal-500 dark:hover:border-offwhite/60 transition-colors duration-200"
                >
                  <Icon size={20} strokeWidth={1.5} />
                  <span>{link.name}</span>
                  <ArrowUpRight size={16} className="transition-transform duration-200 group-hover/link:-translate-y-[2px]" />
                </a>
              );
            })}
          </div>
        </ContentContainer>
        </RevealContent>
      </main>
    </div>
  );
}
