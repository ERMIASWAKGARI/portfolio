import { useEffect, useState } from "react";

function ScrollIndicator() {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersect0ing) {
            setCurrentSectionIndex(sections.indexOf(entry.target));
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleScrollToNext = () => {
    const sections = document.querySelectorAll("section");
    const nextSection = sections[currentSectionIndex + 1];
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2">
      <button
        onClick={handleScrollToNext}
        className="text-teal-400 dark:text-secondary-light text-2xl animate-bounce flex flex-col items-center"
        aria-label="Scroll to next section"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default ScrollIndicator;
