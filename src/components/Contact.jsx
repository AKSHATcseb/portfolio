import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-10 relative py-28 bg-slate-950 text-white px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-50 -right-50 w-125 h-125 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Get In{" "}
            <span className="bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Have an opportunity or collaboration in mind? Let’s connect and build something impactful.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <a
              href="mailto:akshatindia2011@gmail.com"
              className="flex items-center gap-4 p-6 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-indigo-500 transition"
            >
              <Mail className="text-indigo-400" />
              <div>
                <p className="text-slate-300 font-medium">Email</p>
                <p className="text-slate-500 text-sm break-all">
                  akshatindia2011@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/akshat-akshat-0524b32b1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-indigo-500 transition"
            >
              <Linkedin className="text-indigo-400" />
              <div>
                <p className="text-slate-300 font-medium">LinkedIn</p>
                <p className="text-slate-500 text-sm">
                  Connect professionally
                </p>
              </div>
            </a>

            <a
              href="https://github.com/AKSHATcseb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-indigo-500 transition"
            >
              <Github className="text-indigo-400" />
              <div>
                <p className="text-slate-300 font-medium">GitHub</p>
                <p className="text-slate-500 text-sm">
                  View repositories
                </p>
              </div>
            </a>

          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 bg-slate-900/60 border border-slate-800 p-8 rounded-2xl"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-indigo-500 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-indigo-500 transition"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:border-indigo-500 transition"
            ></textarea>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 font-semibold hover:scale-[1.02] transition shadow-lg shadow-indigo-500/20"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}