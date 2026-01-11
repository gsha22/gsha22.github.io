import ContentContainer from "@/app/components/ContentContainer";
import PostBody from "@/app/components/PostBody";
import RevealContent from "@/app/components/RevealContent";
import Link from "next/link";


const markdown = String.raw`# hello world! 
_Published Jan 5, 2026_

After about a year of half-baked designs and attempts creating a personal website for myself, I can finally say that I've completed making my personal website. I'm very thankful my good friend copilot for helping this process be a lot more straightforward!  

I had a friend ask me why I started building this website after I already got a job offer. My initial answer was something along the lines of "Oh, just for myself," but I wanted to write this quick blog post to try and lay out some of the goals I had in mind after thinking on the question a little longer. 

So here is my more well thought-out answer. First, my initial answer wasn't completely off. I *do* just want to have my own little space on the internet, and I did want to have a little fun exercising some creative muscles that have been sitting in a dark, dusty attic for a little too long. The next reason is because I really wanted to have somewhere where I could put basically everything I've ever done all in one spot. And lastly, I wanted to make a blog page to practice writing, and put my ideas about whatever I might find interesting out there. 

Over the past few years I think my writing skills have degraded, and sometimes the ideas in my head just don't want to come out correctly. So hopefully starting this blog will be a nice way to practice.

Overall though, I'm really happy with how it turned out and am pleasantly surprised to find that web development can be really satisfying. After spending many hours staring at random pixels, crashing out about goofy spacing, and prompt engineering the hell out of my website, I've come to appreciate how much work it takes to make websites look nice. 

Thanks for reading! - Gabe`;

export default function MarkdownReadyPost() {
  return (
    <div className="flex min-h-screen bg-warm dark:bg-charcoal-900">
      <main className="flex-1 pt-20">
        <RevealContent>
          <ContentContainer>
            <div className="space-y-6">
              <PostBody markdown={markdown} />
              <Link
                href="/blog"
                className="inline-flex items-center text-sm font-medium text-charcoal-700 underline-offset-4 hover:underline dark:text-offwhite/80"
              >
                ← back to posts
              </Link>
            </div>
          </ContentContainer>
        </RevealContent>
      </main>
    </div>
  );
}
