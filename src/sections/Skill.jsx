// src/components/Skill.js
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
import { motion } from "framer-motion";

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
    <section
      id="skills"
      className="py-20 px-8 sm:px-10 lg:px-20 bg-tertiary dark:bg-tertiary-dark"
    >
      {/* Title Section */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-neutral-white mb-10 sm:mb-16">
        Skills
      </h2>
      <div className="mt-8 flex flex-col lg:flex-row lg:space-x-12 space-y-12 lg:space-y-0 ">
        {/* Front-End Technologies */}
        <div className="lg:w-1/2">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white mb-10 text-center">
            Front-End Technologies
          </h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {frontEndTechs.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="relative flex flex-col items-center justify-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-4 border-gray-200 dark:border-gray-700 flex items-center justify-center relative">
                    <svg
                      className="absolute"
                      width="100%"
                      height="100%"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="text-gray-200 dark:text-gray-600"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.8311"
                        strokeDasharray="100, 100"
                        strokeDashoffset="0"
                      />
                      <path
                        className={`${getProgressCircleColor(tech.level)}`}
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        style={{
                          strokeDasharray: `${tech.level}, 100`,
                          strokeDashoffset: `${100 - tech.level}`,
                        }}
                        d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.8311"
                      />
                    </svg>
                    <div className="z-10">{tech.icon}</div>
                  </div>
                  <p className="mt-2 text-sm md:text-base lg:text-lg font-medium text-gray-800 dark:text-gray-200 text-center">
                    {tech.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Back-End Technologies */}
        <div className="lg:w-1/2">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white mb-10 text-center">
            Back-End Technologies
          </h3>
          <div className="flex justify-center gap-8 flex-wrap">
            {backEndTechs.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="relative flex flex-col items-center justify-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-4 border-gray-200 dark:border-gray-700 flex items-center justify-center relative">
                    <svg
                      className="absolute"
                      width="100%"
                      height="100%"
                      viewBox="0 0 36 36"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="text-gray-200 dark:text-gray-600"
                        stroke="currentColor"
                        strokeWidth="1"
                        fill="none"
                        d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.8311"
                        strokeDasharray="100, 100"
                        strokeDashoffset="0"
                      />
                      <path
                        className={`${getProgressCircleColor(tech.level)}`}
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        style={{
                          strokeDasharray: `${tech.level}, 100`,
                          strokeDashoffset: `${100 - tech.level}`,
                        }}
                        d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.8311"
                      />
                    </svg>
                    <div className="z-10 text-center ">{tech.icon}</div>
                  </div>
                  <p className="mt-2 text-sm md:text-base lg:text-lg font-medium text-gray-800 dark:text-gray-200 text-center">
                    {tech.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
