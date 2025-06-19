import { useState } from "react";

function AboutSection() {
  const [blog, setblog] = useState(false);

  function handleblog() {
    setblog(true);
    window.open('https://medium.com/@abhishekghadge900', '_blank');
  }

  return (
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-16 relative text-white">
        About Me
        <div className="absolute w-20 h-1 bg-blue-600 bottom-0 left-1/2 transform -translate-x-1/2 -mb-4"></div>
      </h2>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Image Side */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/image.png"
            alt="profile"
            className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-3xl"
          />
        </div>
        {/* Text Side */}
        <div className="md:w-1/2 w-full">
          <p className="text-lg text-white mb-6">
            Hello! I'm a passionate and detail-oriented web developer with a strong focus on creating seamless, user-friendly, and visually engaging applications. My core expertise lies in JavaScript, modern frontend/backend technologies, and building scalable web solutions.
            Whether it's building robust backends or designing intuitive UIs, I strive to deliver quality and performance in every project I take on.
          </p>
          <p className="text-lg text-white mb-8">
            When I'm not immersed in code, you'll likely find me exploring new tech trends or enjoying the outdoors.
          </p>
          <div className="mb-8 space-y-3 text-lg text-white">
            <span className="font-semibold w-24">Explore articles, project case studies, and insights from my journey as a developer.</span>
          </div>
          <button
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 hover:cursor-pointer"
            onClick={handleblog}
          >
            BLOGS
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
