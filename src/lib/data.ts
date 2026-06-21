export interface Skill {
  name: string;
  logo: string;
  className?: string;
  imageClassName?: string;
}

export const skills: Skill[] = [
  { name: "JavaScript", logo: "/assets/languages/javascript.png", imageClassName: "scale-110" },
  { name: "TypeScript", logo: "/assets/languages/Typescript.png", imageClassName: "scale-[1.4]" },
  { name: "React", logo: "/assets/languages/react js.png", imageClassName: "scale-110" },
  { name: "Next.js", logo: "/assets/languages/next js.png" },
  { name: "Node.js", logo: "/assets/languages/node js.png", imageClassName: "scale-110" },
  { name: "Python", logo: "/assets/languages/python.png", imageClassName: "scale-125" },
  { name: "SQL", logo: "/assets/languages/SQL.png", imageClassName: "scale-125" },
  { name: "MongoDB", logo: "/assets/languages/mongodb.png", imageClassName: "scale-125" },
  { name: "Git", logo: "/assets/languages/git.png", imageClassName: "scale-110" },
  { name: "GitHub", logo: "/assets/languages/github.png" },
  { name: "Tailwind CSS", logo: "/assets/languages/tailwind.jpg" },
  { name: "AWS", logo: "/assets/languages/aws.webp", imageClassName: "scale-[1.7]" },
  { name: "C++", logo: "/assets/languages/C++_Logo.svg.png", imageClassName: "scale-110" },
  { name: "C#", logo: "/assets/languages/Csharp.png", imageClassName: "scale-110" },
  { name: "Docker", logo: "/assets/languages/docker.png", imageClassName: "scale-110" },
  { name: "MySQL", logo: "/assets/languages/mysql.png", imageClassName: "scale-[1.3]" },
  { name: "PHP", logo: "/assets/languages/php.png", imageClassName: "scale-125" },
  { name: "PostgreSQL", logo: "/assets/languages/postgresql.png", imageClassName: "scale-110" },
  { name: "Supabase", logo: "/assets/languages/supabase.jpg" },
  { name: "Vercel", logo: "/assets/languages/vercel.png" },
].map(skill => ({
  ...skill,
  // This guarantees EVERY SINGLE ICON gets the exact same pristine white rounded box
  className: "bg-white rounded-xl p-2 overflow-hidden shadow-sm"
}));
