import SpotlightCard from "../ReactBits/Components/SpotlightCard/SpotlightCard";

function ProjectCard({ project }) {
    const { title, description, technologies, image, demoLink, codeLink } = project;
    
  
    return (
      <>
      <SpotlightCard className="custom-spotlight-card hover:shadow-xl/30" spotlightColor="rgba(0, 229, 255, 1)">
      <div className=" rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
        <div className="h-48  flex items-center justify-center text-white text-4xl">
          {title}
        </div>
        <div className="p-6">
          <p className=" mb-4 text-white">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className=" text-xs px-3 py-1 text-white rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a 
              href={codeLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
      </SpotlightCard>
      </>
    );
  }
  
  export default ProjectCard;