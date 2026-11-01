import { gradientButton, sectionHeading, sectionUnderline } from '../ui';

function AboutSection() {
  return (
    <div className="container mx-auto px-6">
      <h2 className={sectionHeading}>About Me</h2>
      <div className={sectionUnderline} aria-hidden="true" />

      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/profile.webp"
            alt="Illustration: a laptop plus coffee equals code"
            width={640}
            height={640}
            loading="lazy"
            decoding="async"
            className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-3xl"
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 w-full">
          <p className="text-lg text-gray-200 mb-6">
            Hello! I&apos;m a passionate and detail-oriented web developer with a strong focus on
            creating seamless, user-friendly, and visually engaging applications. My core expertise
            lies in JavaScript, modern frontend and backend technologies, and building scalable web
            solutions. Whether it&apos;s building robust backends or designing intuitive UIs, I strive
            to deliver quality and performance in every project I take on.
          </p>
          <p className="text-lg text-gray-200 mb-8">
            When I&apos;m not immersed in code, you&apos;ll likely find me exploring new tech trends or
            enjoying the outdoors.
          </p>
          <p className="mb-6 text-lg font-semibold text-white">
            Explore articles, project case studies, and insights from my journey as a developer.
          </p>
          <a
            href="https://medium.com/@abhishekghadge900"
            target="_blank"
            rel="noopener noreferrer"
            className={gradientButton}
          >
            Read my blog
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
