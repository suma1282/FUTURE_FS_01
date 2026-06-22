import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center relative z-10 max-w-4xl"
      >
        <h2 className="text-5xl md:text-5xl font-bold mb-5">
        👋 Hi I'm Bombothu Suma
        </h2>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "Java Developer",
            2000,
            // "Problem Solver",
            // 2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-cyan-400 text-2xl md:text-4xl font-semibold"
        />

        <p className="mt-8 text-gray-300 text-lg leading-relaxed">
          Building scalable web solutions while Turning ideas 
          into interactive web experiences with clean code, 
          creativity, and continuous learning.
        </p>

        <div className="mt-10 flex flex-wrap gap-5 justify-center">
          <a
            href="#projects"
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-7 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="px-7 py-3 rounded-xl border border-purple-500 hover:bg-purple-500 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;