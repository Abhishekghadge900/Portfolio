import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/projects';
import { sectionHeading, sectionUnderline } from '../ui';

function ProjectsSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6">
      <h2 className={sectionHeading}>My Projects</h2>
      <div className={sectionUnderline} aria-hidden="true" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
