import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-10 relative py-28 bg-slate-950 text-white px-6 overflow-hidden">

      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-slate-400 text-lg leading-relaxed space-y-6"
        >
          <p>
            I am a Computer Science undergraduate at the Faculty of Technology,
            University of Delhi, specializing in Software Engineering.
            With a strong academic foundation (CGPA 8.02) and hands-on
            project experience, I focus on building scalable, efficient,
            and impactful software systems.
          </p>

          <p>
            My work spans full-stack development, AI-powered platforms,
            and cloud-integrated systems. I have built real-world applications
            including an AI-powered website builder, a healthcare platform
            leveraging generative AI, and a full-stack expense management app
            designed for optimized financial settlements.
          </p>

          <p>
            I am deeply interested in clean architecture, performance
            optimization, and solving complex engineering problems.
            Beyond web technologies, I also explore embedded systems and
            low-level design, combining both software and hardware perspectives.
          </p>

          <p>
            My goal is to engineer products that are not only technically sound
            but also meaningful, scalable, and user-centric.
          </p>
        </motion.div>

      </div>
    </section>
  );
}