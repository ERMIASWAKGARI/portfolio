import { motion } from "framer-motion";
import { FaGraduationCap, FaMedal } from "react-icons/fa";

const education = {
  degree: "Bachelor of Science in Software Engineering",
  university: "Jimma University",
  timeline: "Sep 2020 - June 2025",
  cgpa: "3.76",
  exitExam: "84%",
  courses: [
    "Algorithms",
    "Data Structures",
    "Computer Programming",
    "Networking",
    "Database Systems",
    "Software Architecture",
    "Distributed Systems",
  ],
};

export default function Education() {
  return (
    <section
      id="education"
      className="px-4 py-14 sm:px-6 sm:py-16 lg:px-16 bg-[var(--bg)]"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-[var(--shadow)] sm:p-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-300">
              <FaGraduationCap /> Degree
            </span>
            <span className="text-sm text-[var(--muted)]">
              {education.timeline}
            </span>
          </div>

          <h3 className="mt-4 text-xl font-semibold sm:text-2xl">
            {education.degree}
          </h3>
          <p className="mt-1 text-sm text-[var(--muted)] sm:text-base">
            {education.university}
          </p>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-[var(--border)] p-4">
              <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
                CGPA
              </p>
              <p className="mt-1 flex items-center gap-2 text-lg font-semibold">
                <FaMedal className="text-teal-500" /> {education.cgpa}
              </p>
            </div>
            <div className="rounded-xl border border-[var(--border)] p-4">
              <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
                Exit Exam
              </p>
              <p className="mt-1 text-lg font-semibold">{education.exitExam}</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">
              Relevant Coursework
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {education.courses.map((course) => (
                <span
                  key={course}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs sm:text-sm"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
