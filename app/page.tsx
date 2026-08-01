"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  ExternalLink, 
  Code2, 
  GraduationCap, 
  HeartPulse, 
  Terminal, 
  FolderGit2, 
  Sparkles,
  ArrowRight,
  Send
} from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <div className="portfolio-container relative bg-[#030712] text-slate-100 min-h-screen">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-500/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-teal-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#030712]/70 border-b border-slate-800/60">
        <nav className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-mono font-bold text-xl tracking-tight bg-gradient-to-r from-sky-400 via-indigo-400 to-teal-300 bg-clip-text text-transparent flex items-center gap-2">
            <Code2 className="text-sky-400" size={22} />
            &lt;Sunishka Pokala /&gt;
          </span>
          <div className="flex gap-6 text-sm font-medium text-slate-400">
            <a href="#home" className="hover:text-sky-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-sky-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 relative z-10 space-y-20">
        {/* Hero */}
        <motion.section
          id="home"
          className="pt-12 space-y-8 scroll-mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-semibold tracking-wide uppercase">
            <Sparkles size={14} /> Software Engineer
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Sunishka Pokala <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-teal-300 bg-clip-text text-transparent"></span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-5xl leading-relaxed">
            Computer Science graduate building full-stack applications, AI-powered tools, and scalable software solutions. <br />
            Passionate about building reliable software that solves real-world problems.
          </p>

          <div className="pt-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">Core Skillset</h3>
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: "Python", glow: "border-yellow-500/30 bg-yellow-500/5 text-yellow-300" },
                { name: "Next.js", glow: "border-sky-500/30 bg-sky-500/5 text-sky-300" },
                { name: "React", glow: "border-cyan-500/30 bg-cyan-500/5 text-cyan-300" },
                { name: "Node.js", glow: "border-emerald-500/30 bg-emerald-500/5 text-emerald-300" },
                { name: "TypeScript", glow: "border-blue-500/30 bg-blue-500/5 text-blue-300" },
                { name: "Tailwind CSS", glow: "border-teal-500/30 bg-teal-500/5 text-teal-300" },
                { name: "HTML/CSS", glow: "border-blue-500/30 bg-blue-500/5 text-blue-300" },

              ].map((skill) => (
                <span
                  key={skill.name}
                  className={`px-3.5 py-1.5 rounded-lg border text-xs font-medium tracking-wide transition-all duration-300 hover:scale-105 ${skill.glow}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        {/* About */}
        <motion.section
          id="about"
          className="p-8 md:p-10 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl space-y-6 text-slate-300 leading-relaxed text-base scroll-mt-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true}}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-widest font-semibold">
            <span>Computer Science • UC Irvine • Software Engineer</span>
          </div>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 tracking-tight">
          Hi there! I&apos;m a Software Engineer passionate about building scalable software, solving complex problems, and continuously learning new technologies.
        </h2>

        <p>
          I recently graduated from <strong className="text-slate-100">UC Irvine </strong>with a Bachelor's degree in Computer Science. I enjoy building reliable software across the stack, with a particular interest in backend systems, APIs, and the engineering decisions that make applications performant, maintainable, and scalable. Through my internships and personal projects, I&apos;ve worked on full-stack applications, backend services, and AI-driven solutions, strengthening my skills in software design, problem-solving, and building technology that delivers real value to users.
        </p>

        <p>
          I am currently working as a <strong className="text-slate-100">Technical Instructor</strong>, where I teach Python and software engineering fundamentals while mentoring aspiring developers. I also founded <strong className="text-slate-100">Begin With Python</strong>, an online learning platform that helps students develop practical programming skills through interactive lessons and real-world projects. Building software for real users has strengthened my ability to think beyond implementation—focusing on usability, reliability, and creating products that solve meaningful problems.
        </p>

        <p>
          I'm excited to begin my career as a full-time software engineer, where I can continue building scalable systems, collaborate with experienced teams, and grow as an engineer while creating software that makes a meaningful impact.
        </p>
        </motion.section>

        {/* Experience Section */}
        <section id="experience" className="space-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
            <p className="text-slate-400 text-sm mt-1">Building software through internships, engineering projects, and technical leadership.</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl hover:border-sky-500/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                <Terminal size={24} />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-amber-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full uppercase">
                    Begin with Python
              </span>
              <h3 className="text-2xl font-semibold text-slate-100">Founder and Lead Developer</h3>
              <h5> Jan 2025 - Present </h5>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                I started my technical journey writing Python logic. Overtime, I developed a deep understanding of data structures, algorithm efficiency, and clean backend execution before venturing into dynamic user interfaces.
                Founded Begin With Python, an online programming education platform that strengthened my experience in frontend development, integration, and responsive UI design.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl hover:border-sky-500/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                <Code2 size={24} />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full uppercase">
                    Coding Mind
              </span>
              <h3 className="text-2xl font-semibold text-slate-100">Technical Instructor</h3>
              <h5>Feb 2026 - Present</h5>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                As a Technical Instructor at Coding Mind, I mentor aspiring developers while working across Python, C++, JavaScript, and modern web technologies. 
                Helping students build real software reinforced my own understanding of software engineering fundamentals, debugging strategies, object-oriented design, and clean, maintainable code.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl hover:border-sky-500/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                <Terminal size={24} />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-amber-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full uppercase">
                    Gluki
              </span>
              <h3 className="text-2xl font-semibold text-slate-100">Software Engineering Intern</h3>
              <h5> Sep 2024 - Dec 2024 </h5>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                During my internship at Gluki, I worked on a Unity-based educational game designed to encourage healthy decision-making. I contributed to gameplay systems, backend services, and feature development while collaborating with engineers to create a polished, engaging user experience. 
                The experience strengthened my skills in full-stack software development, debugging, and delivering production-ready software.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl hover:border-sky-500/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4 group-hover:scale-110 transition-transform">
                <Code2 size={24} />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full uppercase">
                    UC Irvine
              </span>
              <h3 className="text-2xl font-semibold text-slate-100">Programming Lab Assistant</h3>
              <h5>Jan 2024 - Jun 2024</h5>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                As a lab assistant, I guided undergraduate students through Python programming labs, providing individualized support with debugging, algorithm design, and core computer science concepts. 
                Reinforced software engineering best practices while helping students build confidence in writing efficient, maintainable Python code and solving programming challenges independently.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Projects Section */}
        <section id="projects" className="space-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
            <p className="text-slate-400 text-sm mt-1">Key platforms built with modern technologies to solve real-world problems.</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* DegreePath  */}
            <motion.div 
              variants={fadeInUp}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-900/20 border border-slate-800 backdrop-blur-xl hover:border-sky-500/40 transition-all duration-500 hover:-translate-y-1 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <GraduationCap size={26} />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full uppercase">
                    Academic Tech
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">DegreePath</h3>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  DegreePath is a full-stack academic planning platform that helps students organize coursework, track degree progress, and explore personalized graduation plans. Built with Next.js, React, TypeScript, and Tailwind CSS, it features prerequisite-aware course planning, real-time tuition forecasting, and interactive schedule optimization through an intuitive user interface. 
                  The platform demonstrates scalable frontend architecture, algorithmic problem-solving, and responsive design to simplify long-term academic planning and decision-making.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["Next.js", "React", "TypeScript", "Node.js", "Tailwind"].map((t) => (
                    <span key={t} className="text-xs font-mono text-slate-300 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-8 pt-6 border-t border-slate-800/60">
                <a href="https://github.com/sunishkp/DegreePath" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-sky-400 transition-colors">
                  <FolderGit2 size={16} /> GitHub Repo
                </a>
                <a href="https://degreepath.netlify.app/" className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors">
                  <ExternalLink size={16} /> Live Application <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>

            {/* NutriRank Project */}
            <motion.div 
              variants={fadeInUp}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-900/20 border border-slate-800 backdrop-blur-xl hover:border-teal-500/40 transition-all duration-500 hover:-translate-y-1 shadow-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <HeartPulse size={26} />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2.5 py-1 rounded-full uppercase">
                    Health Engine
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-teal-300 transition-colors">NutriRank</h3>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                  NutriRank is an AI-powered nutrition assistant that helps users analyze meals, estimate nutritional information, and receive personalized dietary insights through a conversational interface. Built with FastAPI, React, PostgreSQL, and a locally hosted LLM, it combines semantic retrieval, intelligent intent recognition, and optimized backend performance to deliver fast, context-aware responses. 
                  The platform emphasizes scalable system design with features including conversation management, caching, authentication, and RAG over nutrition data.
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {["Python", "LLM", "PostgreSQL", "Fast API", "Next.js"].map((t) => (
                    <span key={t} className="text-xs font-mono text-slate-300 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 mt-8 pt-6 border-t border-slate-800/60">
                <a href="https://github.com/sunishkp/NutriRank" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-teal-400 transition-colors">
                  <FolderGit2 size={16} /> GitHub Repo
                </a>
              </div>
            </motion.div>
          </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          >

          {/* Unix Shell Project */}
          <motion.div
            variants={fadeInUp}
            className="group relative p-8 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-900/20 border border-slate-800 backdrop-blur-xl hover:border-sky-500/40 transition-all duration-500 hover:-translate-y-1 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Terminal size={26} />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-1 rounded-full uppercase">
                  Systems Project
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                Unix Shell
              </h3>

              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                Custom Unix shell implemented in C with support for process execution, command parsing, input/output redirection, and job control. Built low-level system functionality by interacting directly with operating system processes and resources.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {["C", "Unix", "System Calls", "Processes", "Shell Scripting"].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-slate-300 bg-slate-800/60 px-2.5 py-1 rounded-md border border-slate-700/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-8 pt-6 border-t border-slate-800/60">
              <a
                href="https://github.com/sunishkp/Custom-C-Shell"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-sky-400 transition-colors"
              >
                <FolderGit2 size={16} /> GitHub Repo
              </a>
            </div>
          </motion.div>
        </motion.div>
        </section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="text-center py-12 p-8 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950/40 border border-slate-800 backdrop-blur-xl relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />

          <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
          <p className="text-slate-400 text-sm max-w-3xl mx-auto mt-3">
            Feel free to reach out if you'd like to discuss software engineering opportunities, collaborate on a project, or simply connect.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href="mailto:psunishka@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 to-indigo-500 text-slate-950 font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-sky-500/20"
            >
              <Send size={16} /> Email
            </a>

            <a
              href="https://www.linkedin.com/in/sunishka-p"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-colors"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/sunishkp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-colors"
            >
              GitHub
            </a>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-slate-800/80 py-4 text-center text-xs text-slate-500 relative z-10">
        <p>© {new Date().getFullYear()} Sunishka's Personal Website. Built with Next.js, React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}