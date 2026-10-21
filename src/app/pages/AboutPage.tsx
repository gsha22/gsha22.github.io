"use client";

import { useState } from "react";
import ContentContainer from "@/app/components/ContentContainer";
import SideBar from "@/app/components/SideBar";
import RevealContent from "@/app/components/RevealContent";
import Image from "next/image";
import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineSeparator,
} from "@mui/lab";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

type BioKind = "professional" | "personal";

const bioOptions: { id: BioKind; label: string }[] = [
	{ id: "professional", label: "professional" },
	{ id: "personal", label: "personal" },
];

export default function AboutPage() {
	const [bioKind, setBioKind] = useState<BioKind>("professional");

	const educationItems = [
		{
			school: "Carnegie Mellon University",
			college: "Dietrich College of Humanities and Social Sciences",
			dates: "Aug '22 - May '26",
			program: "B.S. Information Systems, Additional Major in Computer Science",
			gpa: "",
		},
		{
			school: "Gateway High School",
			college: "",
			dates: "Aug '18 - May '22",
			program: "",
			gpa: "4.00 / 4.00 | 4/254",
		},
	];

	return (
		<div className="flex min-h-screen bg-warm dark:bg-charcoal-900">
			<SideBar />
			<main className="flex-1 md:ml-60 pt-28 md:pt-16">
				<RevealContent>
				<ContentContainer>
					<h1 className="text-4xl pt-10 pb-8 font-semi text-black dark:text-offwhite font-sans">about</h1>

					<section className="flex flex-col md:flex-row md:items-start gap-8 md:gap-10">
						<div className="flex-1 min-w-0">
							<h2 className="text-2xl font-semi text-black dark:text-offwhite font-sans mb-5">education</h2>
							<Box
								sx={{
									"& .MuiTimeline-root": { padding: 0 },
									"& .MuiTimelineItem-root:before": { flex: 0, padding: 0 },
								}}
							>
								<Timeline position="right" className="[&_div]:text-charcoal dark:[&_div]:text-offwhite">
									{educationItems.map((item) => (
										<TimelineItem key={item.school}>
											<TimelineSeparator>
												<TimelineDot
													sx={{
														bgcolor: "#9CA3AF",
														border: 0,
														height: 12,
														width: 12,
													}}
												/>
												<TimelineConnector sx={{ bgcolor: "#D1D5DB", width: 2 }} />
											</TimelineSeparator>
											<TimelineContent className="pb-4">
												<Typography component="h3" className="text-md text-black dark:text-offwhite md:text-md font-bold leading-tight">
													{item.school}
												</Typography>
												<Typography className="text-md md:text-base text-charcoal-700 dark:text-offwhite/80" sx={{ marginBottom: 1 }}>
													{item.college}
												</Typography>
												<Typography className="text-xs md:text-sm text-charcoal-600 dark:text-offwhite/70" sx={{ marginY: 1 }}>
													{item.dates}
												</Typography>
												{item.program && (
													<Typography className="italic text-sm md:text-md text-charcoal dark:text-offwhite" sx={{ marginBottom: 0.5 }}>
														{item.program}
													</Typography>
												)}
												{item.gpa && (
													<Typography className="text-sm md:text-sm text-charcoal dark:text-offwhite">
														GPA: {item.gpa}
													</Typography>
												)}
											</TimelineContent>
										</TimelineItem>
									))}
								</Timeline>
							</Box>
						</div>
						<div className="w-56 sm:w-64 shrink-0 mx-auto md:mx-0 md:mt-2">
							<Image
								src="/images/me.JPG"
								width={300}
								height={400}
								alt="Gabriel"
								className="w-full h-auto rounded-3xl object-cover"
							/>
						</div>
					</section>

					{/* <section className="mt-8">
					<div className="text-base text-charcoal-700 dark:text-offwhite/80 font-sans leading-relaxed space-y-4">
					<h2 className="text-2xl font-semi text-black dark:text-offwhite font-sans mb-5">interests</h2>
					<ul>
						<li>distributed systems</li>
						<li>fun algo problems</li>
						<li>climbing</li>
						<li>volleyball</li>
						<li>snowboarding</li>
					</ul>
					</div>
					</section> */}

					<section className="group mt-8">
						<div className="mb-5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
							<h2 className="text-2xl font-semi text-black dark:text-offwhite font-sans">bio</h2>
							<div className="flex items-baseline gap-2 text-sm font-sans opacity-100 transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100">
								{bioOptions.map((option, index) => (
									<span key={option.id} className="flex items-baseline gap-2">
										{index > 0 && (
											<span className="text-charcoal-300 dark:text-offwhite/30" aria-hidden>
												/
											</span>
										)}
										<button
											type="button"
											onClick={() => setBioKind(option.id)}
											aria-pressed={bioKind === option.id}
											className={`transition-colors duration-200 ${
												bioKind === option.id
													? "text-charcoal dark:text-offwhite/60"
													: "text-charcoal-300 dark:text-offwhite/30 hover:text-charcoal/70 dark:hover:text-offwhite/45"
											}`}
										>
											{option.label}
										</button>
									</span>
								))}
							</div>
						</div>
						<div className="text-base text-charcoal-700 dark:text-offwhite/80 font-sans leading-relaxed space-y-4">
							{bioKind === "professional" ? (
								<>
									<p>
										Hello again! I&apos;m a software engineer at Bloomberg and a Carnegie Mellon University graduate. 
									</p>
									<p>
										I studied IS + CS because I love both the theoretical and practical side of technology. I think that being at CMU with this combination of majors gave me a unique perspective because I learned to understand the beauty of theoretical computer science, algorithms, and math, dove deep in complicated systems projects to learn how to become a better programmer, and also discovered how to sometimes ditch complexity and go with the most practical approach. What I eventually realized throughout tackling these different challenges is how everything I did helped me develop my problem solving skills, and how fun it can be. 
									</p>
									<p>
										Something else about me is I love to teach. To me there are very few feelings better than helping someone who was really struggling finally be able to bridge the gap in their understanding and feel like they&apos;ve truly learned something new. I believe that a lot of who I am today comes from the mentors and educators that invested in me, and I try my best to do the same for those around me. At school I was a teaching assistant for the intro the CS class 15-112, which often was CMU students first taste of computer science, and also for 15-440: Distributed Systems, where many students learned how to become better engineers. 
									</p>
									<p>
										I love problem solving and I love constantly collaborating with other people, so becoming a software engineer felt like the natural choice. I&apos;m excited to be at Bloomberg to learn as much as possible from everyone around me. 
									</p>
									<p>
										I&apos;m always open to chat, so if we have anything in common and/or there is anything you may want to talk about, feel free to reach out!
									</p>
								</>
							) : (
								<>
									<p>
										If you&apos;re here, maybe you were a little curious about the other things I like to do with my time! As of now I have a few hobbies that I try to focus on: climbing, volleyball, and piano. But I also enjoy having fun in a lots of other activities too, especially with friends. I&apos;ll list those out at the end to see if we have any in common. 
									</p>
									<p>
										I started climbing a few years ago with my little brother. Over the past few years, climbing has taught me a lot about patience, improvement, and how to fail. Since most the time you try something you end up falling off the wall, you end up learning how to remember what led to it, and how to adjust so that you don&apos;t make the same mistake twice or three times in a row. Although it&apos;s a bit cliche, failing is definitely one of the greatest teachers. 
									</p>
									<p>
										Volleyball was probably the thing I put the most effort into other than academics/career while I was in college. I joined the club team as a freshman who had very little experience playing competitively, and over the next 4 years I tried my best to learn from all my great teammates. Playing alongside extremely skilled players helped make me into a much better player and taught me a lot about the game. I love this sport because getting better teaches you a lot about how to forget the points you lost and keep moving forward the best you can. 
									</p>
									<p>
										Piano is something I&apos;m trying to pick up again after a pretty long hiatus, with the occassional mess around. Over the summer I started hitting the basics again, brushed up some old pieces I used to play, and starting working on Liebestraum. It&apos;s been really nice to have a musical outlet again and I want to stay consistent in the coming months. 
									</p>
									<p>
										Other than that I like{" "}
										<Link
											href="/gallery"
											className="underline decoration-charcoal-300/80 decoration-1 underline-offset-[3px] transition-[text-decoration-color] duration-200 hover:decoration-charcoal-600 dark:decoration-offwhite/35 dark:hover:decoration-offwhite/70"
										>
											exploring with friends and trying lots of things
										</Link>
										{". "} 
										During the nicer months I love traveling and exploring the outdoors, and in the winter I like to snowboard with friends. I started drawing this summer after being inspired by one of my friends that is an amazing artist, so I&apos;m trying to fill up my first sketchbook. I&apos;ve also been practicing Judo and some other martial arts for a lot of my life, although I haven&apos;t been very active in it as of late. 

										
									</p>
									<p>
										Again, I&apos;m always happy to chat, so if we have anything in common and/or there is anything you may want to talk about, feel free to reach out!
									</p>
								</>
							)}
						</div>
					</section>
					
				</ContentContainer>
				</RevealContent>
			</main>
		</div>
	);
}
