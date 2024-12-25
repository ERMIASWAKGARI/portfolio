import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Toggle the theme between dark and light
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Load user's theme preference on initial render
  useEffect(() => {
    const darkModePreference = localStorage.getItem("theme") === "dark";
    setIsDark(darkModePreference);
    if (darkModePreference) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Save the user's theme preference in localStorage
  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div
      onClick={toggleTheme}
      className="fixed left-1 top-1/2 transform -translate-y-1/2 z-50 flex items-center justify-center w-8 h-16 cursor-pointer rounded-full bg-primary hover:bg-primary-hover hover:scale-105 transition-all duration-300 ease-in-out shadow-lg"
      aria-label="Toggle theme"
    >
      {/* Switch container (Vertical layout) */}
      <div
        className={`flex items-center justify-center w-7 h-14 rounded-full dark:bg-gray-200 bg-gray-800 p-1 transition-all duration-300 ease-in-out`}
      >
        {/* Circle that moves vertically */}
        <div
          className={`w-6 h-6  rounded-full shadow-md transform transition-all duration-300 ease-in-out ${
            isDark ? "translate-y-0" : " translate-y-0"
          }`}
        >
          {/* Icon: Sun or Moon */}
          {isDark ? (
            <FaSun className="text-yellow-500 text-xl absolute top-1/2 transform -translate-y-1/2 transition-opacity duration-300" />
          ) : (
            <FaMoon className="dark:text-gray-900 text-gray-200 text-xl absolute top-1/2 transform -translate-y-1/2 transition-opacity duration-300" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
