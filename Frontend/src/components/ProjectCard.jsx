import SpotlightCard from '../ReactBits/Components/SpotlightCard/SpotlightCard';
import { gradientButton, outlineButton } from '../ui';

function ProjectCard({ project }) {
  const { title, subtitle, description, highlights = [], technologies, image, imageAlt, demoLink, codeLink } = project;

  return (
    <SpotlightCard className="h-full !p-0 hover:shadow-xl/30" spotlightColor="rgba(0, 229, 255, 1)">
      <article className="group flex flex-col h-full">
        {/* Screenshot */}
        {image && (
          <div className="aspect-video w-full overflow-hidden bg-neutral-950">
            <img
              src={image}
              alt={imageAlt || `${title} screenshot`}
              width={1200}
              height={675}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex flex-col flex-1 p-6">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          {subtitle && <p className="text-sm text-blue-400 mt-1 mb-3">{subtitle}</p>}

          <p className="text-gray-200 mb-4">{description}</p>

          {highlights.length > 0 && (
            <ul className="mb-4 space-y-1.5 text-sm text-gray-300">
              {highlights.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}

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
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className={gradientButton}
                aria-label={`Open live demo of ${title}`}
              >
                Live Demo
              </a>
            )}
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className={demoLink ? outlineButton : gradientButton}
              aria-label={`View source code for ${title}`}
            >
              View Code
            </a>
          </div>
        </div>
      </article>
    </SpotlightCard>
  );
}

export default ProjectCard;
