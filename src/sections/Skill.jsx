import { motion } from "framer-motion";
import { FaReact, FaJs, FaNode, FaPhp, FaJava, FaPython } from "react-icons/fa";
import {
  SiCplusplus,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const Skill = () => {
  const skillGroups = [
    {
      title: "Languages",
      items: [
        { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
        { icon: <SiTypescript color="#3178C6" />, name: "TypeScript" },
        { icon: <FaPython color="#3776AB" />, name: "Python" },
        { icon: <FaJava color="#EA2D2E" />, name: "Java" },
        { icon: <SiCplusplus color="#00599C" />, name: "C++" },
        { icon: <FaPhp color="#777BB4" />, name: "PHP" },
      ],
    },
    {
      title: "Frameworks and Databases",
      items: [
        { icon: <FaReact color="#61DAFB" />, name: "React" },
        { icon: <FaNode color="#339933" />, name: "Node.js" },
        { icon: <SiExpress color="#6B7280" />, name: "Express.js" },
        { icon: <SiTailwindcss color="#38B2AC" />, name: "Tailwind CSS" },
        { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
        { icon: <SiPostgresql color="#336791" />, name: "PostgreSQL" },
        { icon: <SiMysql color="#4479A1" />, name: "MySQL" },
      ],
    },
  ];

  const renderTechList = (title, techs) => (
    <div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="mb-6 text-center text-xl font-semibold sm:text-2xl">
          {title}
        </h3>
      </motion.div>
      <motion.div
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ staggerChildren: 0.1, duration: 0.4 }}
      >
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4"
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <div
              className="text-3xl lg:text-4xl p-4 rounded-full"
              style={{
                backgroundColor: `${tech.icon.props.color}2E`,
              }}
            >
              {tech.icon}
            </div>
            <p className="text-center text-xs font-medium sm:text-sm md:text-base">
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
      className="bg-[var(--surface)] px-4 py-14 sm:px-6 sm:py-16 lg:px-16"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl text-center">
          Skills
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-[var(--muted)] sm:text-base md:text-lg">
          A practical mix of software fundamentals and hands-on full-stack
          technologies used in real projects.
        </p>
        <div className="mt-10 space-y-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              {renderTechList(group.title, group.items)}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skill;
