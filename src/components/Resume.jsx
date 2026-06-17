import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section id="resume" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-12"
      >
        <h2 className="text-4xl font-bold mb-6">Resume</h2>

        <p className="text-gray-300 mb-8">
          Download my resume to view detailed information about my education,
          skills, and projects.
        </p>

        <a
          href="/resume.pdf"
          download
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition inline-block"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default Resume;