import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Portfolio Website",
    tech: "React.js • CSS • JavaScript",
    description:
      "A responsive developer portfolio website showcasing skills, projects, and professional achievements.",
    features: [
      "Responsive UI",
      "Smooth Animations",
      "Project Showcase",
      "Contact Section",
    ],
  },
  {
    title: "Recipe Website",
    tech: "HTML • CSS • JavaScript",
    description:
      "A recipe web application featuring an attractive interface and organized recipe display.",
    features: [
      "Modern Design",
      "Responsive Layout",
      "Recipe Categories",
      "Interactive UI",
    ],
  },
  {
    title: "Product Catalog Website",
    tech: "HTML • CSS • JavaScript",
    description:
      "A responsive product listing website with modern user interface components.",
    features: [
      "Product Cards",
      "Responsive Design",
      "Modern Layout",
      "Interactive Components",
    ],
  },
  // {
  //   title: "Full Stack CRM Application",
  //   tech: "Coming Soon",
  //   description:
  //     "Future project focused on customer relationship management.",
  //   features: [
  //     "User Management",
  //     "Dashboard",
  //     "Authentication",
  //     "Database Integration",
  //   ],
  // },
  // {
  //   title: "Spring Boot Projects",
  //   tech: "Coming Soon",
  //   description:
  //     "Collection of backend applications built using Spring Boot.",
  //   features: [
  //     "REST APIs",
  //     "CRUD Operations",
  //     "Database Connectivity",
  //     "Security",
  //   ],
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          Projects
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-6 hover:border-purple-500 hover:-translate-y-3 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-cyan-400 mb-3">
                {project.tech}
              </p>

              <p className="text-gray-300 mb-5">
                {project.description}
              </p>

              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-gray-400"
                  >
                    • {feature}
                  </li>
                ))}
              </ul>

              <button className="mt-6 px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition">
                View Project
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;