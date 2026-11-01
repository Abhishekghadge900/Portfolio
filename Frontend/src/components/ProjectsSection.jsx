import ProjectCard from './ProjectCard';
import { sectionHeading, sectionUnderline } from '../ui';

const PROJECTS = [
  {
    id: 'studynotion',
    title: 'StudyNotion',
    subtitle: 'MERN EdTech Platform',
    description:
      'A Udemy-like learning platform featuring role-based authentication (JWT/OTP), Cloudinary-hosted media, Razorpay integration, and responsive dashboards.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    codeLink: 'https://github.com/Abhishekghadge900/StudyNotion',
  },
  {
    id: 'homoheal',
    title: 'Homoheal',
    subtitle: 'ML-Based Disease Predictor',
    description:
      'Collaborated on a medical diagnostic tool powered by a decision tree model. I contributed to backend logic in Python and helped develop the UI using Streamlit.',
    technologies: ['Machine Learning', 'Python', 'Streamlit'],
    codeLink: 'https://github.com/Abhishekghadge900/Diseases_prediction',
  },
  {
    id: 'code-reviewer',
    title: 'Code Reviewer',
    subtitle: 'Automated Code Quality Tool',
    description:
      'A smart tool that analyzes code for potential bugs, styling issues, and best practices. Offers actionable suggestions for cleaner, maintainable code.',
    technologies: ['React', 'Express', 'Gemini API'],
    codeLink: 'https://github.com/Abhishekghadge900/Code_Reviewer',
  },
];

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
