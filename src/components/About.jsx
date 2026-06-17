import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10 shadow-xl">
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a passionate Computer Science Engineering student
            pursuing B.Tech (2027) with a strong interest in software
            development and modern web technologies.
          </p>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            My journey started with programming fundamentals and
            gradually expanded into Full Stack Development where I
            enjoy designing responsive user interfaces and building
            scalable backend systems.
          </p>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            I actively strengthen my expertise in Java, Data Structures
            & Algorithms, Object-Oriented Programming, Spring Boot,
            Databases, and Web Development.
          </p>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            I believe in continuous learning and consistently work on
            real-world projects that improve my problem-solving,
            software design, and development skills.
          </p>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            My long-term goal is to become a highly skilled Software
            Development Engineer and contribute to innovative products
            that positively impact users worldwide.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;