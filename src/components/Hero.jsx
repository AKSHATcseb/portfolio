import { Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
  id="home"
  className="scroll-mt-24 relative min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 overflow-hidden"
>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-37.5 left-1/2 -translate-x-1/2 w-150 h-150 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-37.5 -right-37.5 w-100 h-100 bg-violet-500/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center mx-auto"
      >

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
  Hi, I'm
  <br />
  <span className="block text-5xl sm:text-6xl md:text-7xl 
  bg-linear-to-r from-indigo-400 to-violet-400 
  bg-clip-text text-transparent">
    AKSHAT
  </span>
</h1>

        {/* Typing Effect */}
        <div className="text-lg md:text-xl text-slate-300 mb-6">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1500,
              "AI Enthusiast",
              1500,
              "Problem Solver",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </div>

        {/* Description */}
        <p className="text-slate-400 mb-10 leading-relaxed">
          I design and build scalable web applications with a strong focus on
          performance, clean architecture, and modern technologies.
        </p>

        {/* Social Buttons */}
        <div className="flex justify-center gap-6 mt-8">

          {/* ================= MOBILE (Filled Circular) ================= */}
          <div className="flex gap-5 sm:hidden">

            {/* GitHub */}
            <a
              href="https://github.com/AKSHATcseb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center 
      rounded-full 
      bg-slate-800 
      text-white 
      transition-all duration-300 
      hover:scale-110 hover:bg-indigo-600"
            >
              <Github size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/akshat-akshat-0524b32b1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center 
      rounded-full 
      bg-blue-600 
      text-white 
      transition-all duration-300 
      hover:scale-110 hover:bg-blue-700"
            >
              <Linkedin size={20} />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/akshat.ak07"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center 
      rounded-full 
      bg-pink-600 
      text-white 
      transition-all duration-300 
      hover:scale-110 hover:bg-pink-700"
            >
              <Instagram size={20} />
            </a>

          </div>

          {/* ================= DESKTOP (Filled Pills) ================= */}
          <div className="hidden sm:flex gap-6">

            {/* GitHub */}
            <a
              href="https://github.com/AKSHATcseb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 rounded-xl 
      bg-slate-800 text-white
      transition-all duration-300 
      hover:-translate-y-1 hover:bg-indigo-600"
            >
              <Github size={18} />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/akshat-akshat-0524b32b1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 rounded-xl 
      bg-blue-600 text-white
      transition-all duration-300 
      hover:-translate-y-1 hover:bg-blue-700"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/akshat.ak07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3 rounded-xl 
      bg-pink-600 text-white
      transition-all duration-300 
      hover:-translate-y-1 hover:bg-pink-700"
            >
              <Instagram size={18} />
              Instagram
            </a>

          </div>

        </div>


        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce text-slate-500 text-xl">
          ↓
        </div>

      </motion.div>
    </section>
  );
}