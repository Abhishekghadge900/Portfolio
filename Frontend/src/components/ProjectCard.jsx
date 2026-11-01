import SpotlightCard from '../ReactBits/Components/SpotlightCard/SpotlightCard';
import { gradientButton } from '../ui';

function ProjectCard({ project }) {
  const { title, subtitle, description, technologies, demoLink, codeLink } = project;

  return (
    <SpotlightCard className="h-full hover:shadow-xl/30" spotlightColor="rgba(0, 229, 255, 1)">
      <article className="flex flex-col h-full transition-transform duration-300 hover:-translate-y-2">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        {subtitle && <p className="text-sm text-blue-400 mt-1 mb-4">{subtitle}</p>}

        <p className="text-gray-200 mb-4">{description}</p>

        <ul className="flex flex-wrap gap-2 mb-6 list-none p-0" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-gray-200"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 mt-auto">
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={gradientButton}
            aria-label={`View source code for ${title}`}
          >
            View Code
          </a>
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition"
              aria-label={`Open live demo of ${title}`}
            >
              Live Demo
            </a>
          )}
        </div>
      </article>
    </SpotlightCard>
  );
}

export default ProjectCard;
