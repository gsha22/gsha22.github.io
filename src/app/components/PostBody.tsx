"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import ReactMarkdown, { type Components } from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";

type Props = {
  markdown: string;
};

// Defer loading the video player to the client so markdown can be rendered on the server.
const Video = dynamic(() => import("./Media/Video"), {
  ssr: false,
  loading: () => <div className="rounded-lg bg-charcoal-100 p-4 text-sm text-charcoal-600">Loading video…</div>,
});

const markdownComponents: Components = {
  video: ({ src, ...rest }) => {
    if (!src || typeof src !== "string") return null;

    const id = src.split(".")[0] ?? "video";
    const className = `${src.split("-")[0] ?? "post"}-video`;

    return <Video src={src} id={id} className={className} {...rest} />;
  },
  img: ({ src, alt = "", ...rest }) => {
    if (!src || typeof src !== "string") return null;

    const normalizedSrc = src.startsWith("/") ? src : `/images/${src}`;
    const className = `${src.split("-")[0] ?? "post"}-image`;
    
    // Extract width and height from rest and convert to numbers if they exist
    const { width: restWidth, height: restHeight, ...otherProps } = rest as Record<string, unknown>;
    const width = restWidth ? Number(restWidth) : 1200;
    const height = restHeight ? Number(restHeight) : 800;

    return (
      <span className="post-image-wrapper">
        <Image
          src={normalizedSrc}
          alt={alt}
          className={className}
          width={width}
          height={height}
          unoptimized
          sizes="100vw"
          style={{ height: "auto", width: "100%", display: "block" }}
          {...otherProps}
        />
      </span>
    );
  },
  a: ({ children, ...rest }) => (
    <a {...rest} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
};

export default function PostBody({ markdown }: Props) {
  return (
    <div className="post-body text-charcoal dark:text-offwhite">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        remarkPlugins={[remarkMath]}
        components={markdownComponents}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
