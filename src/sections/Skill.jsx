import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaBootstrap,
  FaNode,
  FaPhp,
  FaServer,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const Skill = () => {
  const frontEndTechs = [
    { icon: <FaReact color="#61DAFB" />, name: "React" },
    { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
    { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiTailwindcss color="#38B2AC" />, name: "Tailwind CSS" },
    { icon: <FaBootstrap color="#7952B3" />, name: "Bootstrap" },
  ];

  const backEndTechs = [
    { icon: <FaNode color="#339933" />, name: "Node.js" },
    { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    { icon: <SiMysql color="#4479A1" />, name: "MySQL" },
    { icon: <FaPhp color="#777BB4" />, name: "PHP" },
    { icon: <FaServer color="#6C757D" />, name: "Express.js" },
  ];

  const renderTechList = (title, techs) => (
    <div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          {title}
        </h3>
      </motion.div>
      <motion.div
        className="flex flex-wrap justify-center gap-6 lg:gap-8"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ staggerChildren: 0.1, duration: 0.4 }}
      >
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center gap-4"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <div
              className="text-4xl lg:text-5xl p-4 rounded-full"
              style={{
                backgroundColor: tech.icon.props.color + "33", // Add transparency for a subtle background
              }}
            >
              {tech.icon}
            </div>
            <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800 dark:text-teal-400">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-10 sm:py-20 px-4 sm:px-8 lg:px-16 bg-gray-50 dark:bg-[#001d3d]"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-6 sm:mb-12">
          Skills
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-center text-secondary-dark dark:text-secondary-light mb-8 sm:mb-16">
          Over the years, I have honed my skills in these technologies.
        </p>
        <div className="flex flex-col lg:flex-row lg:space-x-12 space-y-12 lg:space-y-0">
          <div className="flex-1">
            {renderTechList("Frontend", frontEndTechs)}
          </div>
          <div className="flex-1">
            {renderTechList("Backend", backEndTechs)}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skill;
