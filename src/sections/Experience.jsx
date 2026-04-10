import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

const experience = {
  role: "Full Stack Developer Intern",
  company: "Debbal Softwares, Addis Ababa",
  period: "Feb 2024 - Aug 2024",
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative px-4 py-14 sm:px-6 sm:py-16 lg:px-16 bg-[var(--surface)]"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <motion.div
          className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-[var(--shadow)] sm:p-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-500/15 px-3 py-1 text-xs font-semibold text-teal-600 dark:text-teal-300">
              <FaLaptopCode /> Internship
            </span>
            <span className="text-sm text-[var(--muted)]">
              {experience.period}
            </span>
          </div>

          <h3 className="mt-4 text-xl font-semibold sm:text-2xl">
            {experience.role}
          </h3>
          <p className="mt-1 text-sm text-[var(--muted)] sm:text-base">
            {experience.company}
          </p>

          {/* <ul className="mt-5 space-y-3">
            {experience.highlights.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed sm:text-base"
              >
                <FaCodeBranch className="mt-1 shrink-0 text-teal-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul> */}
        </motion.div>
      </div>
    </section>
  );
}
