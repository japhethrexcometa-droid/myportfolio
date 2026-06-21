"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const languageLogos = [
  { src: "/assets/languages/javascript.png", alt: "JavaScript logo", name: "JavaScript" },
  { src: "/assets/languages/Typescript.png", alt: "TypeScript logo", name: "TypeScript" },
  { src: "/assets/languages/github.png", alt: "Github logo", name: "GitHub", className: "bg-white rounded-full" },
  { src: "/assets/languages/next js.png", alt: "Next.js logo", name: "Next.js", className: "bg-white rounded-full p-2" },
  { src: "/assets/languages/node js.png", alt: "Node.js logo", name: "Node.js" },
  { src: "/assets/languages/python.png", alt: "Python logo", name: "Python" },
  { src: "/assets/languages/SQL.png", alt: "SQL logo", name: "SQL" },
  { src: "/assets/languages/mongodb.png", alt: "MongoDB logo", name: "MongoDB" },
  { src: "/assets/languages/git.png", alt: "Git logo", name: "Git" },
  { src: "/assets/languages/tailwind.jpg", alt: "Tailwind CSS logo", name: "Tailwind CSS", className: "rounded-xl overflow-hidden" },
  { src: "/assets/languages/aws.webp", alt: "AWS logo", name: "AWS", className: "bg-white rounded-xl p-2" },
  { src: "/assets/languages/C++_Logo.svg.png", alt: "C++ logo", name: "C++" },
  { src: "/assets/languages/Csharp.png", alt: "C# logo", name: "C#" },
  { src: "/assets/languages/docker.png", alt: "Docker logo", name: "Docker" },
  { src: "/assets/languages/mysql.png", alt: "MySQL logo", name: "MySQL", className: "bg-white rounded-full p-2" },
  { src: "/assets/languages/php.png", alt: "PHP logo", name: "PHP" },
  { src: "/assets/languages/postgresql.png", alt: "PostgreSQL logo", name: "PostgreSQL" },
  { src: "/assets/languages/react js.png", alt: "React logo", name: "React" },
  { src: "/assets/languages/supabase.jpg", alt: "Supabase logo", name: "Supabase", className: "rounded-xl overflow-hidden" },
  { src: "/assets/languages/vercel.png", alt: "Vercel logo", name: "Vercel", className: "bg-white rounded-xl p-2" },
];

export default function AnimatedGlobe() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % languageLogos.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const currentLogo = languageLogos[currentIndex];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-white/50 to-transparent dark:from-gray-800/50 dark:to-transparent backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-xl p-8">
      
      {/* Decorative background glow */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <div className="w-64 h-64 bg-teal-400 rounded-full blur-[80px]"></div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 80, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -80, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Logo container */}
          <div className={`relative w-40 h-40 md:w-56 md:h-56 mb-8 drop-shadow-2xl ${currentLogo.className || ""}`}>
            <Image
              src={currentLogo.src}
              alt={currentLogo.alt}
              fill
              className="object-contain p-4"
              priority
            />
          </div>
          
          {/* Technology name */}
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-600 to-teal-800 dark:from-teal-400 dark:to-teal-200 bg-clip-text text-transparent"
          >
            {currentLogo.name}
          </motion.h3>
        </motion.div>
      </AnimatePresence>
      
      {/* Pagination dots */}
      <div className="absolute bottom-4 flex flex-wrap justify-center gap-1.5 max-w-[90%] z-10">
        {languageLogos.map((_, idx) => (
          <div 
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-6 bg-teal-600 dark:bg-teal-400" : "w-2 bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
