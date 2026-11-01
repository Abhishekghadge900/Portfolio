// Project content for the Projects section. To update a project, edit it here.
//
// Fields:
//   id           unique slug, used as the React key
//   title        short project name
//   subtitle     one-line descriptor shown under the title
//   description  one or two sentences
//   highlights   3 short bullets: the problem, a technical challenge you solved,
//                and a result or lesson. (The current ones are placeholders.)
//   technologies tags shown as pills
//   image        screenshot path under Frontend/public/ (1200x675 recommended,
//                WebP preferred). Replace the placeholders in public/projects/.
//   imageAlt     describe what the screenshot shows
//   demoLink     live URL, or null to hide the "Live Demo" button
//   codeLink     GitHub repository URL

export const PROJECTS = [
  {
    id: 'studynotion',
    title: 'StudyNotion',
    subtitle: 'MERN EdTech Platform',
    description:
      'A Udemy-like learning platform featuring role-based authentication (JWT/OTP), Cloudinary-hosted media, Razorpay integration, and responsive dashboards.',
    highlights: [
      'Placeholder: describe the problem this project solves and who it is for.',
      'Placeholder: describe one technical challenge, e.g. securing the Razorpay webhook flow.',
      'Placeholder: describe a measurable result or what you would improve next.',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: '/projects/studynotion.webp',
    imageAlt: 'StudyNotion placeholder screenshot',
    demoLink: null, // e.g. 'https://studynotion-demo.vercel.app'
    codeLink: 'https://github.com/Abhishekghadge900/StudyNotion',
  },
  {
    id: 'homoheal',
    title: 'Homoheal',
    subtitle: 'ML-Based Disease Predictor',
    description:
      'Collaborated on a medical diagnostic tool powered by a decision tree model. I contributed to backend logic in Python and helped develop the UI using Streamlit.',
    highlights: [
      'Placeholder: describe the dataset and what the model predicts.',
      'Placeholder: describe one technical challenge, e.g. handling class imbalance.',
      'Placeholder: describe the accuracy achieved or how the team split the work.',
    ],
    technologies: ['Machine Learning', 'Python', 'Streamlit'],
    image: '/projects/homoheal.webp',
    imageAlt: 'Homoheal placeholder screenshot',
    demoLink: null, // e.g. 'https://homoheal.streamlit.app'
    codeLink: 'https://github.com/Abhishekghadge900/Diseases_prediction',
  },
  {
    id: 'code-reviewer',
    title: 'Code Reviewer',
    subtitle: 'Automated Code Quality Tool',
    description:
      'A smart tool that analyzes code for potential bugs, styling issues, and best practices. Offers actionable suggestions for cleaner, maintainable code.',
    highlights: [
      'Placeholder: describe what kind of code it reviews and the input format.',
      'Placeholder: describe one technical challenge, e.g. prompt design for the Gemini API.',
      'Placeholder: describe an example suggestion it produced or a limitation you hit.',
    ],
    technologies: ['React', 'Express', 'Gemini API'],
    image: '/projects/code-reviewer.webp',
    imageAlt: 'Code Reviewer placeholder screenshot',
    demoLink: null, // e.g. 'https://code-reviewer-demo.vercel.app'
    codeLink: 'https://github.com/Abhishekghadge900/Code_Reviewer',
  },
];
