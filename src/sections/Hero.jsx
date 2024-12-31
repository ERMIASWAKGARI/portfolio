import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { motion } from "framer-motion";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Hero = () => {
  return (
    <section className="relative bg-neutral dark:bg-[#001d3d] px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-12 lg:py-8">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 text-primary absolute top-4 sm:top-6 right-4 sm:right-6 transform -rotate-12"
        >
          <path
            fill="currentColor"
            d="M12 0L15.09 7.26L23.54 8.67L17.27 13.64L18.81 21.99L12 18.25L5.19 21.99L6.73 13.64L0.46 8.67L8.91 7.26L12 0Z"
          ></path>
        </svg>
      </div>

      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: { value: 30 },
            size: { value: 2 },
            move: { enable: true, speed: 0.5 },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#38b2ac",
              opacity: 0.5,
            },
          },
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-center">
        <motion.div
          className="text-center lg:text-left max-w-prose mx-auto"
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          }}
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: false }}
        >
          <motion.h1
            className="sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-secondary dark:text-secondary-light tracking-wide leading-snug"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: false }}
          >
            Hello, I&apos;m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-500">
              Ermias Wakgari
            </span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-200 mb-4 mt-4 leading-relaxed"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut", delay: 0.2 },
            }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: false }}
          >
            I&apos;m a{" "}
            <span className="text-teal-400 dark:text-teal-400">
              <Typewriter
                words={[
                  "Web Developer.",
                  "Front-end Developer.",
                  "UI Designer.",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.p>

          <motion.p
            className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-200 mb-4 mt-4 leading-relaxed"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut", delay: 0.4 },
            }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: false }}
          >
            I design and build responsive, user-friendly websites and deliver
            intuitive digital experiences.
          </motion.p>

          <motion.div
            className="mt-6 flex items-center justify-center space-x-4 sm:space-x-6 lg:space-x-8 lg:items-start lg:justify-start"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut", delay: 0.6 },
            }}
            initial={{ opacity: 0, y: 50 }}
            viewport={{ once: false }}
          >
            <button
              aria-label="View my portfolio"
              className="flex items-center justify-center bg-teal-400 text-[#000] py-2 px-4 rounded-lg hover:bg-teal-500 hover:scale-105 transition duration-300 shadow-lg"
            >
              <a href="#projects" className="flex items-center">
                <span className="text-sm lg:text-base">View My Work</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 lg:w-6 lg:h-6 ml-2"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M5 12h14m0 0l-6-6m6 6l-6 6"
                  ></path>
                </svg>
              </a>
            </button>

            <button
              aria-label="Learn more about me"
              className="flex items-center justify-center border border-teal-400 text-[#000]  py-2 px-4 rounded-lg  hover:text-[#000] dark:text-[#2dd4bf]  hover:scale-105 transition duration-300 shadow-lg"
            >
              <a href="#about" className="flex items-center">
                <span className="text-sm lg:text-base">About Me</span>
              </a>
            </button>
          </motion.div>

          <SocialMediaIcons justify="start" size={3} />
        </motion.div>

        <motion.div
          className="relative flex justify-center items-start"
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: "easeOut", delay: 0.8 },
          }}
          initial={{ opacity: 0, x: 50 }}
          viewport={{ once: false }}
        >
          <img
            src="/developeractivity.svg"
            alt="Developer Illustration"
            loading="lazy"
            className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-full max-w-xs sm:max-w-sm lg:max-w-lg animate-refined-float mb-5"
          />
          <div className="absolute bottom-0 text-center bg-teal-400 bg-opacity-80 text-[#000]  py-2 px-4 rounded-md shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <p className="text-sm sm:text-base lg:text-lg font-medium truncate">
              &quot;Transforming Ideas into Scalable Solutions&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
