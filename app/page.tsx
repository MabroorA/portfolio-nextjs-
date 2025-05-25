import ProjectsSection from "@/components/projectsSection";
import imageEffectpic from "../public/Sound effects main page.png";
import ProjectCard from "@/components/ProjectCard";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

export default function Home() {
  return (
    <main className=" px-2 md:px-0  py-10 bg-transparent ">
      <div className="w-full   ">
        {/* Header Section */}
        <header className="mb-10">
          <h2 className="mt-2 text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-cyan-500">
            Hey, I am Mabroor a Full Stack Developer
          </h2>
          <p className="mt-4 text-gray-700 text-base">
            I build things sometimes. Welcome to my little corner of the web
            where I share my projects and lessons.
            <br />
            Currently A Software Engineer at{" "}
            <a
              href="https://influence.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 underline hover:text-indigo-900 transition-colors duration-200"
            >
              Influence.io
            </a>
          </p>
        </header>

        {/* Main Project Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">Building</h2>
          <div className="max-w-screen-md">
            <ProjectCard
              title="Image to Sound Effects"
              description="AI-Generated Unique Sound Effects. Create instead of extracting from videos."
              link="https://www.sound-effects-ai.com"
              imageSrc={imageEffectpic}
            />
          </div>
        </div>

        {/* Lessons Section (Marquee) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">
            Learning by Doing (and Breaking)
          </h2>
          <ProjectsSection />
        </section>
      </div>
    </main>
  );
}
