import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Persplit",
      description:
        "Built a full-stack expense management mobile application enabling real-time personal and group expense tracking, secure authentication, UPI/QR payments, multiple split methods, and optimized settlement cal culations for faster balance resolution.
      tech: ["Flutter", "MongoDB", "Express.js", "Node.js", "REST APIs"],
      link: "#",
    },
    // {
    //   title: "AI Website Builder",
    //   description:
    //     "An AI-powered platform allowing users to generate, edit, customize, and publish websites through natural language prompts.",
    //   tech: ["React", "Node.js", "Express.js", "PostgreSQL"],
    //   link: "https://github.com/AKSHATcseb/AI-website-Generator",
    // },
    {
      title: "HealthSetu",
      description:
        "Built a scalable healthcare platform tailored for dialysis patients, featuring real-time center availability, transparent pricing, and smart hospital recommendations, all backed by secure data handling and robust cloud infrastructure.",
      tech: ["ReactJS", "MongoDB", "Express.js", "Node.js", "REST APIs"],
      link: "https://dialysisportal.in/",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-10 relative py-28 bg-slate-950 text-white px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 mt-4">
            Selected work showcasing my expertise in full-stack and AI systems.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-slate-900/60 backdrop-blur-lg border border-slate-800 rounded-3xl p-10 hover:border-indigo-500 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
            >

              {/* Project Title */}
              <div className="flex justify-between items-start flex-wrap gap-4">
                <h3 className="text-2xl font-semibold text-indigo-400">
                  {project.title}
                </h3>

                <a
                  href={project.link}
                  target="_blank"
                  className="flex items-center gap-2 text-slate-400 group-hover:text-indigo-400 transition"
                >
                  View Project <ArrowUpRight size={18} />
                </a>
              </div>

              {/* Description */}
              <p className="text-slate-400 mt-6 leading-relaxed max-w-3xl">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mt-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 text-sm bg-slate-800 border border-slate-700 rounded-lg hover:border-indigo-400 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
