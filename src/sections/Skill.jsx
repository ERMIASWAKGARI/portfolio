import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaBootstrap,
  FaNode,
  FaHtml5,
  FaPhp,
  FaServer,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import TechCard from "../components/TechCard"; // Import the new component

const Skill = () => {
  const frontEndTechs = [
    {
      icon: (
        <FaReact className="text-xl sm:text-xl md:text-3xl lg:text-4xl text-teal-500" />
      ),
      name: "React",
      level: 90,
    },
    {
      icon: (
        <SiTypescript className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-blue-500" />
      ),
      name: "TypeScript",
      level: 80,
    },
    {
      icon: (
        <FaJs className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-yellow-500" />
      ),
      name: "JavaScript",
      level: 85,
    },
    {
      icon: (
        <FaCss3Alt className="text-xl sm:text-xl md:text-3xl lg:text-4xl text-blue-600" />
      ),
      name: "CSS",
      level: 75,
    },
    {
      icon: (
        <SiTailwindcss className="text-3xl sm:text-xl md:text-3xl lg:text-4xl text-teal-400" />
      ),
      name: "Tailwind CSS",
      level: 90,
    },
    {
      icon: (
        <FaBootstrap className="text-xl sm:text-xl md:text-3xl lg:text-4xl text-purple-600" />
      ),
      name: "Bootstrap",
      level: 70,
    },
    {
      icon: (
        <FaHtml5 className="text-xl sm:text-xl md:text-3xl lg:text-4xl text-orange-500" />
      ),
      name: "HTML",
      level: 95,
    },
  ];

  const backEndTechs = [
    {
      icon: (
        <FaNode className="text-3xl sm:text-xl md:text-3xl lg:text-4xl text-green-500" />
      ),
      name: "Node.js",
      level: 85,
    },
    {
      icon: (
        <SiMongodb className="text-3xl sm:text-xl md:text-3xl lg:text-4xl text-green-400" />
      ),
      name: "MongoDB",
      level: 80,
    },
    {
      icon: (
        <SiMysql className="text-3xl sm:text-xl md:text-3xl lg:text-4xl text-blue-600" />
      ),
      name: "MySQL",
      level: 75,
    },
    {
      icon: (
        <FaPhp className="text-3xl sm:text-xl md:text-3xl lg:text-4xl text-indigo-500" />
      ),
      name: "PHP",
      level: 65,
    },
    {
      icon: (
        <FaServer className="text-3xl sm:text-xl md:text-3xl lg:text-4xl text-gray-500" />
      ),
      name: "Express.js",
      level: 80,
    },
  ];

  const getProgressCircleColor = (level) => {
    if (level >= 90) return "stroke-teal-500";
    if (level >= 75) return "stroke-yellow-500";
    return "stroke-red-500";
  };

  return (
    <motion.section
      id="skills"
      className="py-20 px-8 sm:px-10 lg:px-20 bg-tertiary dark:bg-tertiary-dark"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }} // Initial state: hidden and moved down
      transition={{ duration: 0.6 }} // Duration of the animation
      viewport={{ once: false }} // Trigger animation every time it comes into view
    >
      {/* Title Section */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-neutral-white mb-10 sm:mb-16">
        Skills
      </h2>
      <div className="mt-8 flex flex-col lg:flex-row lg:space-x-12 space-y-12 lg:space-y-0">
        {/* Front-End Technologies */}
        <motion.div
          className="lg:w-1/2"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }} // Initial state: hidden and moved down
          transition={{ delay: 0.2, duration: 0.5 }} // Animate front-end section
          viewport={{ once: false }} // Trigger animation every time it comes into view
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white mb-10 text-center">
            Front-End Technologies
          </h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {frontEndTechs.map((tech, index) => (
              <TechCard
                key={index}
                tech={tech}
                index={index}
                getProgressCircleColor={getProgressCircleColor}
              />
            ))}
          </div>
        </motion.div>

        {/* Back-End Technologies */}
        <motion.div
          className="lg:w-1/2"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }} // Initial state: hidden and moved down
          transition={{ delay: 0.4, duration: 0.5 }} // Animate back-end section
          viewport={{ once: false }} // Trigger animation every time it comes into view
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white mb-10 text-center">
            Back-End Technologies
          </h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {backEndTechs.map((tech, index) => (
              <TechCard
                key={index}
                tech={tech}
                index={index}
                getProgressCircleColor={getProgressCircleColor}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skill;
