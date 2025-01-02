import { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaServicestack,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSmallNavbar, setShowSmallNavbar] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowSmallNavbar(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="home"
      className="bg-gray-50 px-2 py-1 dark:bg-[#001d3d] transition duration-300 ease-in-out"
    >
      <nav className="max-w-8xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="p-1 bg-teal-400 rounded-full nav-link">
            <img
              src="logo 1.png"
              alt="Logo"
              className="h-10 w-10 rounded-full bg-white p-1"
            />
          </div>
        </div>

        <div className="md:hidden">
          <button
            className="text-teal-400 dark:text-teal-400 focus:outline-none text-2xl p-2"
            onClick={toggleMenu}
          >
            {isOpen ? "" : "☰"}
          </button>
        </div>

        <div className="hidden md:flex space-x-6 items-center">
          {["Home", "About", "Skills", "Services", "Projects"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-base text-secondary dark:text-secondary-light hover:text-teal-400 dark:hover:text-teal-400 transition duration-300 nav-link "
            >
              {link}
            </a>
          ))}
          <button
            aria-label="View my portfolio"
            className="flex items-center justify-center bg-teal-400 text-[#000] py-2 px-4 rounded-lg hover:bg-teal-500 hover:scale-105 transition duration-300 shadow-lg nav-link"
          >
            <a href="#contact" className="flex items-center">
              <span className="text-sm lg:text-base">Get in Touch</span>
            </a>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end items-start">
          <div className="bg-neutral-white dark:bg-tertiary-dark shadow-lg p-3 rounded-md transition-transform duration-300 ease-in-out mt-16 mr-4">
            <button
              className="text-teal-400 dark:text-teal-400 absolute top-4 right-4 text-2xl"
              onClick={toggleMenu}
            >
              ✖
            </button>

            <div className="flex flex-col items-center space-y-4 ">
              {["Home", "About", "Skills", "Services", "Projects"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm sm:text-base md:text-lg text-secondary dark:text-secondary-light hover:text-teal-400 dark:hover:text-teal-400 transition duration-300"
                    onClick={toggleMenu}
                  >
                    {link}
                  </a>
                )
              )}
              <button
                aria-label="View my portfolio"
                className="flex items-center justify-center bg-teal-400 text-[#000] py-1 px-2 rounded hover:bg-teal-500 hover:scale-105 transition duration-300 shadow-lg"
                onClick={toggleMenu}
              >
                <a
                  href="#projects"
                  className="flex items-center text-xs sm:text-sm lg:text-base"
                >
                  <span>Get in Touch</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      )}

      {showSmallNavbar && (
        <div
          className={`fixed right-1 top-1/2 transform -translate-y-1/2 flex gap-2 items-center justify-center rounded-md z-30 transition-all duration-300`}
        >
          <div
            className={`p-4 rounded-md flex items-center justify-center flex-col gap-2 ${
              isCollapsed
                ? "w-12 overflow-hidden opacity-0"
                : "w-auto shadow-lg p-2 bg-neutral-white dark:bg-tertiary-dark "
            } transition-all duration-500 ease-in-out`}
          >
            {[
              { icon: <FaHome size={26} />, link: "#Home" },
              { icon: <FaUser size={26} />, link: "#About" },
              { icon: <FaCode size={26} />, link: "#skills" },
              { icon: <FaServicestack size={26} />, link: "#Services" },
              { icon: <FaBriefcase size={26} />, link: "#Projects" },
              { icon: <FaEnvelope size={26} />, link: "#Contact" },
            ].map(({ icon, link }) => (
              <a
                key={link}
                href={`${link.toLowerCase()}`}
                className={`flex items-center text-lg text-secondary dark:text-secondary-light hover:text-teal-400 dark:hover:text-teal-400 transition duration-300`}
              >
                <span>{icon}</span>
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`bg-teal-400 hover:bg-teal-500 text-[#000] px-2.5 py-5 rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out ${
              isCollapsed ? "ml-auto" : "ml-0"
            }`}
          >
            {isCollapsed ? "<" : ">"}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
