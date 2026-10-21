import ContentContainer from "@/app/components/ContentContainer";
import SideBar from "@/app/components/SideBar";
import RevealContent from "@/app/components/RevealContent";
import { LinkedinIcon, Github, Instagram, Mail, ArrowUpRight } from "lucide-react";

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
      url: "mailto:gabrielhjsha22@gmail.com",
    },
  ];

  return (
    <div className="flex min-h-screen bg-warm dark:bg-charcoal-900">
      <SideBar />
      <main className="flex-1 md:ml-60 pt-28 md:pt-16 ">
        <RevealContent>
        <ContentContainer>
          <h1 className="pt-10 text-4xl font-semi text-black dark:text-offwhite font-sans pb-8">gabriel sha</h1>
          <div className="text-base text-charcoal-700 dark:text-offwhite/80 font-sans leading-relaxed space-y-4">
            <p>
              Hello! I&apos;m a software engineer at Bloomberg and recent Carnegie Mellon graduate. I enjoy building large-scale distributed systems and figuring out how to put the many moving pieces together. 
            </p>
            <p>I try to fill my free time with climbing, playing volleyball, spending time with friends and family, and playing the piano. </p>
            <p>
              If there is anything at all that we have in common, feel free to reach out! I&apos;m always down to chat!
            </p>
          </div>
          

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
