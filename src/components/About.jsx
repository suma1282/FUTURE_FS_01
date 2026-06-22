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
            I am a B.Tech Computer Science student and an aspiring 
            Full Stack Developer passionate about building responsive, 
            user-friendly, and efficient web applications.
          </p>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            🚀 Focus: Full Stack Web Development  
            🛠️ Tech Stack: Java | JavaScript | React | HTML5 | CSS3 | MySQL  
            </p>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            I enjoy transforming ideas into practical projects  
            I love learning new technologies, solving problems, 
            and building projects that improve my development skills.
          </p>

          {/* <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Let's connect! Feel free to explore my GitHub 
            or reach out through email.
            I believe in continuous learning and consistently work on
            real-world projects that improve my problem-solving,
            software design, and development skills.
          </p> */}

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            My long-term goal is to become a highly skilled Software
            Development Engineer and contribute to innovative products
            that positively impact users worldwide.
            Let's connect! Feel free to explore my GitHub 
            or reach out through email.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;