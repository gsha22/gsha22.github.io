import SideBar from "@/app/components/SideBar";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen bg-warm dark:bg-charcoal-900">
      <SideBar />
      <main className="flex-1 md:ml-80 px-6 md:px-12 pt-28 md:pt-16 pb-16">
        <h1 className="text-4xl font-bold text-charcoal dark:text-offwhite font-sans">Projects</h1>
        <p className="mt-4 text-lg text-charcoal-700 dark:text-offwhite/80 font-sans">
          Drop your case studies or project cards here. This is a placeholder so navigation works today.
        </p>
      </main>
    </div>
  );
}
