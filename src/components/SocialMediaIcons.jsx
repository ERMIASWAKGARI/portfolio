import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaDev,
  FaStackOverflow,
  FaDribbble,
} from "react-icons/fa";
import PropTypes from "prop-types";
import { useState } from "react";

const SocialMediaIcons = ({ iconSize = 24 }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="fixed left-2 top-1/2 transform -translate-y-1/2 flex gap-2 items-center rounded-md z-30 transition-all duration-300">
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`bg-primary hover:bg-primary-hover text-neutral-white px-2 py-4 rounded-full shadow-lg transition-transform duration-300 ${
          isCollapsed ? "ml-auto" : "ml-0"
        }`}
      >
        {isCollapsed ? ">" : "<"}
      </button>

      {/* Icons Container */}
      <div
        className={`p-4 rounded-md flex items-center justify-center flex-col gap-2 ${
          isCollapsed
            ? "w-12 overflow-hidden opacity-0"
            : "w-auto shadow-lg p-2 bg-neutral-white dark:bg-tertiary-dark"
        } transition-all duration-500 ease-in-out`}
      >
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 dark:text-secondary-light dark:hover:text-primary hover:text-primary"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={iconSize} />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 dark:text-secondary-light dark:hover:text-primary hover:text-primary"
          aria-label="GitHub"
        >
          <FaGithub size={iconSize} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 dark:text-secondary-light dark:hover:text-primary hover:text-teal-500"
          aria-label="Twitter"
        >
          <FaTwitter size={iconSize} />
        </a>
        <a
          href="https://dev.to"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 dark:text-secondary-light dark:hover:text-primary hover:text-teal-500"
          aria-label="Dev.to"
        >
          <FaDev size={iconSize} />
        </a>
        <a
          href="https://stackoverflow.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 dark:text-secondary-light dark:hover:text-primary hover:text-teal-500"
          aria-label="Stack Overflow"
        >
          <FaStackOverflow size={iconSize} />
        </a>
        <a
          href="https://dribbble.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-300 dark:text-secondary-light hover:text-teal-500"
          aria-label="Dribbble"
        >
          <FaDribbble size={iconSize} />
        </a>
      </div>
    </div>
  );
};

SocialMediaIcons.propTypes = {
  iconSize: PropTypes.number,
};

export default SocialMediaIcons;
