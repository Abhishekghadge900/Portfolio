import SplitText from '../ReactBits/TextAnimations/SplitText/SplitText';
import Threads from '../ReactBits/Backgrounds/Threads/Threads';

function HeroSection() {
    return (
      <div className="relative min-h-screen min-w-full bg-black flex items-center justify-center">
        {/* Threads as background */}
        <div className="absolute inset-0 z-0">
          <Threads />
        </div>

        {/* Content on top */}
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <div className="text-white">👋 Hi, I'm</div>
            <span style={{ lineHeight: 1.2, overflow: "visible", display: "inline-block" }}>
              <SplitText
                text="Abhishek Ghadge"
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 inline-block"
                delay={50}
              />
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-6">Web Developer & Designer</h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-xl mx-auto">
            Crafting Functional & Aesthetic Web Experiences
          </p>
        </div>
      </div>
    );
}

export default HeroSection;