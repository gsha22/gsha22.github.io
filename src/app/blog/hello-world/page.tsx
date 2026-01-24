import ContentContainer from "@/app/components/ContentContainer";
import PostBody from "@/app/components/PostBody";
import RevealContent from "@/app/components/RevealContent";
import Link from "next/link";


const markdown = String.raw`# hello world! 
_Published Jan 5, 2026_

After about a year of half-baked designs and attempts creating a personal website for myself, I can finally say that I've completed making my personal website. Overall, this was a super fun learning experience and I am really glad to have finally got around to making it. And for my first blog post, I wanted to put some of my goals for this website out there. 

My first goal for making this website was to have some fun exercising creative muscles that have been sitting in a dark, dusty attic for a little too long. My second reason is because I've been wanting to have my own little nook on the internet for a long time to put basically everything I've ever done in one spot. Lastly, I wanted to make a blog page to practice writing, telling stories, and putting my ideas on whatever I may find interesting out there. 

Over the past few years I think my writing skills have degraded, and sometimes the ideas in my head just don't want to come out correctly. So hopefully starting this blog will be a nice way to practice.

I'm really happy with how it turned out and am pleasantly surprised to find that web development can be really satisfying. After spending many hours staring at random pixels, crashing out about goofy spacing, and prompt engineering the hell out of my website, I've come to appreciate how much work it takes to make websites look nice. 

Thanks for reading! - Gabe`;

export default function MarkdownReadyPost() {
  return (
    <div className="flex min-h-screen bg-warm dark:bg-charcoal-900">
      <main className="flex-1 pt-20">
        <RevealContent>
          <ContentContainer>
            <div className="space-y-6">
              <Link
                  href="/blog"
                  className="inline-flex items-center text-sm font-medium text-charcoal-700 underline-offset-4 hover:underline dark:text-offwhite/80"
                >
                  ← back to posts
              </Link>
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
