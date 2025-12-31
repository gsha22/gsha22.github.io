import SideBar from "@/app/components/SideBar";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const socials = [
	{ name: "Email", href: "mailto:gsha@andrew.cmu.edu", icon: Mail },
	{ name: "LinkedIn", href: "https://www.linkedin.com/in/gabriel-sha-64b581251/", icon: Linkedin },
	{ name: "Instagram", href: "https://www.instagram.com/gsha_22/", icon: Instagram },
	{ name: "GitHub", href: "https://github.com/gsha22", icon: Github },
];

export default function ContactPage() {
	return (
		<div className="flex min-h-screen bg-warm dark:bg-charcoal-900">
			<SideBar />
			<main className="flex-1 md:ml-80 px-6 md:px-12 pt-28 md:pt-16 pb-16">
				<h1 className="text-4xl font-bold text-charcoal dark:text-offwhite font-sans">contact</h1>
				<p className="mt-4 text-charcoal-700 dark:text-offwhite/80 font-sans">
					Feel free to reach out! I am happy to talk about working together, common interests, or to answer questions you may have. 
				</p>
				<section className="mt-10">
					<h2 className="text-2xl font-semibold text-charcoal dark:text-offwhite font-sans">my social media</h2>
					<div className="mt-4 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:[grid-template-columns:repeat(auto-fit,minmax(170px,1fr))]">
						{socials.map(({ name, href, icon: Icon }) => (
							<a
								key={name}
								href={href}
								target="_blank"
								rel="noreferrer noopener"
								className="group flex items-center rounded-lg border border-charcoal-100 bg-offwhite px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-200 hover:shadow-sm dark:border-charcoal-700 dark:bg-charcoal-800"
							>
								<span className="flex h-9 w-9 items-center justify-center rounded-md bg-warm-200 text-charcoal transition-colors group-hover:bg-accent-50 group-hover:text-accent-700 dark:bg-charcoal-700 dark:text-offwhite dark:group-hover:bg-charcoal-600">
									<Icon className="h-4 w-4" aria-hidden />
								</span>
								<div className="ml-3 flex flex-col">
									<span className="text-sm font-medium text-charcoal dark:text-offwhite font-sans">{name}</span>
								</div>
							</a>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}
