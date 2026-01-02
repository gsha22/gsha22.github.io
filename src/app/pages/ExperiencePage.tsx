"use client";

import { useState } from "react";
import SideBar from "@/app/components/SideBar";
import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineSeparator,
} from "@mui/lab";
import {
	Avatar,
	Box,
	Card,
	CardActionArea,
	CardContent,
	Collapse,
	Typography,
} from "@mui/material";

type Experience = {
	id: string;
	role: string;
	company: string;
	location: string;
	timeframe: string;
	logoSrc?: string;
	logoText: string;
	logoColor: string;
	description: string;
};

const experiences: Experience[] = [
	{
		id: "exp-1",
		role: "15-440 Teaching Assistant",
		company: "Carnegie Mellon University SCS",
		location: "Pittsburgh, PA",
		timeframe: "Aug '25 - Dec '25",
		logoText: "CMU",
		logoColor: "#FFFFFF",
		logoSrc: "images/logos/SCS_logo.jpg",
		description:
			"Led weekly recitations, authored walkthroughs, and mentored students on project architecture, testing, and debugging practices. ",
	},
	{
		id: "exp-2",
		role: "Software Engineering Intern",
		company: "Capital One",
		location: "Richmond, VA",
		timeframe: "June '25 - Aug '25",
		logoText: "AA",
		logoColor: "##123262",
		logoSrc: "images/logos/c1.webp",
		description:
			"Built data-forward features on a modern stack. Shipped dashboards, cleaned pipelines, and collaborated closely with product and design.",
	},
	{
		id: "exp-3",
		role: "15-112 Teaching Assitant",
		company: "Carnegie Mellon University School of Computer Science",
		location: "Pittsburgh, PA",
		timeframe: "Aug '24 - Dec '24",
		logoText: "NL",
		logoColor: "#FFFFFF",
		logoSrc: "images/logos/SCS_logo.jpg",
		description:
			"Prototyped client-facing features, wrote API integrations, and ran usability tests to tighten feedback loops between users and engineering.",
	},
	{
		id: "exp-4",
		role: "Software Engineering Intern",
		company: "Software Engineering Institute",
		location: "Pittsburgh, PA",
		timeframe: "May '24 - Aug '24",
		logoText: "NL",
		logoColor: "#FFFFFF",
		logoSrc: "images/logos/sei_logo.png",
		description:
			"Prototyped client-facing features, wrote API integrations, and ran usability tests to tighten feedback loops between users and engineering.",
	},
];

export default function ExperiencePage() {
	const [expandedIds, setExpandedIds] = useState<string[]>([]);

	const handleToggle = (id: string) => {
		setExpandedIds((current) =>
			current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
		);
	};

	return (
		<div className="flex min-h-screen bg-warm dark:bg-charcoal-800">
			<SideBar />
			<main className="flex-1 md:ml-80 px-6 md:px-12 pt-28 md:pt-16 pb-16">
				<h1 className="text-4xl font-bold text-charcoal dark:text-offwhite font-sans">experience</h1>
				<p className="mt-4 text-base text-charcoal-700 dark:text-offwhite/80 font-sans">
					A chronological history of my past experiences!
				</p>

				<section className="mt-12">
					<Box
						sx={{
							"& .MuiTimeline-root": { padding: 0 },
							"& .MuiTimelineItem-root:before": { flex: 0, padding: 0 },
						}}
					>
						<Timeline position="right" className="[&_div]:text-charcoal dark:[&_div]:text-offwhite">
							{experiences.map((exp, index) => {
								const isExpanded = expandedIds.includes(exp.id);

								return (
									<TimelineItem key={exp.id}>
										<TimelineSeparator className="pt-4">
											<TimelineDot
												sx={{
													bgcolor: "#9CA3AF",
													border: 0,
													height: 12,
													width: 12,
												}}
											/>
											{index < experiences.length - 1 && (
												<TimelineConnector sx={{ bgcolor: "#D1D5DB", width: 2 }} />
											)}
										</TimelineSeparator>
										<TimelineContent className="pb-4">
											<Card
												elevation={0}
												className="border border-charcoal-200 dark:border-charcoal-600 bg-offwhite dark:bg-charcoal-700/60"
												onClick={() => handleToggle(exp.id)}
												sx={{
													borderRadius: 4,
													width: "100%",
													maxWidth: { xs: "100%", md: 600 }, 
													transition: "transform 120ms ease, box-shadow 120ms ease",
													cursor: "pointer",
													overflow: "hidden",
													"&:hover": {
													transform: "translateY(-2px)",
													boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
													},
												}}
											>
												<CardActionArea aria-expanded={isExpanded} className="flex flex-col items-start text-left w-full">
													<CardContent className="w-full">
														<Box className="flex items-center gap-4">
															<Avatar
																variant="square"
																src={exp.logoSrc}
																sx={{
																	bgcolor: exp.logoColor,
																	width: 52,
																	height: 52,
																	fontWeight: 700,
																	borderRadius: 3,
																	overflow: "hidden",
																}}
																imgProps={{ style: { objectFit: "contain", width: "100%", height: "100%" } }}
															>
																{exp.logoText}
															</Avatar>
															<Box className="flex-1">
																<Typography component="h3" className="text-base font-semibold text-charcoal dark:text-offwhite">
																	{exp.role}
																</Typography>
																<Typography className="pb-2 text-charcoal-700 dark:text-offwhite/80">
																	{exp.company}
																</Typography>
																<Box className="flex flex-wrap items-center gap-2">
																	<Typography className="text-xs italic text-charcoal-400 dark:text-offwhite/80">
																		{exp.location}
																	</Typography>
																	<span className="text-charcoal-400 dark:text-offwhite/60">•</span>
																	<Typography className="text-xs text-charcoal-600 dark:text-offwhite/70">
																		{exp.timeframe}
																	</Typography>	
																</Box>
																
															</Box>
														</Box>
													</CardContent>
													<Collapse in={isExpanded} timeout="auto" unmountOnExit>
														<CardContent className="pt-0 pb-4">
															<Typography className="text-sm leading-relaxed text-charcoal-700 dark:text-offwhite/80">
																{exp.description}
															</Typography>
														</CardContent>
													</Collapse>
												</CardActionArea>
											</Card>
										</TimelineContent>
									</TimelineItem>
								);
							})}
						</Timeline>
					</Box>
				</section>
			</main>
		</div>
	);
}
