import ContentContainer from "@/app/components/ContentContainer";
import SideBar from "@/app/components/SideBar";
import RevealContent from "@/app/components/RevealContent";
import { galleryImages } from "@/app/data/galleryImages";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <div className="flex min-h-screen bg-warm dark:bg-charcoal-900">
      <SideBar />
      <main className="flex-1 md:ml-60 pt-28 md:pt-16 pb-32">
        <RevealContent>
          <ContentContainer>
            <h1 className="text-4xl pt-10 font-semi text-black dark:text-offwhite font-sans">photo gallery</h1>
            <p className="mt-4 text-base text-charcoal-700 dark:text-offwhite/80 font-sans leading-relaxed">
              a sneak peek at my life
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
          </ContentContainer>
        </RevealContent>
      </main>
    </div>
  );
}
