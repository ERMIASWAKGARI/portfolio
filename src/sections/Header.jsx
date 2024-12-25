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

  // Close hamburger menu on screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Close the hamburger menu on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Check scroll position to show/hide small navbar
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
      className="bg-neutral-white shadow-md px-2 py-1 dark:bg-tertiary-dark transition duration-300 ease-in-out"
    >
      <nav className="max-w-8xl mx-auto px-4 py-2 flex justify-between items-center">
        {/* Brand Title */}
        <div className="flex items-center space-x-2">
          <div className="p-1 bg-primary rounded-full nav-link">
            <img
              src="../../public/E.png"
              alt="Logo"
              className="h-10 w-10 rounded-full"
            />
          </div>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="text-primary dark:text-primary focus:outline-none text-2xl p-2"
            onClick={toggleMenu}
          >
            {isOpen ? "" : "☰"}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {["Home", "About", "Skills", "Services", "Projects", "Contact"].map(
            (link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-base text-secondary dark:text-secondary-light hover:text-primary dark:hover:text-primary transition duration-300 nav-link "
              >
                {link}
              </a>
            )
          )}
          <button
            aria-label="View my portfolio"
            className="flex items-center justify-center bg-primary text-neutral-white py-2 px-3 rounded hover:bg-primary-hover hover:scale-105 transition duration-300 shadow-lg nav-link"
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
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end items-start">
          <div className="bg-neutral-white dark:bg-tertiary-dark shadow-lg p-3 rounded-md transition-transform duration-300 ease-in-out mt-16 mr-4">
            {/* Close Button */}
            <button
              className="text-primary dark:text-primary absolute top-4 right-4 text-2xl"
              onClick={toggleMenu}
            >
              ✖
            </button>

            {/* Menu Links */}
            <div className="flex flex-col items-center space-y-4 ">
              {[
                "Home",
                "About",
                "Skills",
                "Services",
                "Projects",
                "Contact",
              ].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm sm:text-base md:text-lg text-secondary dark:text-secondary-light hover:text-primary dark:hover:text-primary transition duration-300"
                  onClick={toggleMenu}
                >
                  {link}
                </a>
              ))}
              {/* View My Work Button */}
              <button
                aria-label="View my portfolio"
                className="flex items-center justify-center bg-primary text-neutral-white py-1 px-2 rounded hover:bg-primary-hover hover:scale-105 transition duration-300 shadow-lg"
                onClick={toggleMenu}
              >
                <a
                  href="#projects"
                  className="flex items-center text-xs sm:text-sm lg:text-base"
                >
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
            </div>
          </div>
        </div>
      )}

      {/* Small Sticky Navbar */}
      {showSmallNavbar && (
        <div
          className={`fixed right-1 top-1/2 transform -translate-y-1/2 flex gap-2 items-center justify-center rounded-md z-30 transition-all duration-300`}
        >
          {/* Links */}
          <div
            className={`p-4 rounded-md flex items-center justify-center flex-col gap-2 ${
              isCollapsed
                ? "w-12 overflow-hidden opacity-0"
                : "w-auto shadow-lg p-2 bg-neutral-white dark:bg-tertiary-dark "
            } transition-all duration-500 ease-in-out`} // Animation for width, opacity
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
                className={`flex items-center text-lg text-secondary dark:text-secondary-light hover:text-primary dark:hover:text-primary transition duration-300`}
              >
                <span>{icon}</span>
              </a>
            ))}
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`bg-primary hover:bg-primary-hover text-neutral-white px-2.5 py-5 rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out ${
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
