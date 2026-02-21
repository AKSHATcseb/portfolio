import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "C/C++", "JavaScript"],
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "Express.js", "Tailwind CSS", "REST APIs"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      title: "Core Concepts",
      skills: ["Data Structures & Algorithms", "OOP"],
    },
    {
      title: "Tools",
      skills: ["GitHub", "Postman", "Docker", "Selenium", "JIRA"],
    },
    {
      title: "Embedded Systems",
      skills: ["Arduino", "Raspberry Pi"],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-10 relative py-24 bg-slate-950 text-white px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-37.5 -left-37.5 w-125 h-125 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Technical <span className="bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-slate-400 mt-4">
            Technologies and tools I use to build scalable systems.
          </p>
        </motion.div>

        {/* Skill Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/60 backdrop-blur-lg border border-slate-800 rounded-2xl p-6 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-slate-800 border border-slate-700 rounded-lg hover:border-indigo-400 transition"
                  >
                    {skill}
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