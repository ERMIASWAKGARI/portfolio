import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Hero = () => {
  return (
    <section className="relative bg-tertiary dark:bg-tertiary-dark px-6 md:px-12 lg:px-20 py-12 lg:py-10">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="w-32 h-32 md:w-40 md:h-40 text-primary hover:text-primary-dark absolute top-6 md:top-10 right-6 md:right-10 transform -rotate-12"
        >
          <path
            fill="currentColor"
            d="M12 0L15.09 7.26L23.54 8.67L17.27 13.64L18.81 21.99L12 18.25L5.19 21.99L6.73 13.64L0.46 8.67L8.91 7.26L12 0Z"
          ></path>
        </svg>
      </div>

      {/* Particle Effects */}
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            line_linked: { enable: true, color: "#38b2ac" },
          },
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Section: Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary dark:text-secondary-light tracking-wide leading-tight">
            Hello, I&apos;m{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-hover">
              Ermias Wakgari
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-secondary dark:text-accent mt-4 leading-relaxed">
            I&apos;m a{" "}
            <span className="text-primary dark:text-primary">
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
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-secondary dark:text-secondary-light mt-4 leading-relaxed">
            I design and build responsive, user-friendly websites and delivering
            intuitive digital experiences.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4 space-y-4">
            <button
              aria-label="View my portfolio"
              className="flex items-center justify-center bg-primary text-neutral-white py-2 px-4 sm:px-6 rounded hover:bg-primary-hover hover:scale-105 transition duration-300 shadow-lg"
            >
              <a href="#projects" className="flex items-center">
                <span>View My Work</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 ml-2"
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
              className="border border-primary text-primary py-2 px-4 sm:px-6 rounded hover:bg-primary hover:text-neutral-white hover:scale-105 transition duration-300 shadow-lg"
            >
              <a href="#about" className="flex items-center justify-center">
                About Me
              </a>
            </button>
          </div>

          <SocialMediaIcons justify="start" />
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center">
          <img
            src="/Developer activity-bro.svg"
            alt="Developer Illustration"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-lg animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
