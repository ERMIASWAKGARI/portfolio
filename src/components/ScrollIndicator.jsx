import { useEffect, useState } from "react";

function ScrollIndicator() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sections = [
    "home",
    "about",
    "skills",
    "services",
    "projects",
    "contact",
    "footer",
  ];

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
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 z-50 flex gap-4">
      {currentSectionIndex > 0 && (
        <button
          onClick={() => handleScrollToSection(0)}
          className="text-teal-600 dark:text-teal-400 text-2xl animate-bounce flex flex-col items-center"
          aria-label="Scroll to previous section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
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
          className="text-teal-600 dark:text-teal-400 text-2xl animate-bounce flex flex-col items-center"
          aria-label="Scroll to next section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
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
