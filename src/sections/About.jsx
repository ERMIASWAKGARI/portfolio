// src/pages/About.js
import { FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

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
        threshold: 0.2, // Adjust the threshold value based on how much of the element should be visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-12 sm:py-16 md:py-20 px-6 sm:px-8 lg:px-20 bg-tertiary-light dark:bg-gray-900"
    >
      {/* Title Section */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-neutral-white mb-8 sm:mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Me
      </motion.h2>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 mx-auto max-w-screen-lg">
        {/* Profile Section */}
        <motion.div
          className="flex flex-col items-center lg:w-1/3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {/* Profile Image */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 border-[4px] border-transparent rounded-full bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200 shadow-lg hover:shadow-2xl transition-all mb-5">
            <img
              src="DSC_3312.jpg" // Replace with your image URL
              alt="Ermias Wakgari"
              className="w-full h-full rounded-full object-cover transition-all duration-300 transform hover:scale-105"
            />
          </div>

          {/* Name and Tagline */}
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Ermias Wakgari
          </h3>
          <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 text-center mt-2">
            &quot;Building the Future, One Line of Code at a Time&quot;
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          className="lg:w-2/3 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4">
            Hi, I’m <strong>Ermias Wakgari</strong>, a passionate web developer
            based in Ethiopia. I specialize in creating interactive, responsive,
            and scalable websites. My focus is on technologies like{" "}
            <span className="text-primary">React</span>,{" "}
            <span className="text-primary">JavaScript</span>, and{" "}
            <span className="text-primary">Tailwind CSS</span>.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-200 mb-4">
            I’m always eager to collaborate and learn from peers. My journey so
            far has been enriched by valuable peer reviews and hands-on
            experience, and I’m excited to keep growing in this ever-evolving
            field.
          </p>
          <div className="mt-10 flex  items-center  gap-4 justify-start flex-col md:flex-row md:justify-center sm:justify-center">
            <motion.a
              href="Resume.pdf" // Replace with your CV link
              download
              className="inline-flex items-center justify-center bg-primary text-white py-2 px-4 rounded-md shadow-lg hover:bg-primary-dark hover:scale-105 transition-all duration-300"
              aria-label="Download CV"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <FaFilePdf className="mr-3" /> Download My CV
            </motion.a>

            <div className="flex justify-center space-x-6  sm:space-x-10">
              <div className="text-center flex items-center gap-3 lg:gap-4 md:gap:2">
                <h4 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                  3+
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Years Experience
                </p>
              </div>
              <div className="text-center flex items-center gap-3 lg:gap-4 md:gap:2">
                <h4 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                  20+
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
