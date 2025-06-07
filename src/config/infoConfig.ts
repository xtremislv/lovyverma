export * from './projects'
export * from './friends'
export * from './education'
export * from './career'
export * from './activity'


// personal info
export const name = 'Lovy Verma'
export const headline = 'Machine Learning Engineer, Data Scientist, Software Engineer and Data Analyst.'
export const introduction = ` I'm an AI & Data Science enthusiast, Completed my B.Tech in Data Science & AI at IIT Bhilai. Passionate about Machine Learning, Deep Learning, and AI applications, I have worked on several projects, including document AI, medical AI, NLP, and computer vision.`
export const email = 'lovyverma1304@gmail.com'
export const githubUsername = 'xtremislv'

// about page
export const aboutMeHeadline = "Hi! I'm Lovy Verma, a Data Science and Artificial Intelligence graduate from IIT Bhilai"
export const aboutParagraphs = [
  "I thrive at the intersection of innovation and impact, working on cutting-edge AI research and real-time applications.",
  "Hailing from Kuchaman City, Rajasthan, I bring a creative spirit to everything I do—from tech to design to dance.",
  "Driven by curiosity and ambition, I aim to build technology that’s not just smart, but meaningful."
]


// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro = "I've written something about AI, programming and life."


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string,
  external?: boolean
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/LovyVerma2310',
    external: true
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/xtremislv',
    external: true
  },
  {
    name: 'Discord',
    icon: 'discord',
    href: 'https://discord.gg/gz4NTXCE',
    external: true
  },
  {
    name: 'Kaggle',
    icon: 'link',
    href: 'https://www.kaggle.com/lovyverma',
    external: true
  },
  {
    name: 'Linkedin',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/lovy-verma-b72067257/',
    external: true
  }
]

// https://simpleicons.org/
export const techIcons = [
  "python",
  "numpy",
  "pandas",
  "tensorflow",
  "java",
  "pytorch",
  "pyg",
  "react",
  "hugging face",
  "langchain",
  "mongodb",
  "postgresql",
  "scikit-learn",
  "scipy",
  "streamlit",
  "ollama",
  "google gemini",
  "openai",
  "selenium",
  "nginx",
  "inspire",
  "kaggle",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "ios",
  "apple",
  "node,js",
  "css",
  "html5",
  "django",
  "keras",
  "ultralytics"
];



