import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  imageSrc: StaticImageData;
  cleanStyle?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
  imageSrc,
  cleanStyle = false,
}) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-md h-full w-full">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl flex-shrink-0">
          <Image
            src={imageSrc}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 hover:scale-105 w-full h-full"
            sizes="(max-width: 768px) 100vw, 100vw"
            priority
          />
        </div>
      </a>
      <div
        className={
          cleanStyle
            ? "flex flex-col p-4 flex-grow justify-between min-h-[120px] bg-gradient-to-br from-white via-slate-50 to-blue-50 rounded-b-2xl border-t border-slate-200"
            : "flex flex-col p-4 flex-grow justify-between min-h-[120px]"
        }
      >
        <h3
          className={
            cleanStyle
              ? "text-base font-semibold text-slate-800 mb-1 tracking-tight"
              : "text-lg font-semibold text-black mb-1"
          }
        >
          {title}
        </h3>
        <p
          className={
            cleanStyle
              ? "text-sm text-slate-600 flex-grow leading-relaxed"
              : "text-sm text-gray-700 flex-grow leading-snug"
          }
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
