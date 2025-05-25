import React from "react";
import Link from "next/link";

import humanizePic from "../public/humanize-updated-home.png";
import StocksPic from "../public/stocks-updated.jpg";
import refugePic from "../public/refugeap-home-resized.jpg";
import whiteboardPic from "../public/Cloud-app-home.jpg";

import { Button } from "./ui/button";
import ProjectCard from "./ProjectCard";
import Marquee from "./magicui/marquee";

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
  // Only render the responsive marquee/stacked cards section
  return (
    <section className="mb-16">
      {/* Desktop/Tablet: Marquee */}
      <div className="hidden md:block">
        <Marquee pauseOnHover>
          <div className="flex space-x-6">
            <ProjectCard
              title="Humanize Text"
              description="Humanize Text helps you bypass AI text detectors generated."
              link="https://humanize-text.com/"
              imageSrc={humanizePic}
              cleanStyle
            />
            <ProjectCard
              title="Finstimulate"
              description="Stock prediction powered by React, NodeJS, and Flask."
              link="https://stocks-prediction-app.pages.dev"
              imageSrc={StocksPic}
              cleanStyle
            />
            <ProjectCard
              title="Refugee Aid"
              description="Aid platform built with Django and React to support refugee needs."
              link="https://github.com/MabroorA/refugeEAP-app"
              imageSrc={refugePic}
              cleanStyle
            />
            <ProjectCard
              title="Private Cloud Whiteboard"
              description="Self-hosted whiteboard using Docker, GCP & Kubernetes."
              link=""
              imageSrc={whiteboardPic}
              cleanStyle
            />
          </div>
        </Marquee>
      </div>
      {/* Mobile: Vertical stack */}
      <div className="flex flex-col space-y-6 md:hidden">
        <ProjectCard
          title="Humanize Text"
          description="Humanize Text helps you bypass AI text detectors generated."
          link="https://humanize-text.com/"
          imageSrc={humanizePic}
          cleanStyle
        />
        <ProjectCard
          title="Finstimulate"
          description="Stock prediction powered by React, NodeJS, and Flask."
          link="https://stocks-prediction-app.pages.dev"
          imageSrc={StocksPic}
          cleanStyle
        />
        <ProjectCard
          title="Refugee Aid"
          description="Aid platform built with Django and React to support refugee needs."
          link="https://github.com/MabroorA/refugeEAP-app"
          imageSrc={refugePic}
          cleanStyle
        />
        <ProjectCard
          title="Private Cloud Whiteboard"
          description="Self-hosted whiteboard using Docker, GCP & Kubernetes."
          link=""
          imageSrc={whiteboardPic}
          cleanStyle
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
