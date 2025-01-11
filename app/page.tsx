import { PiHandWavingBold } from "react-icons/pi";
import ProjectsSection from "@/components/projectsSection";
import BoxReveal from "@/components/magicui/box-reveal";
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
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">Building</h2>
          {/* <div className="border-l-4 border-teal-500 pl-4"> */}
          <div className="bg-white p-6 border-gray-400 rounded-md shadow-md shadow-gray-400 ">
            <a
              href="https://www.sound-effects-ai.com"
              className="text-xl font-semibold text-gray-900"
            >
              Sound-Effects-Ai.com
            </a>
            <p className="mt-2 text-gray-600">
              A detailed description of the main project you're currently
              working on. Explain its purpose, challenges, and progress.
            </p>
            <div className="mt-4">
              {/* Placeholder for project image */}
              <div className="w-full h-48  border border-gray-300 rounded-md">
                <p className="text-center text-gray-400 mt-20">Project Image</p>
              </div>
            </div>
            <a
              href="#"
              className="text-teal-500 hover:text-teal-700 mt-4 inline-block"
            >
              Learn more →
            </a>
          </div>
          {/* </div> */}
        </section>

        {/* Lessons Section (Marquee) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">
            Learning by Doing (and Breaking)
          </h2>
          <Marquee pauseOnHover>
            <div className="space-x-6">
              <ProjectsSection />
            </div>
          </Marquee>
        </section>
      </div>
    </main>
  );
}
