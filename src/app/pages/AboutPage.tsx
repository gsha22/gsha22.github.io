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

export default function AboutPage() {
	const galleryImages = [
		{ src: "/images/life/ann2.jpg", alt: "Life photo 1" },
		{ src: "/images/life/FullSizeRender.JPG", alt: "Life photo 4" },
		{ src: "/images/life/IMG_0392.JPG", alt: "Life photo 5" },
		{ src: "/images/life/IMG_0397.JPG", alt: "Life photo 6" },
		{ src: "/images/life/IMG_1017.JPG", alt: "Life photo 7" },
		{ src: "/images/life/IMG_1319.JPG", alt: "Life photo 8" },
		{ src: "/images/life/IMG_1456.jpg", alt: "Life photo 9" },
		{ src: "/images/life/IMG_1473.JPG", alt: "Life photo 10" },
		{ src: "/images/life/IMG_1738.JPG", alt: "Life photo 11" },
		{ src: "/images/life/IMG_1808.JPG", alt: "Life photo 12" },
		{ src: "/images/life/IMG_1850.JPG", alt: "Life photo 13" },
		{ src: "/images/life/IMG_1861.JPG", alt: "Life photo 14" },
		{ src: "/images/life/IMG_1862.JPG", alt: "Life photo 15" },
		{ src: "/images/life/IMG_1865.JPG", alt: "Life photo 16" },
		{ src: "/images/life/IMG_1871.JPG", alt: "Life photo 17" },
		{ src: "/images/life/IMG_1909.JPG", alt: "Life photo 18" },
		{ src: "/images/life/IMG_1943.JPG", alt: "Life photo 19" },
		{ src: "/images/life/IMG_2044.JPG", alt: "Life photo 20" },
		{ src: "/images/life/IMG_2147.JPG", alt: "Life photo 21" },
		{ src: "/images/life/IMG_2184.JPG", alt: "Life photo 22" },
		{ src: "/images/life/IMG_2222.JPG", alt: "Life photo 23" },
		{ src: "/images/life/IMG_2396.JPG", alt: "Life photo 24" },
		{ src: "/images/life/IMG_2400.JPG", alt: "Life photo 25" },
		{ src: "/images/life/IMG_2472.JPG", alt: "Life photo 26" },
		{ src: "/images/life/IMG_2475.JPG", alt: "Life photo 27" },
		{ src: "/images/life/IMG_2489.JPG", alt: "Life photo 28" },
		{ src: "/images/life/IMG_2622.jpg", alt: "Life photo 29" },
		{ src: "/images/life/IMG_2630.jpg", alt: "Life photo 30" },
		{ src: "/images/life/IMG_2631.jpg", alt: "Life photo 31" },
		{ src: "/images/life/IMG_2733.JPG", alt: "Life photo 32" },
		{ src: "/images/life/IMG_2757.jpg", alt: "Life photo 33" },
		{ src: "/images/life/IMG_2857.JPG", alt: "Life photo 34" },
		{ src: "/images/life/IMG_2897.JPG", alt: "Life photo 35" },
		{ src: "/images/life/IMG_2901.jpg", alt: "Life photo 36" },
		{ src: "/images/life/IMG_3005.JPG", alt: "Life photo 37" },
		{ src: "/images/life/IMG_3009.JPG", alt: "Life photo 38" },
		{ src: "/images/life/IMG_3044.JPG", alt: "Life photo 39" },
		{ src: "/images/life/IMG_3054.JPG", alt: "Life photo 40" },
		{ src: "/images/life/IMG_3058.JPG", alt: "Life photo 41" },
		{ src: "/images/life/IMG_3094.PNG", alt: "Life photo 42" },
		{ src: "/images/life/IMG_3195.JPG", alt: "Life photo 43" },
		{ src: "/images/life/IMG_3480.JPG", alt: "Life photo 44" },
		{ src: "/images/life/IMG_3570.JPG", alt: "Life photo 45" },
		{ src: "/images/life/IMG_3573.JPG", alt: "Life photo 46" },
		{ src: "/images/life/IMG_3589.PNG", alt: "Life photo 47" },
		{ src: "/images/life/IMG_3705.JPG", alt: "Life photo 48" },
		{ src: "/images/life/IMG_4003.JPG", alt: "Life photo 49" },
		{ src: "/images/life/IMG_4146.JPEG", alt: "Life photo 50" },
		{ src: "/images/life/IMG_4271.JPG", alt: "Life photo 51" },
		{ src: "/images/life/IMG_4955.JPG", alt: "Life photo 52" },
		{ src: "/images/life/IMG_6036.JPG", alt: "Life photo 53" },
		{ src: "/images/life/IMG_7036.JPG", alt: "Life photo 54" },
		{ src: "/images/life/ann1.jpg", alt: "Life photo 55" },

	];

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
						
						<p className="text-base text-charcoal-700 dark:text-offwhite/80 font-sans leading-relaxed whitespace-pre-line">
							{`Hello again! 

My name is Gabriel and I'm currently a senior studying Information Systems and Computer Science at Carnegie Mellon University. I chose IS and CS because of my love for both the practical and theoretical aspects of technology, and how solutions from the theoretical space can be applied to the real world. Some of my current interests are databases and distributed systems. Although I'm still relatively new to the topics, I find large-scale concurrent systems incredibly interesting, and I love figuring out how to get all the moving parts to work together in a way that is fast and reliable. 

Something else about me is I love to teach, and have served as a teaching assistant for CMU's intro to CS class 15-112, and 15-440: Distributed Systems. I love being able to help others bridge gaps in their understanding, and seeing their smiles after finally understanding something they've been confused about is a feeling I can't get enough of. 

Outside of work, some of the things that I enjoy most in life are the outdoors, spending time with friends and family, music, traveling, and food. More specifically, you can find me climbing, playing volleyball, playing piano, snowboarding, hiking, or something else in the laundry list of things that I like, but may or may not be good at.

I'm always open to chat, so if we have anything in common and/or there is anything you may want to talk about, feel free to reach out!`}
						</p>
					</section>

					<section className="mt-16">
						<h2 className="text-2xl font-bold text-black dark:text-offwhite font-sans mb-5">education</h2>
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

						<section className="mt-16">
							<h2 className="text-2xl font-bold text-charcoal dark:text-offwhite font-sans">photo gallery</h2>
							<p className="mt-4 text-base text-charcoal-700 dark:text-offwhite/80 font-sans leading-relaxed">
								A little glimpse into my life.
							</p>
							<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
								{galleryImages.map((image, index) => (
									<div
									key={image.src}
									className={`
										overflow-hidden relative w-full
										${index % 3 === 1 ? "lg:translate-y-8" : ""}
										${index % 2 === 1 ? "md:translate-y-6 lg:translate-y-0" : ""}
									`}
									style={{ aspectRatio: 4 / 5 }}
									>
									<Image
										src={image.src}
										alt={image.alt}
										fill
										sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
										className="object-cover"
										priority={index === 0}
									/>
									</div>
								))}
							</div>
						</section>
				</ContentContainer>
				</RevealContent>
			</main>
		</div>
	);
}
