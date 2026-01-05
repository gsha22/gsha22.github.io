import ContentContainer from "@/app/components/ContentContainer";
import SideBar from "@/app/components/SideBar";
import RevealContent from "@/app/components/RevealContent";
import Image from "next/image";
import Link from "next/link";
import {
	Timeline,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineItem,
	TimelineSeparator,
} from "@mui/lab";
import { Box, Typography } from "@mui/material";

export default function AboutPage() {
	const educationItems = [
		{
			school: "Carnegie Mellon University",
			college: "Dietrich College of Humanities and Social Sciences",
			dates: "Aug '22 - Current",
			program: "B.S. Information Systems + Computer Science",
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
			<main className="flex-1 md:ml-60 pt-28 md:pt-16 pb-16">
				<RevealContent>
				<ContentContainer>
					<h1 className="text-4xl pt-10 font-semi text-black dark:text-offwhite font-sans">about</h1>
					
					<section className="mt-12 flex flex-col lg:block">
						<div className="lg:float-right lg:w-64 lg:ml-8 lg:mb-4 flex lg:block pb-8 lg:pt-0 lg:pb-0 justify-center">
							<div className="w-64 lg:w-full">
								<Image
									src="/images/gsha.JPG"
									width={300}
									height={400}
									alt="Gabriel"
									className="w-full h-auto rounded-3xl object-cover"
								/>
							</div>
						</div>
						
						<div className="text-base text-charcoal-700 dark:text-offwhite/80 font-sans leading-relaxed space-y-4">
							<p>Hello again!</p>
							<p>
								My name is Gabriel and I&apos;m currently a senior studying Information Systems and Computer Science at Carnegie Mellon University. I chose IS and CS because of my love for both the practical and theoretical aspects of technology, and how solutions from the theoretical space can be applied to the real world. Some of my current interests are databases and distributed systems. Although I&apos;m still relatively new to the topics, I find large-scale concurrent systems incredibly interesting, and I love figuring out how to get all the moving parts to work together in a way that is fast and reliable.
							</p>
							<p>
								Something else about me is I love to teach, and have served as a teaching assistant for CMU&apos;s intro to CS class 15-112, and 15-440: Distributed Systems. I love being able to help others bridge gaps in their understanding, and seeing their smiles after finally understanding something they&apos;ve been confused about is a feeling I can&apos;t get enough of.
							</p>
							<p>
								Outside of work, some of the things that I enjoy most in life are the outdoors, spending time with friends and family, music, traveling, and food. More specifically, you can find me climbing, playing volleyball, playing piano, snowboarding, hiking, or something else in the laundry list of things that I like, but may or may not be good at. Take a look at my photo gallery if you&apos;re interested in a{" "}
								<Link
									href="/gallery"
									className="underline decoration-charcoal-500 dark:decoration-offwhite/70 underline-offset-4 transition-[text-decoration-thickness] hover:decoration-2"
								>
									sneak peek
								</Link>{" "}
								of my life.
							</p>
							<p>
								I&apos;m always open to chat, so if we have anything in common and/or there is anything you may want to talk about, feel free to reach out!
							</p>
						</div>
					</section>

					<section className="mt-16">
						<h2 className="text-2xl font-semi text-black dark:text-offwhite font-sans mb-5">education</h2>
						<Box
							sx={{
								"& .MuiTimeline-root": { padding: 0 },
								"& .MuiTimelineItem-root:before": { flex: 0, padding: 0 },
							}}
						>
							<Timeline position="right" className="[&_div]:text-charcoal dark:[&_div]:text-offwhite">
								{educationItems.map((item, ) => (
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
					</section>
				</ContentContainer>
				</RevealContent>
			</main>
		</div>
	);
}
