import SplitText from '../ReactBits/TextAnimations/SplitText/SplitText';
import Threads from '../ReactBits/Backgrounds/Threads/Threads';
import { gradientButton, outlineButton } from '../ui';
import { RESUME_PATH, RESUME_FILENAME } from '../data/site';

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

function HeroSection() {
  return (
    <div className="relative min-h-screen w-full bg-black flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Threads />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          <span className="block text-white">
            <span aria-hidden="true">👋 </span>Hi, I&apos;m
          </span>
          <span style={{ lineHeight: 1.2, overflow: 'visible', display: 'inline-block' }}>
            <SplitText
              text="Abhishek Ghadge"
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 inline-block"
              delay={50}
            />
          </span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6">Web Developer &amp; Designer</h2>
        <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-xl mx-auto">
          Crafting functional and aesthetic web experiences
        </p>

        {/* Calls to action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button type="button" onClick={() => scrollTo('projects')} className={gradientButton}>
            View Projects
          </button>
          <a href={RESUME_PATH} download={RESUME_FILENAME} className={outlineButton}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
            </svg>
            Download Resume
          </a>
          <button type="button" onClick={() => scrollTo('contact')} className="text-sm font-medium text-gray-300 hover:text-blue-400 transition cursor-pointer">
            Contact me
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
