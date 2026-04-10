import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 lg:px-16 bg-[var(--bg)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-teal-400/15 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <motion.div
          className="mx-auto max-w-prose text-center lg:mx-0 lg:text-left"
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
          }}
          initial={{ opacity: 0, y: 28 }}
          viewport={{ once: true }}
        >
          <p className="inline-flex rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-teal-600 dark:text-teal-300">
            Software Engineer | Web Developer
          </p>

          <motion.h1
            className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut" },
            }}
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true }}
          >
            Ermias Wakgari Yadeta
            <span className="block bg-gradient-to-r from-teal-500 via-cyan-500 to-amber-500 bg-clip-text text-transparent">
              Building scalable products with clean engineering.
            </span>
          </motion.h1>

          <motion.p
            className="mt-5 text-sm leading-relaxed text-[var(--muted)] sm:text-base lg:text-lg"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut", delay: 0.1 },
            }}
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true }}
          >
            I am a
            <span className="ml-2 font-semibold text-teal-600 dark:text-teal-300">
              <Typewriter
                words={[
                  "Full Stack Developer.",
                  "React and Node.js Engineer.",
                  "Problem-Solving Software Graduate.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={72}
                deleteSpeed={45}
                delaySpeed={1300}
              />
            </span>
          </motion.p>

          <motion.p
            className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base lg:text-lg"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
            }}
            initial={{ opacity: 0, y: 24 }}
            viewport={{ once: true }}
          >
            Adaptable and results-oriented engineer, focused on designing
            dependable software architecture, delivering maintainable code, and
            shipping responsive web applications.
          </motion.p>

          <motion.div
            className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
            }}
            initial={{ opacity: 0, y: 28 }}
            viewport={{ once: true }}
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-400 sm:text-base"
            >
              View Projects
            </a>
            <a
              href="/Resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-semibold transition hover:border-teal-400 hover:text-teal-500 sm:text-base"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-semibold transition hover:border-teal-400 hover:text-teal-500 sm:text-base"
            >
              Contact Me
            </a>
          </motion.div>

          <SocialMediaIcons justify="start" size={5} />
        </motion.div>

        <motion.div
          className="relative flex justify-center"
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut", delay: 0.35 },
          }}
          initial={{ opacity: 0, x: 35 }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-md rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-[var(--shadow)] sm:p-7">
            <img
              src="/my_pic_1.jpeg"
              alt="Ermias Wakgari Yadeta"
              loading="lazy"
              className="mx-auto h-44 w-44 rounded-2xl object-cover ring-4 ring-teal-500/20 sm:h-52 sm:w-52"
            />

            <div className="mt-5 space-y-3 text-sm sm:text-base">
              <div className="rounded-xl border border-[var(--border)] p-3">
                <p className="text-xs uppercase tracking-wide text-[var(--muted)]">
                  Location
                </p>
                <p className="mt-1 font-medium">Addis Ababa, Ethiopia</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] p-3">
                <p className="text-xs uppercase tracking-wide text-[var(--muted)]">
                  Languages
                </p>
                <p className="mt-1 font-medium">
                  English, Afaan Oromo, Amharic
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] p-3">
                <p className="text-xs uppercase tracking-wide text-[var(--muted)]">
                  Website
                </p>
                <a
                  href="https://ermiaswakgari.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-medium text-teal-600 hover:underline dark:text-teal-300"
                >
                  ermiaswakgari.me
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
