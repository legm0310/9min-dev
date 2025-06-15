import ProjectCard from './ProjectCard';
import { projects } from '@/constants/projects';

interface ProjectListProps {
  className?: string;
}

const ProjectList = ({ className = '' }: ProjectListProps) => {
  return (
    <>
      <div className={`text-2xl font-semibold ${className}`}>Projects</div>
      <div className={`list-grid-2col ${className}`}>
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </>
  );
};

export default ProjectList;
