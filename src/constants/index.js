import scoprireImage from "../assets/scoprire.png";
import recipiaImage from "../assets/recipia.png";
import mindwaveImage from "../assets/mindwave.png";
import newsImage from "../assets/news.png";
import sushimanImage from "../assets/sushiman.png";
import watchlineupImage from "../assets/watchlineup.png";
import tripImage from "../assets/trip.png";
import webNotesImage from "../assets/webnotes.png";
import nfnShopImage from "../assets/nfnshop.png";
import nfBlogImage from "../assets/nfblog.png";
import picolleryImage from "../assets/picollery.png";
import soSunnyImage from "../assets/sosunny.png";
import fixBugsImage from "../assets/fixbugs.png";
import packgoImage from "../assets/packgo.png";

import { RiGithubLine, RiLinkedinLine, RiTwitterXLine } from "react-icons/ri";
import { SiBun } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import {
  siJavascript,
  siTypescript,
  siPython,
  siReact,
  siNextdotjs,
  siAstro,
  siHtml5,
  siCss,
  siTailwindcss,
  siBootstrap,
  siDaisyui,
  siShadcnui,
  siExpo,
  siFigma,
  siVite,
  siNpm,
  siPostman,
  siNodedotjs,
  siExpress,
  siFastapi,
  siPostgresql,
  siMysql,
  siMongodb,
  siSupabase,
  siFirebase,
  siPrisma,
  siDrizzle,
  siMongoose,
  siLinux,
  siCloudflare,
  siDocker,
  siPortainer,
  siGithub,
  siGit,
  siTanstack,
  siClerk,
  siGsap,
  siThreedotjs,
  siRedux,
  siPhp,
  siContentful,
  siReactquery,
  siZod,
  siVercel,
  siVitest,
  siNetlify,
  siConvex,
} from "simple-icons";

export const links = [
  {
    label: "Home",
    path: "#home",
  },
  {
    label: "Work",
    path: "#work",
  },

  {
    label: "Experience",
    path: "#experience",
  },
  {
    label: "Services",
    path: "#services",
  },

  {
    label: "Contact",
    path: "#contact",
  },
];

export const works = [
   {
    name: "Scoprire",
    category: "API Driven",
    year: "2026",
    url: "https://scoprire.vernelon.com/",
    image: scoprireImage,
  },
  
  {
    name: "Recipia",
    category: "API Driven",
    year: "2025",
    url: "https://recipiafromtheweb.netlify.app/",
    image: recipiaImage,
  },
  {
    name: "Mindwave",
    category: "Landing Page",
    year: "2025",
    url: "https://mindwavebyniraj.netlify.app/",
    image: mindwaveImage,
  },

  {
    name: "PackGo",
    category: "Item Tracking App",
    year: "2025",
    url: "https://packgofromtheweb.netlify.app/",
    image: packgoImage,
  },
  {
    name: "NFN News",
    category: "API Driven",
    year: "2025",
    url: "https://nfnnews.netlify.app/",
    image: newsImage,
  },

  {
    name: "Watchlineup",
    category: "Tracking App",
    year: "2025",
    url: "https://watchlineup.vercel.app/",
    image: watchlineupImage,
  },
  {
    name: "Picollery",
    category: "API Driven",
    year: "2025",
    url: "https://picollery.netlify.app/",
    image: picolleryImage,
  },

  {
    name: "NFN Shop",
    category: "Full Stack App",
    year: "2025",
    url: "https://niersfeedblog.vercel.app/",
    image: nfBlogImage,
  },

  {
    name: "NFBlog",
    category: "Full Stack App",
    year: "2025",
    url: "https://nierfreshshop.vercel.app/",
    image: nfnShopImage,
  },
  {
    name: "Web Notes",
    category: "Note Taking App",
    year: "2025",
    url: "https://nierswebnotes.onrender.com/",
    image: webNotesImage,
  },
  {
    name: "Fix Bugs",
    category: "Bug Tracker",
    year: "2025",
    url: "https://nierfixbugs.vercel.app/",
    image: fixBugsImage,
  },

  {
    name: "Sushiman",
    category: "Landing Page",
    year: "2024",
    url: "https://nrjstarsushi.netlify.app/",
    image: sushimanImage,
  },
  {
    name: "So Sunny",
    category: "Weather App",
    year: "2023",
    url: "https://sosunnyv2.vercel.app/",
    image: soSunnyImage,
  },
  {
    name: "Trip",
    category: "Landing Page",
    year: "2023",
    url: "https://nrjstartrip.netlify.app/",
    image: tripImage,
  },
];

export const services = [
  {
    title: "Frontend Development",
    price: "Starts at $999",
    description:
      "I build modern, responsive, and high-performance frontend applications using React, Next.js, Tailwind CSS, and TypeScript.",
    features: [
      "Responsive web applications",
      "React + Next.js development",
      "Tailwind CSS styling",
      "API integration",
      "Reusable component architecture",
      "Performance optimization",
    ],
  },
  {
    title: "Landing Page Development",
    price: "Starts at $799",
    description:
      "Fast, clean, and conversion-focused landing pages built from existing designs, references, or wireframes.",
    features: [
      "Pixel-perfect implementation",
      "Mobile responsive layout",
      "Smooth animations & interactions",
      "SEO-friendly structure",
      "Fast loading performance",
      "Deployment support",
    ],
  },
  {
    title: "Web App Development",
    price: "Starts at $1,999",
    description:
      "Frontend-heavy web applications with authentication, dashboards, APIs, and scalable architecture.",
    features: [
      "Dashboard interfaces",
      "Authentication flows",
      "REST API integration",
      "State management",
      "Modern UI implementation",
      "Basic backend integration",
    ],
  },
  {
    title: "Basic Mobile Apps",
    price: "Starts at $1,499",
    description:
      "Cross-platform mobile applications with clean UI and essential backend functionality.",
    features: [
      "React Native development",
      "Android + iOS support",
      "API integration",
      "Authentication",
      "Responsive mobile UI",
      "App deployment assistance",
    ],
  },
];

export const stackItems = [
  // Frameworks and languages
  {
    name: "JavaScript",
    type: "simple-icons",
    icon: siJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    type: "simple-icons",
    icon: siTypescript,
    url: "https://www.typescriptlang.org",
  },
  {
    name: "Python",
    type: "simple-icons",
    icon: siPython,
    url: "https://www.python.org",
  },
  {
    name: "PHP",
    type: "simple-icons",
    icon: siPhp,
    url: "https://www.php.net/",
  },
  {
    name: "React",
    type: "simple-icons",
    icon: siReact,
    url: "https://react.dev",
  },
  {
    name: "Next.js",
    type: "simple-icons",
    icon: siNextdotjs,
    url: "https://nextjs.org",
  },
  {
    name: "Astro.js",
    type: "simple-icons",
    icon: siAstro,
    url: "https://astro.build",
  },
  {
    name: "TanStack",
    type: "simple-icons",
    icon: siTanstack,
    url: "https://tanstack.com",
  },
  {
    name: "Three.js",
    type: "simple-icons",
    icon: siThreedotjs,
    url: "https://threejs.org/",
  },

  // State management
  {
    name: "Redux",
    type: "simple-icons",
    icon: siRedux,
    url: "https://redux-toolkit.js.org/",
  },

  // Validation
  {
    name: "Zod",
    type: "simple-icons",
    icon: siZod,
    url: "https://zod.dev",
  },

  // UI libraries
  {
    name: "HTML",
    type: "simple-icons",
    icon: siHtml5,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    type: "simple-icons",
    icon: siCss,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Tailwind CSS",
    type: "simple-icons",
    icon: siTailwindcss,
    url: "https://tailwindcss.com",
  },
  {
    name: "Bootstrap",
    type: "simple-icons",
    icon: siBootstrap,
    url: "https://getbootstrap.com",
  },
  {
    name: "DaisyUI",
    type: "simple-icons",
    icon: siDaisyui,
    url: "https://daisyui.com",
  },
  {
    name: "ShadcnUI",
    type: "simple-icons",
    icon: siShadcnui,
    url: "https://ui.shadcn.com",
  },

  // Animation library
  {
    name: "GSAP",
    type: "simple-icons",
    icon: siGsap,
    url: "https://gsap.com",
  },

  {
    name: "Motion",
    type: "react-icons",
    icon: TbBrandFramerMotion,
    color: "#FFBF00",
    url: "https://motion.dev/",
  },

  // Mobile development
  {
    name: "React Native",
    type: "simple-icons",
    icon: siReact,
    url: "https://reactnative.dev",
  },
  {
    name: "Expo",
    type: "simple-icons",
    icon: siExpo,
    url: "https://expo.dev",
  },

  // Design tools
  {
    name: "Figma",
    type: "simple-icons",
    icon: siFigma,
    url: "https://figma.com",
  },

  // Build tools
  {
    name: "VSCode",
    type: "react-icons",
    icon: VscVscode,
    color: "#007ACC",
    url: "https://code.visualstudio.com",
  },

  {
    name: "Vite",
    type: "simple-icons",
    icon: siVite,
    url: "https://vitejs.dev",
  },
  {
    name: "Bun",
    type: "react-icons",
    icon: SiBun,
    color: "#FF8A9D",
    url: "https://bun.sh",
  },
  {
    name: "NPM",
    type: "simple-icons",
    icon: siNpm,
    url: "https://npmjs.com",
  },
  {
    name: "Postman",
    type: "simple-icons",
    icon: siPostman,
    url: "https://postman.com",
  },

  // Backend
  {
    name: "Node.js",
    type: "simple-icons",
    icon: siNodedotjs,
    url: "https://nodejs.org",
  },
  {
    name: "Express",
    type: "simple-icons",
    icon: siExpress,
    url: "https://expressjs.com",
  },
  {
    name: "Fast API",
    type: "simple-icons",
    icon: siFastapi,
    url: "https://fastapi.tiangolo.com",
  },

  // Auth
  {
    name: "Clerk",
    type: "simple-icons",
    icon: siClerk,
    url: "https://clerk.com",
  },

  // Database
  {
    name: "PostgreSQL",
    type: "simple-icons",
    icon: siPostgresql,
    url: "https://postgresql.org",
  },
  {
    name: "MySQL",
    type: "simple-icons",
    icon: siMysql,
    url: "https://mysql.com",
  },
  {
    name: "MongoDB",
    type: "simple-icons",
    icon: siMongodb,
    url: "https://mongodb.com",
  },
  {
    name: "Supabase",
    type: "simple-icons",
    icon: siSupabase,
    url: "https://supabase.com",
  },
  {
    name: "Firebase",
    type: "simple-icons",
    icon: siFirebase,
    url: "https://firebase.google.com",
  },

  {
    name: "Convex",
    type: "simple-icons",
    icon: siConvex,
    url: "https://www.convex.dev",
  },

  // API / Data fetching
  {
    name: "React Query",
    type: "simple-icons",
    icon: siReactquery,
    url: "https://tanstack.com/query/latest",
  },

  // Headless CMS
  {
    name: "Contentful",
    type: "simple-icons",
    icon: siContentful,
    url: "https://www.contentful.com/",
  },

  // ORM
  {
    name: "Prisma",
    type: "simple-icons",
    icon: siPrisma,
    url: "https://prisma.io",
  },
  {
    name: "Drizzle ORM",
    type: "simple-icons",
    icon: siDrizzle,
    url: "https://orm.drizzle.team",
  },
  {
    name: "Mongoose",
    type: "simple-icons",
    icon: siMongoose,
    url: "https://mongoosejs.com",
  },

  // Cloud / DevOps
  {
    name: "Linux",
    type: "simple-icons",
    icon: siLinux,
    url: "https://kernel.org",
  },
  {
    name: "Cloudflare",
    type: "simple-icons",
    icon: siCloudflare,
    url: "https://cloudflare.com",
  },
  {
    name: "Docker",
    type: "simple-icons",
    icon: siDocker,
    url: "https://docker.com",
  },
  {
    name: "Portainer",
    type: "simple-icons",
    icon: siPortainer,
    url: "https://portainer.io",
  },

  // Version control
  {
    name: "GitHub",
    type: "simple-icons",
    icon: siGithub,
    url: "https://github.com",
  },
  {
    name: "Git",
    type: "simple-icons",
    icon: siGit,
    url: "https://git-scm.com",
  },

  // Testing
  {
    name: "Vitest",
    type: "simple-icons",
    icon: siVitest,
    url: "https://vitest.dev",
  },

  // Deployment
  {
    name: "Vercel",
    type: "simple-icons",
    icon: siVercel,
    url: "https://vercel.com",
  },

  {
    name: "Netlify",
    type: "simple-icons",
    icon: siNetlify,
    url: "https://www.netlify.com/",
  },
];

export const experience = [
  {
    company: "Depth Nepal Pvt. Ltd.",
    role: "Front-End Developer",
    duration: "2025 - Present",
    detail:
      "Contributed to the frontend development of restaurant and property management SaaS platforms using React, TypeScript, and Next.js.",
  },
  {
    company: "Broadway Infosys",
    role: "Web Design Trainee",
    duration: "2022 - 2023",
    detail:
      "Completed professional web design and frontend development training focused on responsive design, and modern web development skills.",
  },

  {
    company: "Janjyoti Multiple Campus, Affiliated by Tribhuvan University",
    role: "Bachelor in Computer Application",
    duration: "2019 - 2023",
    detail:
      "Completed a Bachelor in Computer Application degree with a strong focus on web development, frontend technologies, and practical software development skills.",
  },
];

export const socials = [
  {
    name: "X",
    url: "https://x.com/itismeniraj",
    icon: RiTwitterXLine,
  },

  {
    name: "GitHub",
    url: "https://github.com/nierforprogramming",
    icon: RiGithubLine,
  },

  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/niraj-nepali-9407771bb",
    icon: RiLinkedinLine,
  },
];
