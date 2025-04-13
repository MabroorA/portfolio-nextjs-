import React from "react";
import Link from "next/link";

import imageEffectpic from "../public/Image-Effects.png";
import humanizePic from "../public/humanize-updated-home.png";
import StocksPic from "../public/stocks-updated.jpg";
import refugePic from "../public/refugeap-home-resized.jpg";
import whiteboardPic from "../public/Cloud-app-home.jpg";

import { Button } from "./ui/button";
import ProjectCard from "./ProjectCard";

interface CardFooterProps {
  link: string;
  tags: string[];
  color?: string;
  isBroken?: boolean;
}

const CardFooter: React.FC<CardFooterProps> = ({
  link,
  tags,
  color = "teal-500",
  isBroken = false,
}) => {
  const displayLabel = isBroken
    ? "No link"
    : link.includes("github")
    ? "Github"
    : "Visit";

  return (
    <div className="flex flex-row justify-between p-2 lg:justify-end rounded-2xl">
      <div className="lg:hidden">
        <Link href={link || "#"}>
          <Button
            size="sm"
            className={`font-normal text-black ${
              isBroken ? "bg-red-400" : `bg-${color}`
            } rounded-3xl`}
          >
            {displayLabel}
          </Button>
        </Link>
      </div>
      <div className="flex flex-col py-1 space-y-1 bg-inherit rounded-2xl md:flex-row md:space-x-1 md:space-y-0">
        {tags.map((tag, index) => (
          <Button
            key={index}
            size="sm"
            className="bg-black rounded-3xl w-fit h-fit"
          >
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col py-5 space-y-5 lg:flex-row lg:flex-wrap lg:space-y-0 lg:gap-5">
        {/* IMAGE TO SOUND */}
        <div className="flex flex-col transition-transform duration-300 transform rounded-2xl md:w-72 md:h-96">
          <ProjectCard
            title="Image to Sound Effects"
            description="AI-Generated Unique Sound Effects. Create instead of extracting from videos."
            link="https://www.sound-effects-ai.com"
            imageSrc={imageEffectpic}
          />
          <CardFooter
            link="https://sound-affects.vercel.app/"
            tags={["Nextjs", "Tailwind"]}
          />
        </div>

        {/* HUMANIZE */}
        <div className="flex flex-col transition-transform duration-300 transform rounded-2xl md:w-72 md:h-96">
          <ProjectCard
            title="Humanize Text"
            description="Humanize Text helps you bypass AI text detectors generated."
            link="https://humanize-text.com/"
            imageSrc={humanizePic}
          />
          <CardFooter
            link="https://humanize-text.com/"
            tags={["Nextjs", "Tailwind"]}
          />
        </div>

        {/* FINSTIMULATE */}
        <div className="flex flex-col transition-transform duration-300 transform rounded-2xl md:w-72 md:h-96">
          <ProjectCard
            title="Finstimulate"
            description="Stock prediction powered by React, NodeJS, and Flask."
            link="https://stocks-prediction-app.pages.dev"
            imageSrc={StocksPic}
          />
          <CardFooter
            link="https://stocks-prediction-app.pages.dev"
            tags={["React", "NodeJS", "Flask"]}
            color="orange-400"
          />
        </div>

        {/* REFUGEE AID */}
        <div className="flex flex-col transition-transform duration-300 transform rounded-2xl md:w-72 md:h-96">
          <ProjectCard
            title="Refugee Aid"
            description="Aid platform built with Django and React to support refugee needs."
            link="https://github.com/MabroorA/refugeEAP-app"
            imageSrc={refugePic}
          />
          <CardFooter
            link="https://github.com/MabroorA/refugeEAP-app"
            tags={["React", "Django"]}
          />
        </div>

        {/* CLOUD WHITEBOARD */}
        <div className="flex flex-col transition-transform duration-300 transform rounded-2xl md:w-72 md:h-96">
          <ProjectCard
            title="Private Cloud Whiteboard"
            description="Self-hosted whiteboard using Docker, GCP & Kubernetes."
            link=""
            imageSrc={whiteboardPic}
          />
          <CardFooter link="" tags={["Docker", "Kubernetes", "GCP"]} isBroken />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
