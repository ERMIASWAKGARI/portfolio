import { FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";

export default function About() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="px-4 py-14 sm:px-6 sm:py-16 lg:px-16 bg-[var(--surface)]"
    >
      <motion.h2
        className="mx-auto max-w-6xl text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Me
      </motion.h2>

      <div className="mx-auto mt-8 flex max-w-6xl flex-col gap-7 lg:flex-row lg:items-stretch">
        <motion.div
          className="w-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow)] lg:w-[34%]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="mx-auto mb-4 h-36 w-36 overflow-hidden rounded-2xl border-4 border-teal-400/40 sm:h-40 sm:w-40">
            <img
              src="/my_pic_1.jpeg"
              alt="Ermias Wakgari"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-center text-xl font-semibold sm:text-2xl">
            Ermias Wakgari Yadeta
          </h3>
          <p className="mt-2 text-center text-sm text-[var(--muted)] sm:text-base">
            Software Engineer | Web Developer
          </p>

          <div className="mt-5 space-y-3 text-sm sm:text-base">
            <a
              href="mailto:ermiaswakgarisse5@gmail.com"
              className="block rounded-xl border border-[var(--border)] px-3 py-2 hover:border-teal-400"
            >
              ermiaswakgarisse5@gmail.com
            </a>
            <a
              href="tel:+251964495837"
              className="block rounded-xl border border-[var(--border)] px-3 py-2 hover:border-teal-400"
            >
              +251 964 495 837
            </a>
            <a
              href="tel:+251710745103"
              className="block rounded-xl border border-[var(--border)] px-3 py-2 hover:border-teal-400"
            >
              +251 710 745 103
            </a>
          </div>

          <SocialMediaIcons justify="center" size={5} />
        </motion.div>

        <motion.div
          className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow)] lg:w-[66%]"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base md:text-lg">
            Adaptable and results-oriented Software Engineering graduate with
            strong grounding in software architecture, system design, and
            cross-functional teamwork. I build and maintain scalable products,
            break down complex technical problems, and deliver code that stays
            reliable under pressure.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base md:text-lg">
            My core stack includes React, Node.js, Express.js, MongoDB,
            PostgreSQL, and MySQL, supported by solid foundations in OOP,
            algorithms, MVC, and CI/CD practices.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              "JavaScript / TypeScript",
              "Python",
              "Java",
              "C++",
              "PHP",
              "System Design",
            ].map((item) => (
              <span
                key={item}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-center text-xs font-medium sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="/Resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-400 sm:text-base"
              aria-label="Download CV"
            >
              <FaFilePdf className="mr-3" /> Download My CV
            </a>

            <div className="flex gap-6">
              <div>
                <h4 className="text-2xl font-semibold text-teal-600 dark:text-teal-300">
                  1+
                </h4>
                <p className="text-xs text-[var(--muted)] sm:text-sm">
                  Years Experience
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-teal-600 dark:text-teal-300">
                  10+
                </h4>
                <p className="text-xs text-[var(--muted)] sm:text-sm">
                  Projects Built
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
