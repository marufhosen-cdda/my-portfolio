export interface PersonalInfo {
  name: string;
  phone: string;
  email: string;
  image: string;
  location: string;
  github: string[];
  linkedin: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  features: string[];
  tech: string[];
  link: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  research?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Maruf Hosen",
  phone: "+880 1716250651",
  image: "/maruf-hosen.jpg",
  email: "marufislam319@gmail.com",
  location: "Aftabnagar, Dhaka-1212, Bangladesh",
  github: ["https://github.com/marufhosen", "https://github.com/marufhosen-cdda"],
  linkedin: "https://www.linkedin.com/in/maruf-hosen-239028179",
};

export const summary = `I build scalable marketplace and SaaS platforms with a strong focus on real-world business impact. Over the past 4+ years, I’ve worked closely with a US-based multi-tenant real estate marketplace, contributing across different phases of its growth—from early product development to scaling infrastructure for a growing user base.
My journey started with hands-on frontend engineering, but quickly evolved into owning larger parts of the system, including architecture decisions, performance optimization, and cross-team collaboration. I initially worked directly with Property Source and later continued contributing to the same platform through CDDA as it became a client engagement—ensuring continuity, domain expertise, and long-term system stability.
I specialize in designing multi-tenant SaaS systems and marketplace architectures that are not just technically sound, but also business-ready and scalable. My core strengths include building high-performance web applications, working with PostgreSQL-backed systems, leveraging Cloudflare edge infrastructure, and aligning engineering decisions with product and growth goals.
Beyond code, I focus on creating systems that founders can confidently scale, teams can maintain efficiently, and users can rely on seamlessly.
`;

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Software Engineer",
    company: "Cloud Development & Data Analytics",
    location: "Aftabnagar",
    startDate: "Jun 2024",
    endDate: "Present",
    description: "Building dynamic UI systems and scalable solutions",
    responsibilities: [
      "Build dynamic, customizable UI systems",
      "Develop scalable multi-tenant solutions",
      "Collaborate with backend & product teams",
      "Lead and mentor frontend developers",
    ],
  },
  {
    id: "2",
    title: "Frontend Engineer",
    company: "Property Source Global Marketplace Platform",
    location: "USA",
    startDate: "Jun 2022",
    endDate: "May 2024",
    description: "Designed and built marketplace UI for global real estate",
    responsibilities: [
      "Designed and built marketplace UI",
      "Integrated APIs and third-party services",
      "Developed multi-tenant architecture",
      "Planned features based on business needs",
      "Built responsive UI using Next.js",
    ],
  },
  {
    id: "3",
    title: "Web Developer Intern",
    company: "EulerHub",
    location: "Dhaka",
    startDate: "Sep 2021",
    endDate: "Jan 2022",
    description: "Built reusable UI components and optimized designs",
    responsibilities: [
      "Worked with development team",
      "Built reusable UI components",
      "Optimized designs for mobile",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    name: "Property Source Exchange",
    description:
      "Multi-tenant global real estate marketplace with listings, auctions, and management.",
    features: [
      "Multi-tenancy (workspace-based)",
      "Property listing system",
      "Auction & bidding system",
      "Role-based access control",
    ],
    tech: [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind",
      "shadcn/ui",
      "Cloudflare Workers",
      "JWT auth",
      "Formik",
      "Yup",
      "Resend",
      "Twilio",
    ],
    link: "https://app.propertysource.app",
  },
  {
    id: "2",
    name: "Trackra",
    description:
      "Business management platform for sales, inventory, finance, and customers.",
    features: [
      "Role-based authentication",
      "Inventory & sales tracking",
      "Revenue/expense tracking",
      "Customizable UI",
    ],
    tech: [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind",
      "Radix UI",
      "React Hook Form",
      "Zod",
      "Recharts",
    ],
    link: "https://trackra.vercel.app",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Core",
    skills: ["TypeScript", "React.js / Next.js", "Tailwind CSS", "Hono", "NestJS", "MongoDB", "PostgreSQL", "Redux"],
  },
  {
    name: "Other",
    skills: ["Git", "Docker", "Cloudflare"],
  },
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Bachelor of Computer Science & Engineering",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    startDate: "2017",
    endDate: "2021",
    gpa: "3.30",
    research: "Providing Real-Time Security Using Face Recognition",
  },
  {
    id: "2",
    degree: "Higher Secondary",
    institution: "Sristy College of Tangail",
    location: "Tangail, Bangladesh",
    startDate: "2014",
    endDate: "2016",
    gpa: "4.83",
  },
];

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
