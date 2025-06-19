import StackIcon from "tech-stack-icons";

function SkillsSection() {
  const items = [
    { icon: <StackIcon name="html5" />, color: 'orange', label: 'HTML5' },
    { icon: <StackIcon name="css3" />, color: 'blue', label: 'CSS3' },
    { icon: <StackIcon name="js" />, color: 'yellow', label: 'JavaScript' },
    { icon: <StackIcon name="react" />, color: 'cyan', label: 'React' },
    { icon: <StackIcon name="nodejs" />, color: 'green', label: 'Node.js' },
    { icon: <StackIcon name="mongodb" />, color: 'green', label: 'MongoDB' },
    { icon: <StackIcon name="git" />, color: 'red', label: 'Git' },
    { icon: (
      <span className="bg-white">
        <StackIcon name="github" />
      </span>
    ), color: 'black', label: 'GitHub' },
    { icon: <StackIcon name="mysql" />, color: 'black', label: 'Mysql' },
    { icon: <StackIcon name="postman" />, color: 'black', label: 'postman' },
    {
      icon: (
        <span className="flex items-center justify-center bg-white rounded-full p-3">
          <StackIcon name="expressjs" />
        </span>
      ),
      color: 'black',
      label: 'Express.js'
    },
    {icon: <StackIcon name="tailwindcss" />, label: 'Tailwind CSS', color: 'skyblue' },
    {icon: <StackIcon name="python" />, label: 'python', color: 'purple' },
    {icon: <StackIcon name="c++" />, label: 'c++', color: 'black' },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-black px-4 sm:px-6 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 relative text-white">
        My Skills
        <div className="absolute w-20 h-1 bg-blue-600 bottom-0 left-1/2 transform -translate-x-1/2 -mb-4"></div>
      </h2>

      <div className="w-full max-w-5xl">
        <p className="text-base sm:text-lg text-white text-center mb-12">
          I've worked with a variety of technologies and frameworks in web development.
          Here are some of my key technical skills:
        </p>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8"
          style={{ minHeight: '400px' }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl mb-2 flex items-center justify-center" style={{ color: item.color }}>
                {item.icon}
              </div>
              <span className="text-white text-sm sm:text-base md:text-lg font-semibold text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;