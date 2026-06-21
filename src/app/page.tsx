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
  FileText,
  CheckCircle2,
  ArrowUp
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  { name: "JavaScript", icon: Code2, color: "text-yellow-500" },
  { name: "TypeScript", icon: Code2, color: "text-blue-600" },
  { name: "React", icon: Layout, color: "text-cyan-500" },
  { name: "Next.js", icon: Globe, color: "text-gray-100" },
  { name: "Node.js", icon: Server, color: "text-green-600" },
  { name: "Python", icon: Cpu, color: "text-blue-500" },
  { name: "SQL", icon: Database, color: "text-orange-600" },
  { name: "MongoDB", icon: Database, color: "text-green-500" },
  { name: "Git", icon: GitBranch, color: "text-red-600" },
  { name: "Tailwind CSS", icon: Layout, color: "text-cyan-400" },
  { name: "AWS", icon: Cloud, color: "text-orange-500" },
  { name: "Mobile Dev", icon: Smartphone, color: "text-purple-600" },
];

const projects = [
  {
    title: "Management Systems",
    description: "Built comprehensive management systems for businesses including inventory, employee, and project management solutions.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    icon: Server,
  },
  {
    title: "Capstone Projects",
    description: "Developed innovative capstone systems addressing real-world problems with modern technologies and best practices.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    icon: Globe,
  },
  {
    title: "Custom Web Applications",
    description: "Turn client imaginations into reality with bespoke web applications tailored to specific business needs.",
    technologies: ["React", "Python", "SQL", "Docker"],
    icon: Code2,
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
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent"
            >
              JRC
            </motion.div>
            <div className="flex space-x-8">
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">About</a>
              <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Contact</a>
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
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                  Japheth Rex Cometa
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                4th Year IT Student | Full Stack Developer
              </p>
              <p className="text-lg text-gray-800 dark:text-gray-100 mb-8 leading-relaxed">
                I turn your imagination into reality. Specializing in building management systems, 
                capstone projects, and custom web applications that help businesses thrive.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  <Mail className="mr-2 h-5 w-5" />
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button size="lg" variant="outline">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  <a href="#projects">View Projects</a>
                </Button>
                <Button size="lg" variant="outline">
                  <FileText className="mr-2 h-5 w-5" />
                  <a href="/myresume.pdf" target="_blank" rel="noopener noreferrer" download>
                    Resume
                  </a>
                </Button>
              </div>
              <div className="flex space-x-6 mt-8">
                <a href="https://linkedin.com/in/japhethrexcometa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com/japhethrexcometa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-900 transition-colors">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <Image
                  src="/assets/images/myimage.jpg"
                  alt="Japheth Rex Cometa"
                  fill
                  className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
              About Me
            </h2>
            <div className="max-w-3xl mx-auto">
              <Card className="border-2 border-gray-900 dark:border-gray-100 bg-gray-900 dark:bg-gray-800">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-200 leading-relaxed mb-6">
                    I&apos;m a passionate 4th-year Information Technology student with a strong foundation in 
                    full-stack development. My journey in tech has equipped me with the skills to build 
                    comprehensive management systems, innovative capstone projects, and custom web applications 
                    that solve real-world problems.
                  </p>
                  <p className="text-lg text-gray-200 leading-relaxed mb-6">
                    I believe in turning imagination into reality through clean, efficient, and scalable code. 
                    Whether it&apos;s a management system for a growing business or a capstone project that pushes 
                    the boundaries of what&apos;s possible, I&apos;m committed to delivering excellence.
                  </p>
                  <p className="text-lg text-gray-200 leading-relaxed">
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
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-center text-gray-800 dark:text-gray-200 mb-12 text-lg">
              Technologies I use to bring ideas to life
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-gray-900 dark:border-gray-100 bg-gray-900 dark:bg-gray-800">
                    <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                      <skill.icon className={`h-12 w-12 mb-3 ${skill.color}`} />
                      <h3 className="font-semibold text-white">{skill.name}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
              What I Build
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
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
                  <Card className="h-full hover:shadow-2xl transition-shadow duration-300 border-2 border-gray-900 dark:border-gray-100 bg-gray-900 dark:bg-gray-800">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center mb-4">
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-white">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-200 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-900 dark:text-teal-100 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
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
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Services
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
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
                  <div className="flex items-center space-x-3 p-4 bg-gray-900 dark:bg-gray-800 rounded-lg border border-gray-700 dark:border-gray-600">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-100">{service}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-center text-gray-800 dark:text-gray-100 mb-12 text-lg">
              Ready to turn your imagination into reality?
            </p>
            <div className="max-w-2xl mx-auto">
              <Card className="border-2 border-gray-900 dark:border-gray-100 bg-gray-900 dark:bg-gray-800">
                <CardContent className="p-8">
                  <div className="text-center">
                    <Mail className="h-16 w-16 mx-auto mb-6 text-teal-600" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Get In Touch
                    </h3>
                    <p className="text-gray-200 mb-6">
                      I&apos;m always excited to work on new projects and help bring your ideas to life. 
                      Reach out and let&apos;s discuss how we can work together.
                    </p>
                    <a 
                      href="mailto:japhethrex.cometa@msubuug.edu.ph"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-300 font-semibold"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      japhethrex.cometa@msubuug.edu.ph
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © 2024 Japheth Rex Cometa. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://linkedin.com/in/japhethrexcometa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-600 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/japhethrexcometa" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-teal-900 transition-colors">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-teal-600 text-white shadow-lg hover:bg-teal-700 transition-colors"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </main>
  );
}
