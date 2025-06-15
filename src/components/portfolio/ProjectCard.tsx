import Link from 'next/link';
import { checkThumbnailUrl } from '@/lib/post';
import { Project } from '@/constants/projects';
import Thumbnail from '@/components/common/Thumbnail';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard = ({ project, className = '' }: ProjectCardProps) => {
  const checkProjectThumbnail = (url: string): boolean => {
    return checkThumbnailUrl(url);
  };

  return (
    <Link
      href={project.url}
      className={`flex flex-col rounded-md ${className}`}
    >
      <div className="overflow-hidden rounded-md border border-border-subtle">
        {/* 썸네일 경로 프로젝트에 넣기 or 직접 만들기 */}
        <Thumbnail
          src={
            checkProjectThumbnail(
              `/contents/projects/${project.slug}/thumbnail.png`,
            )
              ? `/contents/projects/${project.slug}/thumbnail.png`
              : ''
          }
          alt={project.title}
          className=""
        />
        {/* <Thumbnail
          src={`/contents/projects/${project.slug}/thumbnail.png`}
          alt={project.title}
          className=""
        /> */}
      </div>
      <div className="p-2 flex flex-col gap-0.5">
        <h3>
          {project.title}: {project.subTitle}
        </h3>
        <p>{project.subInfo[0]}</p>
        <div className="flex flex-wrap gap-1">
          {project.skills.map((s, idx) => (
            <span
              key={idx}
              className="px-1 rounded-md text-sm text-muted-foreground border border-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
