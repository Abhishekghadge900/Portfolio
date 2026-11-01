import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostman,
  SiPython,
  SiCplusplus,
} from 'react-icons/si';
import { sectionHeading, sectionUnderline } from '../ui';

// react-icons is tree-shaken per icon, so only these 14 ship in the bundle.
// Simple Icons are monochrome; colours are the official brand colours, with
// white for brands whose logo is black.
const SKILLS = [
  { Icon: SiHtml5, label: 'HTML5', color: '#E34F26' },
  { Icon: SiCss3, label: 'CSS3', color: '#1572B6' },
  { Icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
  { Icon: SiReact, label: 'React', color: '#61DAFB' },
  { Icon: SiNodedotjs, label: 'Node.js', color: '#5FA04E' },
  { Icon: SiExpress, label: 'Express.js', color: '#FFFFFF' },
  { Icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
  { Icon: SiMysql, label: 'MySQL', color: '#4479A1' },
  { Icon: SiTailwindcss, label: 'Tailwind CSS', color: '#06B6D4' },
  { Icon: SiGit, label: 'Git', color: '#F05032' },
  { Icon: SiGithub, label: 'GitHub', color: '#FFFFFF' },
  { Icon: SiPostman, label: 'Postman', color: '#FF6C37' },
  { Icon: SiPython, label: 'Python', color: '#3776AB' },
  { Icon: SiCplusplus, label: 'C++', color: '#00599C' },
];

function SkillsSection() {
  return (
    <div className="w-full flex flex-col items-center px-4 sm:px-6">
      <h2 className={sectionHeading}>My Skills</h2>
      <div className={sectionUnderline} aria-hidden="true" />

      <div className="w-full max-w-5xl">
        <p className="text-base sm:text-lg text-gray-200 text-center mb-12">
          I&apos;ve worked with a variety of technologies and frameworks in web development.
          Here are some of my key technical skills:
        </p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 list-none p-0">
          {SKILLS.map(({ Icon, label, color }) => (
            <li key={label} className="flex flex-col items-center">
              <div className="mb-3 flex items-center justify-center text-5xl sm:text-6xl" style={{ color }}>
                <Icon aria-hidden="true" title={label} />
              </div>
              <span className="text-white text-sm sm:text-base md:text-lg font-semibold text-center">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillsSection;
