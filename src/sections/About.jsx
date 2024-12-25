import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaBootstrap,
  FaNode,
  FaHtml5,
  FaFilePdf,
  FaPhp,
  FaServer,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { motion } from "framer-motion";
import SocialMediaIcons from "../components/SocialMediaIcons";

export default function About() {
  return (
    <section id="about" className="py-20 px-8 bg-white dark:bg-gray-900">
      {/* Title Section */}
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-neutral-white mb-10">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row items-center gap-10 mx-auto max-w-[1000px]">
        {/* Profile Image with Animated Gradient Border */}
        <div className="flex justify-center lg:w-1/3 mb-10 lg:mb-0">
          <div className="relative w-40 h-40 border-[4px] border-transparent rounded-full bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200 shadow-lg hover:shadow-2xl transition-all">
            <img
              src="DSC_3312.jpg" // Replace with your image URL
              alt="Your Name"
              className="w-full h-full rounded-full object-cover transition-all duration-300 transform hover:scale-105"
            />
          </div>
        </div>

        {/* Bio Text */}
        <div className="text-center lg:text-left">
          <p className="text-gray-600 dark:text-gray-200 text-lg mb-4">
            Hi, I&apos;m <strong>Ermias Wakgari</strong>, a passionate web
            developer with a focus on creating interactive, responsive, and
            scalable websites. My core technologies include{" "}
            <span className="text-primary">React</span>,{" "}
            <span className="text-primary">JavaScript</span>, and{" "}
            <span className="text-primary">Tailwind CSS</span>.
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            <SocialMediaIcons />
          </div>
        </div>
      </div>

      <div className="space-y-12 mt-12">
        {/* Introduction */}
        <div className="text-center flex items-center justify-center mb-8">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-[800px]">
            Over the years, I’ve honed my skills across a variety of
            technologies:
          </p>
        </div>

        {/* Front-End Techs */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
            Front-End Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col items-center">
              <FaReact className="text-5xl text-teal-500" />
              <p className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                React
              </p>
            </div>
            <div className="flex flex-col items-center">
              <SiTypescript className="text-5xl text-blue-500" />
              <p className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                TypeScript
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaJs className="text-5xl text-yellow-500" />
              <p className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                JavaScript
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3Alt className="text-5xl text-blue-600" />
              <p className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                CSS
              </p>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss className="text-5xl text-teal-400" />
              <p className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                Tailwind CSS
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaBootstrap className="text-5xl text-purple-600" />
              <p className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                Bootstrap
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-5xl text-orange-500" />
              <p className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                HTML
              </p>
            </div>
          </div>
        </div>

        {/* Back-End Techs */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
            Back-End Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col items-center">
              <FaNode className="text-5xl text-green-500" />
              <p className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                Node.js
              </p>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb className="text-5xl text-green-400" />
              <p className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                MongoDB
              </p>
            </div>
            <div className="flex flex-col items-center">
              <SiMysql className="text-5xl text-blue-600" />
              <p className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                MySQL
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaPhp className="text-5xl text-indigo-500" />
              <p className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                PHP
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaServer className="text-5xl text-gray-500" />
              <p className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                Express.js
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CV Download Button */}
      <div className="text-center mt-12">
        <motion.a
          href="Resume.pdf" // Replace with your CV link
          download
          className="inline-flex items-center justify-center bg-primary text-white py-3 px-6 rounded-md shadow-lg hover:bg-primary-dark hover:scale-105 transition-all duration-300"
          aria-label="Download CV"
        >
          <FaFilePdf className="mr-3" /> Download My CV
        </motion.a>
      </div>
    </section>
  );
}
