import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc: StaticImageData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  imageSrc,
}) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-md h-full">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
          <Image
            src={imageSrc}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </a>
      <div className="flex flex-col p-4 flex-grow">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mt-2 flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
