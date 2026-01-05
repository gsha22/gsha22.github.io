import ContentContainer from "@/app/components/ContentContainer";
import PostBody from "@/app/components/PostBody";
import RevealContent from "@/app/components/RevealContent";
import Link from "next/link";

const fence = "```";

const markdown = String.raw`## Markdown-ready blogging
_Published Jan 5, 2026_

Writing posts in markdown means you keep focus on the words while still dropping in math, code, and links.

#### What this demo shows
- Standard markdown headings, lists, and emphasis
- Inline math like $E=mc^2$ and block math with KaTeX
- Code fences for snippets
- Inline HTML for extra control when you need it

#### Block math
$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$

#### Code sample
${fence}
function greet(name: string) {
  return hello;
}

console.log(greet("markdown"));
${fence}

#### Links
Check out <a href="https://daringfireball.net/projects/markdown/" target="_blank" rel="noreferrer">Markdown basics</a> for a quick refresher.
`;

export default function MarkdownReadyPost() {
  return (
    <div className="flex min-h-screen bg-warm dark:bg-charcoal-900">
      <main className="flex-1 pt-20 pb-16">
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
            </div>
          </ContentContainer>
        </RevealContent>
      </main>
    </div>
  );
}
