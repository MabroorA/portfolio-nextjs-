import ProjectsSection from "@/components/projectsSection";
import imageEffectpic from "../public/Sound effects main page.png";
import ProjectCard from "@/components/ProjectCard";
import Marquee from "@/components/magicui/marquee";

export default function Home() {
  return (
    <main className=" px-2 md:px-0  py-10 bg-transparent ">
      <div className="w-full   ">
        {/* Header Section */}
        <header className="mb-10">
          <h2 className="mt-2 text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-cyan-500">
            Hey, I'm Mabroor a Full Stack Developer
          </h2>
          <p className="mt-4 text-gray-700 text-base">
            I build things sometimes. Welcome to my little corner of the web
            where I share my projects, lessons, and thoughts.
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
          <Marquee pauseOnHover>
            <div className="space-x-6">
              <ProjectsSection />
            </div>
          </Marquee>{" "}
        </section>
      </div>
    </main>
  );
}
