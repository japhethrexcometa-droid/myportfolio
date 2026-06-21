"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const languageLogos = [
  { src: "/assets/languages/javascript.png", alt: "JavaScript logo" },
  { src: "/assets/languages/Typescript.png", alt: "TypeScript logo" },
  { src: "/assets/languages/react.png", alt: "React logo" },
  { src: "/assets/languages/next js.png", alt: "Next.js logo" },
  { src: "/assets/languages/node js.png", alt: "Node.js logo" },
  { src: "/assets/languages/python.png", alt: "Python logo" },
  { src: "/assets/languages/SQL.png", alt: "SQL logo" },
  { src: "/assets/languages/mongodb.png", alt: "MongoDB logo" },
  { src: "/assets/languages/git.png", alt: "Git logo" },
  { src: "/assets/languages/tailwind.jpg", alt: "Tailwind CSS logo" },
  { src: "/assets/languages/aws.webp", alt: "AWS logo" },
];

export default function AnimatedGlobe() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleImageError = (src: string) => {
    setImageErrors(prev => new Set(prev).add(src));
  };

  // Simplified for mobile - use fewer logos
  const displayLogos = isMobile ? languageLogos.slice(0, 6) : languageLogos;
  
  // Filter out images that failed to load
  const validLogos = displayLogos.filter(logo => !imageErrors.has(logo.src));
  
  // Split logos into 2 rings for counter-rotation effect
  const outerRing = validLogos.slice(0, Math.ceil(validLogos.length / 2));
  const innerRing = validLogos.slice(Math.ceil(validLogos.length / 2));

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      {/* Central Globe */}
      <motion.div
        className="relative w-32 h-32 md:w-48 md:h-48"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: isMobile ? 30 : 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-800 rounded-full shadow-2xl">
          <div className="absolute inset-2 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full opacity-50"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-teal-300 to-teal-500 rounded-full opacity-30"></div>
        </div>
      </motion.div>

      {/* Outer Ring - Clockwise */}
      <motion.div
        className="absolute w-56 h-56 md:w-80 md:h-80"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: isMobile ? 35 : 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {outerRing.map((logo, index) => {
          const angle = (index / outerRing.length) * 360;
          const radius = isMobile ? 100 : 140; // Distance from center
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          const size = isMobile ? 10 : 12;

          return (
            <motion.div
              key={logo.src}
              className="absolute"
              style={{
                width: `${size}rem`,
                height: `${size}rem`,
                left: `calc(50% + ${x}px - ${size * 8}px)`,
                top: `calc(50% + ${y}px - ${size * 8}px)`,
              }}
              animate={{
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  loading="lazy"
                  onError={() => handleImageError(logo.src)}
                />
                <motion.div
                  className="absolute inset-0 bg-teal-500 rounded-full opacity-0 blur-md"
                  animate={{
                    opacity: isHovered ? 0.5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Inner Ring - Counter-Clockwise */}
      <motion.div
        className="absolute w-40 h-40 md:w-64 md:h-64"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: isMobile ? 25 : 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {innerRing.map((logo, index) => {
          const angle = (index / innerRing.length) * 360;
          const radius = isMobile ? 70 : 100; // Distance from center
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          const size = isMobile ? 8 : 10;

          return (
            <motion.div
              key={logo.src}
              className="absolute"
              style={{
                width: `${size}rem`,
                height: `${size}rem`,
                left: `calc(50% + ${x}px - ${size * 8}px)`,
                top: `calc(50% + ${y}px - ${size * 8}px)`,
              }}
              animate={{
                scale: isHovered ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  loading="lazy"
                  onError={() => handleImageError(logo.src)}
                />
                <motion.div
                  className="absolute inset-0 bg-purple-500 rounded-full opacity-0 blur-md"
                  animate={{
                    opacity: isHovered ? 0.5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
