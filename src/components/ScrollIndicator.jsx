import { useEffect, useState } from "react";

const sections = [
  "home",
  "about",
  "experience",
  "education",
  "skills",
  "services",
  "projects",
  "contact",
];

function ScrollIndicator() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const sectionElements = sections.map((id) => document.getElementById(id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionElements.indexOf(entry.target);
            if (index !== -1) {
              setCurrentSectionIndex(index);
            }
          }
        });
      },
      { threshold: [0.1, 1.0] }
    );

    sectionElements.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleScrollToSection = (index) => {
    const targetSection = document.getElementById(sections[index]);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="fixed bottom-5 left-4 z-40 hidden items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-2 py-1 shadow-md md:flex">
      {currentSectionIndex > 0 && (
        <button
          onClick={() => handleScrollToSection(0)}
          className="rounded-full p-1 text-teal-600 transition hover:bg-teal-500/10 dark:text-teal-300"
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12.75l-7.5-7.5-7.5 7.5M19.5 18.75l-7.5-7.5-7.5 7.5"
            />
          </svg>
        </button>
      )}
      {currentSectionIndex < sections.length - 1 && (
        <button
          onClick={() => handleScrollToSection(currentSectionIndex + 1)}
          className="rounded-full p-1 text-teal-600 transition hover:bg-teal-500/10 dark:text-teal-300"
          aria-label="Scroll to next section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 5.25l7.5 7.5 7.5-7.5M4.5 11.25l7.5 7.5 7.5-7.5"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default ScrollIndicator;
