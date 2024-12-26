/* eslint-disable react/prop-types */
/* src/components/TechCard.js */
import { motion } from "framer-motion";

const TechCard = ({ tech, index, getProgressCircleColor }) => {
  return (
    <motion.div
      key={index}
      className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
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
        <p className="mt-2 text-sm sm:text-base md:text-lg font-medium text-gray-800 dark:text-gray-200 text-center">
          {tech.name}
        </p>
      </div>
    </motion.div>
  );
};

export default TechCard;
