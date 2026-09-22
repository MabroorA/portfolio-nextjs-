import ProjectsSection from "@/components/projectsSection";
import ProjectCard from "@/components/ProjectCard";
import imageEffectPic from "../public/Sound effects main page.png";
import lessonlyPic from "../public/lessonly-home.png";

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
            Currently a Backend Engineer at{" "}
            <a
              href="https://manypets.com/uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 underline hover:text-indigo-900 transition-colors duration-200"
            >
              ManyPets
            </a>
          </p>
        </header>

        {/* Main Project Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">Building</h2>
          <p className="max-w-screen-md mb-6 text-base leading-relaxed text-gray-700">
            I&apos;m currently building Lessonly.io and taking it from software
            development through marketing, advertising, and customer
            acquisition.
          </p>
          <div className="max-w-screen-md">
            <ProjectCard
              title="Lessonly"
              description="A mobile-first lesson booking platform for driving instructors, with simple scheduling, reminders, and WhatsApp confirmations."
              link="https://www.lessonly.io/"
              imageSrc={lessonlyPic}
            />
          </div>
        </div>

        {/* Deprecated Project Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">Deprecated</h2>
          <div className="max-w-screen-md">
            <ProjectCard
              title="Sound Effects AI"
              description="A fun AI sound-effects experiment that made plenty of noise, now taking a well-earned break."
              link="https://www.sound-effects-ai.com"
              imageSrc={imageEffectPic}
              cleanStyle
            />
          </div>
        </section>

        {/* Old Projects Section (Marquee) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">Old Projects</h2>
          <ProjectsSection />
        </section>
      </div>
    </main>
  );
}
