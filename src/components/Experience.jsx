import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          Experience
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10"
        >
          <h3 className="text-3xl font-bold">
            Full Stack Web Development Intern
          </h3>

          <p className="text-cyan-400 mt-2 text-lg">
            Techwing 
          </p>

          <ul className="mt-6 space-y-4 text-gray-300">
            <li>
              • Building real-world web applications using modern technologies.
            </li>

            <li>
              • Developing responsive frontend interfaces for better user experience.
            </li>

            <li>
              • Working with backend technologies and databases.
            </li>

            <li>
              • Improving collaboration, problem-solving, and development practices.
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;