import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

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
      className="fixed left-1 top-1/2 transform -translate-y-1/2 z-50 flex items-center justify-center w-14 h-14 cursor-pointer rounded-full bg-gradient-to-r from-primary to-accent hover:scale-105 transition-all duration-300 ease-in-out shadow-xl"
      aria-label="Toggle theme"
    >
      {/* Theme icon container */}
      <div
        className={`flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-all duration-300 ease-in-out ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {/* Icon: Sun or Moon */}
        {isDark ? (
          <FaSun className="text-yellow-500 text-xl sm:text-xl md:text-2xl transition-opacity duration-300" />
        ) : (
          <FaMoon className="text-gray-900 dark:text-gray-200 text-xl sm:text-2xl md:text-3xl transition-opacity duration-300" />
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
