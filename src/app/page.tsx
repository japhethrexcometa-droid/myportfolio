"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Smartphone, 
  Cloud,
  GitBranch,
  Cpu,
  Globe,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  ArrowUp,
  Send,
  Facebook,
  ShieldCheck,
  Activity
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedGlobe from "@/components/AnimatedGlobe";

import { skills } from "@/lib/data";

const projects = [
  {
    title: "MSU-ZS ROTC Unit System (In Progress)",
    description: "Architected a robust Progressive Web App (PWA) management system engineered to streamline ROTC attendance, enrollment, and record-keeping via secure, real-time dynamic QR code scanning and role-based access control.",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    icon: ShieldCheck,
    demoUrl: "https://msu-zs-rotc-unit.vercel.app",
  },
  {
    title: "EcoDry System - IoT Monitoring (In Progress)",
    description: "Engineered an advanced web-based IoT monitoring platform integrating ESP32 hardware for real-time environmental data processing, automated shield control mechanisms, and scalable RBAC authentication.",
    technologies: ["Node.js", "Express", "SQLite3", "IoT"],
    icon: Activity,
    demoUrl: "https://eco-dry-one.vercel.app",
  },
  {
    title: "Lovey Dovey Custom Web App",
    description: "Designed and built a highly responsive, bespoke web application featuring a modern React stack, seamless Framer Motion animations, and enterprise-grade offline-ready PWA capabilities.",
    technologies: ["React", "Vite", "Framer Motion", "PWA"],
    icon: Smartphone,
    demoUrl: "https://lovey-dovey-five.vercel.app",
  },
];

const services = [
  "Full-stack web development",
  "Management system development",
  "Capstone project implementation",
  "Custom application development",
  "Database design and optimization",
  "API development and integration",
  "Responsive web design",
  "Cloud deployment and DevOps",
];

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-950 to-teal-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-700" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent"
              aria-label="JRC - Japheth Rex Cometa"
            >
              JRC
            </motion.div>
            <div className="flex items-center space-x-2 sm:space-x-8 text-xs sm:text-base overflow-x-auto whitespace-nowrap">
              <a href="#about" className="text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 rounded px-2 py-1">About</a>
              <a href="#skills" className="text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 rounded px-2 py-1">Skills</a>
              <a href="#projects" className="text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 rounded px-2 py-1">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 rounded px-2 py-1">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                  Japheth Rex Cometa
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                4th Year IT Student | Full Stack Developer
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I turn your imagination into reality. Specializing in building management systems, 
                capstone projects, and custom web applications that help businesses thrive.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-teal-600 hover:bg-teal-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:w-auto"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Mail className="mr-2 h-5 w-5" aria-hidden="true" />
                  Contact Me
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-teal-600 text-teal-400 hover:bg-teal-900/30 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full sm:w-auto"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <ExternalLink className="mr-2 h-5 w-5" aria-hidden="true" />
                  View Projects
                </Button>
                <a href="/Japheth_Rex_Cometa_Resume.html" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="bg-transparent border-teal-600 text-teal-400 hover:bg-teal-900/30 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full">
                    View Resume
                  </Button>
                </a>
              </div>
              <div className="flex space-x-6 mt-8">
                <a href="https://linkedin.com/in/japhethrexcometa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 rounded p-1" aria-label="LinkedIn Profile">
                  <Linkedin className="h-6 w-6" aria-hidden="true" />
                </a>
                <a href="https://github.com/japhethrexcometa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-900 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 rounded p-1" aria-label="GitHub Profile">
                  <Github className="h-6 w-6" aria-hidden="true" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 md:h-[500px]"
            >
              <AnimatedGlobe />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              About Me
            </h2>
            <div className="max-w-3xl mx-auto">
              <Card className="border-2 border-gray-700 bg-gray-800">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    I&apos;m a passionate 4th-year Information Technology student with a strong foundation in 
                    full-stack development. My journey in tech has equipped me with the skills to build 
                    comprehensive management systems, innovative capstone projects, and custom web applications 
                    that solve real-world problems.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    I believe in turning imagination into reality through clean, efficient, and scalable code. 
                    Whether it&apos;s a management system for a growing business or a capstone project that pushes 
                    the boundaries of what&apos;s possible, I&apos;m committed to delivering excellence.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    My approach combines technical expertise with a deep understanding of user needs, 
                    ensuring every project not only works flawlessly but also provides exceptional value.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-center text-gray-300 mb-12 text-lg">
              Technologies I use to bring ideas to life
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-gray-700 bg-gray-800">
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                      <div className={`shrink-0 w-16 h-16 mb-3 relative flex items-center justify-center ${skill.className || ""}`}>
                        <Image
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          fill
                          className={`object-contain ${(skill as any).imageClassName || ""}`}
                          loading="lazy"
                        />
                      </div>
                      <h3 className="font-semibold text-white">{skill.name}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Focus Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-white mb-4">
              Development Focus
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              Specializing in modern web and mobile development
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-2 border-gray-700 bg-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src="/assets/mobile & web dev/web dev.avif"
                        alt="Web Development"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Web Development</h3>
                    <p className="text-gray-300 text-justify">
                      Building responsive, scalable web applications using modern frameworks like React, Next.js, and Node.js. From simple landing pages to complex management systems.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-2 border-gray-700 bg-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden bg-white">
                      <Image
                        src="/assets/mobile & web dev/mobile dev.jpg"
                        alt="Mobile Development"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Mobile Development</h3>
                    <p className="text-gray-300 text-justify">
                      Creating cross-platform mobile applications that work seamlessly on iOS and Android. Using modern tools and frameworks to deliver native-like performance.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-white mb-4">
              What I Build
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              Turning your imagination into reality
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-gray-700 bg-gray-800">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center mb-4">
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4 text-justify">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-teal-900 text-teal-100 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
                        >
                          View Live Project
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-white mb-4">
              Services
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              What I can do for you
            </p>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg border border-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-300">{service}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-white mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-center text-gray-300 mb-12 text-lg">
              Ready to turn your imagination into reality?
            </p>

            {/* Social Links Section */}
            <div className="max-w-4xl mx-auto mt-16">
              <h3 className="text-2xl font-bold text-center text-white mb-8">
                Connect With Me
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <a 
                    href="https://t.me/japhethrexcometa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="border-2 border-gray-700 bg-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full flex flex-col justify-center">
                      <CardContent className="p-6 flex flex-col items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center">
                            <Send className="h-8 w-8 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2">Telegram</h4>
                          <p className="text-gray-300 text-sm">
                            @japhethrexcometa
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <a 
                    href="https://facebook.com/japhethrexcometa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <Card className="border-2 border-gray-700 bg-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full flex flex-col justify-center">
                      <CardContent className="p-6 flex flex-col items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                            <Facebook className="h-8 w-8 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2">Facebook</h4>
                          <p className="text-gray-300 text-sm">
                            Japheth Rex Cometa
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <a 
                    href="mailto:japhethrex.cometa@msubuug.edu.ph"
                    className="block h-full"
                  >
                    <Card className="border-2 border-gray-700 bg-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-300 h-full flex flex-col justify-center">
                      <CardContent className="p-6 flex flex-col items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
                            <Mail className="h-8 w-8 text-white" aria-hidden="true" />
                          </div>
                          <h4 className="text-xl font-bold text-white mb-2">Email</h4>
                          <p className="text-gray-300 text-xs md:text-sm lg:text-xs xl:text-sm mb-2 px-2">
                            japhethrex.cometa<wbr/>@msubuug.edu.ph
                          </p>
                          <p className="text-teal-600 dark:text-teal-400 text-xs">Click to send email</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Japheth Rex Cometa. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://linkedin.com/in/japhethrexcometa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-600 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/japhethrexcometa" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-900 transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </main>
  );
}
