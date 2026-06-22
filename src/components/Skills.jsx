import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Programming",
    skills: ["Java", "JavaScript", "Python"],
  },
  {
    title: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "React.js",
      "Tailwind CSS",
      // "Responsive Design",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Java",
      "Spring Boot",
      "Node.js",
      "REST APIs",
    ],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB"],
  },
  // {
  //   title: "Tools",
  //   skills: [
  //     "Git",
  //     "GitHub",
  //     "VS Code",
  //     "IntelliJ IDEA",
  //   ],
  // },
  // {
  //   title: "Computer Science",
  //   skills: [
  //     "Data Structures & Algorithms",
  //     "Object-Oriented Programming",
  //     "DBMS",
  //     "Operating Systems",
  //   ],
  // },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-slate-800 px-3 py-2 rounded-lg text-sm"
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
};

export default Skills;