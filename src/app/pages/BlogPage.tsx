import ContentContainer from "@/app/components/ContentContainer";
// import SideBar from "@/app/components/SideBar";
import RevealContent from "@/app/components/RevealContent";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";


export default function BlogPage() {
	return (
		<div className="flex min-h-screen bg-warm dark:bg-charcoal-900">
			<main className="flex-1 pt-20">
				<RevealContent>
				<ContentContainer>
					<div className="">
						<h1 className="pt-8 text-4xl font-semi text-charcoal dark:text-offwhite font-sans">gabriel sha&apos;s blog</h1>
						<p className="mt-4 text-charcoal-700 dark:text-offwhite/80 font-sans">
							Random thoughts about anything. Posts will be about anything I might find interesting or want to write about, and they may be serious or unserious.
						</p>
						<Link
							href="/"
							rel="noreferrer"
							className="pt-4 group inline-flex items-center gap-1 font-medium text-charcoal-800 border-b border-charcoal-300 transition-colors duration-150 hover:border-charcoal-700 dark:text-offwhite dark:border-offwhite/50 dark:hover:border-offwhite"
						>
							back to home
							<ArrowUpRight size={14} className="translate-y-[1px] transition-transform duration-150 group-hover:-translate-y-[2px]" />
						</Link>
						<h2 className="pt-16 text-2xl font-semi text-black dark:text-offwhite font-sans mb-5">posts</h2>
						<ul className="space-y-3 text-charcoal-800 dark:text-offwhite">
							<li className="flex items-baseline gap-3">
								<Link
									href="/blog/hello-world"
									className="font-medium border-b border-transparent transition-colors duration-150 hover:border-charcoal-700 dark:hover:border-offwhite"
								>
									hello world!
								</Link>
								<span className="text-sm text-charcoal-600 dark:text-offwhite/60">Jan 5, 2026</span>
							</li>
							<li className="flex items-baseline gap-3">
								<Link
									href="/blog/ck-post"
									className="font-medium border-b border-transparent transition-colors duration-150 hover:border-charcoal-700 dark:hover:border-offwhite"
								>
									meaningful impact with tech
								</Link>
								<span className="text-sm text-charcoal-600 dark:text-offwhite/60">Jan 9, 2026</span>
							</li>
						</ul>
					</div>
				</ContentContainer>
				</RevealContent>
			</main>
		</div>
	);
}
