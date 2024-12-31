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
        threshold: 0.2,
      }
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
      className="py-12 sm:py-16 md:py-20 px-8 sm:px-12 md:px-16 bg-[#fff] dark:bg-[#003049]"
    >
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-neutral-white mb-8 sm:mb-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 mx-auto max-w-screen-lg">
        <motion.div
          className="relative w-full lg:w-1/3 flex flex-col items-center text-center lg:text-left text-gray-900 dark:text-white py-6 px-4 sm:py-8 sm:px-6 shadow-lg rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 mb-4 sm:mb-6 rounded-full overflow-hidden border-4 border-teal-400 dark:border-teal-400">
            <img
              src="DSC_3312.jpg"
              alt="Ermias Wakgari"
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
            ERMIAS WAKGARI
          </h3>
          <p className="text-sm sm:text-base italic mb-3 sm:mb-4">
            Web Developer | Software Engineer
          </p>

          <div className="flex space-x-4 mt-4 sm:mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-purple-600 dark:text-teal-400 hover:text-purple-700 dark:hover:text-teal-500 transition text-xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-purple-600 dark:text-teal-400 hover:text-purple-700 dark:hover:text-teal-500 transition text-xl"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-purple-600 dark:text-teal-400 hover:text-purple-700 dark:hover:text-teal-500 transition text-xl"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="text-purple-600 dark:text-teal-400 hover:text-purple-700 dark:hover:text-teal-500 transition text-xl"
            >
              <i className="fab fa-telegram-plane"></i>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-2/3 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4 ">
            Hi, I’m <strong>Ermias Wakgari</strong>, a passionate full-stack web
            developer specializing in the MERN stack (MongoDB, Express, React,
            Node.js). Based in Ethiopia, I thrive on creating interactive,
            responsive, and scalable applications that solve real-world
            problems.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-200 mb-4">
            With a strong foundation in both front-end and back-end development,
            I focus on delivering seamless user experiences and efficient
            server-side solutions. I’m committed to continuous learning and
            innovation, ensuring that I stay ahead in this rapidly evolving
            industry.
          </p>
          <div className="mt-10 flex items-center gap-4 justify-start flex-col md:flex-row md:justify-center">
            <a
              href="Resume.pdf"
              download
              className="inline-flex  items-center justify-center bg-teal-400  hover:bg-teal-500 dark:bg-teal-400 dark:hover:bg-teal-500 text-[#000] py-2 px-4 rounded-lg hover:scale-105 transition duration-300 shadow-lg"
              aria-label="Download CV"
            >
              <FaFilePdf className="mr-3" /> Download My CV
            </a>

            <div className="flex justify-center space-x-6 sm:space-x-10">
              <div className="text-center flex items-center gap-3 lg:gap-4">
                <h4 className="text-xl sm:text-2xl font-bold text-gray-600 dark:text-gray-300">
                  3+
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Years Experience
                </p>
              </div>
              <div className="text-center flex items-center gap-3 lg:gap-4">
                <h4 className="text-xl sm:text-2xl font-bold text-gray-600 dark:text-gray-300">
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
