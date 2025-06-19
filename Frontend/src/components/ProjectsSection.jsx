import ProjectCard from './ProjectCard';

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'StudyNotion-MERN EdTech Platform📘',
      description: 'StudyNotion: A Udemy-like learning platform featuring role-based authentication (JWT/OTP), Cloudinary-hosted media, Razorpay integration, and responsive dashboards.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: 'placeholder-project-1.jpg',
      codeLink: 'https://github.com/Abhishekghadge900/StudyNotion'
    },
    {
      id: 2,
      title: 'Homoheal- ML-Based Disease Predictor🧬',
      description: 'Collaborated on a medical diagnostic tool powered by a decision tree model. I contributed to backend logic in Python and helped develop the UI using Streamlit.',
      technologies: ['ML','Python', 'Streamlit'],
      image: 'placeholder-project-2.jpg',
      codeLink: 'https://github.com/Abhishekghadge900/Diseases_prediction'
    },
    {
      id: 3,
      title: 'Code Reviewer-Automated Code Quality Tool🧑‍💻',
      description: 'A smart tool that analyzes code for potential bugs, styling issues, and best practices. Offers actionable suggestions for cleaner, maintainable code.',
      technologies: ['React', 'Express', 'gemini'],
      image: 'placeholder-project-3.jpg',
      codeLink: 'https://github.com/Abhishekghadge900/Code_Reviewer'
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 relative text-white">
        My Projects
        <div className="absolute w-20 h-1 bg-blue-600 bottom-0 left-1/2 transform -translate-x-1/2 -mb-4"></div>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;