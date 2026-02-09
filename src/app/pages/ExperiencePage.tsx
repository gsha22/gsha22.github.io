'use client';

import SideBar from "@/app/components/SideBar";
import ContentContainer from "@/app/components/ContentContainer";
import RevealContent from "@/app/components/RevealContent";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineSeparator,
} from "@mui/lab";
import {
	Box,
	Typography,
} from "@mui/material";

type Experience = {
	id: string;
	role: string;
	company: string;
	location: string;
	timeframe: string;
	description?: string;
	linkHref?: string;
	linkLabel?: string;
};

const experiences: Experience[] = [
	{
		id: "exp-0",
		role: "Incoming Software Engineer",
		company: "Bloomberg",
		location: "New York City, NY",
		timeframe: "Current",
	},
	{
		id: "exp-1",
		role: "15-440 Teaching Assistant",
		company: "Carnegie Mellon University School of Computer Science",
		location: "Pittsburgh, PA",
		timeframe: "Aug - Dec '25",
		description:
			"440 is a really cool class that teaches a wide variety of topics in distributed systems, so I was excited to come back to the topics as a TA. I taught biweekly recitations for the different projects including a Go-style kvstore, a distributed bitcoin miner using customized a UDP/TCP protocol, the Raft consensus algorithm, and the actor model. I also held weekly office hours for written homework and projects.",
		linkHref: "https://www.composablesystems.org/15-440/fa2025/syllabus/",
		linkLabel: "F25 440 course site",
	},
	{
		id: "exp-2",
		role: "Software Engineering Intern",
		company: "Capital One",
		location: "Richmond, VA",
		timeframe: "Jun - Aug '25",
		description:
			"Built an API in Go + a full-stack application in React to manage thousands of Google Cloud Platform projects across the organization. After approval from senior engineers, we deployed the front-end on a AWS S3 bucket, and the backend on AWS ECS Fargate.",
	},
	{
		id: "exp-3",
		role: "15-112 Teaching Assistant",
		company: "Carnegie Mellon University School of Computer Science",
		location: "Pittsburgh, PA",
		timeframe: "Aug - Dec '24",
		description:
			"This class is what sparked my love for computer science, and I wanted to pay that excitement forward coming back. I would teach two hour-long recitations per week on CS fundamentals and hold a 2 hour office hours on the weekend. Towards the end of the semester, I mentored 12 students through a 2 week long term project to showcase their skills.",
		linkHref: "https://www.cs.cmu.edu/~112-f24/",
		linkLabel: "F24 112 course site",
	},
	{
		id: "exp-4",
		role: "Software Engineering Intern",
		company: "Software Engineering Institute",
		location: "Pittsburgh, PA",
		timeframe: "May - Aug '24",
		description:
			"Throughout this summer I helped define the Insider Incident Data Exchange Standard (IIDES) and built a Python library implementing it, straightforwardly named PyIIDES. Researchers could use the library to make connections between insider threat data and act accordingly.",
		linkHref: "https://github.com/cmu-sei/iides/blob/main/documentation/WhitePaper.md",
		linkLabel: "IIDES white paper",
	},
	{
		id: "exp-5",
		role: "Research Assistant",
		company: "Carnegie Mellon University Philosophy Department",
		location: "Pittsburgh, PA",
		timeframe: "Jun - Aug '23",
		description:
			"I worked with a professor interested in utilizing AI to assist with his research. First, I developed a tool using OpenAI and Python to automate the process of transcription editing. This removed the need to go through thousands of lines of interviews to remove filler words, misspellings, etc. Next, I developed an AI chatroom for students to encourage open discussion and debate on charged topics in a safe space.",
	},
];

export default function ExperiencePage() {
	return (
		<div className="flex min-h-screen bg-warm dark:bg-charcoal-900">
			<SideBar />
			<main className="flex-1 md:ml-60 pt-28 md:pt-16">
				<RevealContent>
				<ContentContainer>
					<h1 className="text-4xl pt-10 font-semi text-black dark:text-offwhite font-sans">experience</h1>
					<section className="mt-8">
						<Box
							sx={{
								"& .MuiTimeline-root": { padding: 0, margin: 0 },
								"& .MuiTimelineItem-root:before": { flex: 0, padding: 0, margin: 0 },
							}}
						>
							<Timeline position="right" className="[&_div]:text-charcoal dark:[&_div]:text-offwhite">
								{experiences.map((exp, ) => {
									return (
										<TimelineItem key={exp.id}>
											<TimelineContent sx={{ flex: 0.15, paddingLeft: 0 }} className="pb-6 text-right hidden md:block">
												<span className="text-xs text-charcoal-500 dark:text-offwhite/70">
													{exp.timeframe}
												</span>
											</TimelineContent>
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
											<TimelineContent sx={{ flex: 0.85 }} className="pb-6">
												<div className="w-full max-w-[640px] text-left space-y-1">
													<div className="flex flex-col">
														<Typography component="h3" className="text-base font-semibold text-black dark:text-offwhite">
															{exp.role}
														</Typography>
														<Typography className="text-sm pb-2 text-charcoal-700 dark:text-offwhite/90">
															{exp.company}
														</Typography>
														<div className="flex flex-wrap items-center gap-2 text-xs text-charcoal-500 dark:text-offwhite/70">
															<span className="italic">
																{exp.location}
															</span>
															<span className="md:hidden">
																• {exp.timeframe}
															</span>
														</div>
													</div>
													<div className="pt-3 text-sm leading-relaxed text-charcoal-700 dark:text-offwhite/80">
														{exp.description}
													</div>
													{exp.linkHref && exp.linkLabel && (
														<Link
															href={exp.linkHref}
															target="_blank"
															rel="noreferrer"
															className="group inline-flex items-center gap-1 pt-2 text-sm font-medium text-charcoal-800 border-b border-charcoal-300 transition-colors duration-150 hover:border-charcoal-700 dark:text-offwhite dark:border-offwhite/50 dark:hover:border-offwhite"
														>
															{exp.linkLabel}
															<ArrowUpRight size={14} className="translate-y-[1px] transition-transform duration-150 group-hover:-translate-y-[2px]" />
														</Link>
													)}
												</div>
											</TimelineContent>
										</TimelineItem>
									);
								})}
							</Timeline>
						</Box>
					</section>
				</ContentContainer>
				</RevealContent>
			</main>
		</div>
	);
}
