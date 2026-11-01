import SplitText from '../ReactBits/TextAnimations/SplitText/SplitText';
import Threads from '../ReactBits/Backgrounds/Threads/Threads';

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
      </div>
    </div>
  );
}

export default HeroSection;
