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
    { icon: <FaReact color="#61DAFB" />, name: "React", level: 90 },
    { icon: <SiTypescript color="#3178C6" />, name: "TypeScript", level: 80 },
    { icon: <FaJs color="#F7DF1E" />, name: "JavaScript", level: 85 },
    {
      icon: <SiTailwindcss color="#38B2AC" />,
      name: "Tailwind CSS",
      level: 90,
    },
    { icon: <FaBootstrap color="#7952B3" />, name: "Bootstrap", level: 70 },
  ];

  const backEndTechs = [
    { icon: <FaNode color="#339933" />, name: "Node.js", level: 85 },
    { icon: <SiMongodb color="#47A248" />, name: "MongoDB", level: 80 },
    { icon: <SiMysql color="#4479A1" />, name: "MySQL", level: 75 },
    { icon: <FaPhp color="#777BB4" />, name: "PHP", level: 65 },
    { icon: <FaServer color="#6C757D" />, name: "Express.js", level: 80 },
  ];

  const renderTechList = (title, techs) => (
    <div className="flex flex-row items-center justify-center w-full space-y-6 gap-6">
      <motion.div
        className="text-left"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-4">
          {title}
        </h3>
        <div className="w-16 sm:w-full h-1 bg-teal-400 dark:bg-primary-light mb-4"></div>
      </motion.div>

      <div className="space-y-4">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <div className="flex items-center justify-center text-xl sm:text-2xl lg:text-3xl">
              {tech.icon}
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <p className="text-sm sm:text-base md:text-lg font-medium text-gray-800 dark:text-white">
                  {tech.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {tech.level}%
                </p>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-md mt-1">
                <div
                  className="h-full rounded-md"
                  style={{
                    width: `${tech.level}%`,
                    backgroundColor: tech.icon.props.color,
                  }}
                ></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="py-10 sm:py-20 px-4 sm:px-8 lg:px-16 bg-gray-50  dark:bg-[#001d3d]"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-neutral-white mb-4 sm:mb-8">
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
