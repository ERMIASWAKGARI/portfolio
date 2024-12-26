/* eslint-disable react/prop-types */
/* src/components/TechCard.js */
import { motion } from "framer-motion";

const TechCard = ({ tech, positionIndex, totalItems }) => {
  const angle = (360 / totalItems) * positionIndex; // Calculate angle for circular layout
  const radius = 120; // Radius of the circle in pixels

  // Calculate position using trigonometry
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <motion.div
      style={{
        position: "absolute",
        transform: `translate(${x}px, ${y}px)`,
      }}
      className="flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`text-3xl lg:text-4xl ${tech.icon.props.className}`}
        style={{ color: tech.icon.props.color || "inherit" }} // Ensure the icon uses the desired color
      >
        {tech.icon}
      </div>
      <p className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
        {tech.name}
      </p>
    </motion.div>
  );
};

export default TechCard;
