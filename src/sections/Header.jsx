import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

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
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 py-3 transition-all sm:px-6 ${
          isScrolled
            ? "rounded-b-2xl border-x border-b border-[var(--border)] bg-[var(--card)]/90 shadow-md backdrop-blur"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center space-x-2">
          <a href="#home" className="inline-flex items-center gap-2">
            <img
              src="/logo 1.png"
              alt="Ermias logo"
              className="h-10 w-10 rounded-full border border-[var(--border)] bg-white p-1"
            />
            <span className="hidden text-sm font-semibold tracking-wide sm:inline">
              Ermias Wakgari
            </span>
          </a>
        </div>

        <div className="md:hidden">
          <button
            className="rounded-lg border border-[var(--border)] p-2 text-xl"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[var(--muted)] transition hover:text-teal-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-xl bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-teal-400"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {isOpen && (
        <div className="border-b border-[var(--border)] bg-[var(--card)] px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg border border-[var(--border)] px-3 py-2 text-sm font-medium"
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={toggleMenu}
              className="rounded-lg bg-teal-500 px-3 py-2 text-center text-sm font-semibold text-slate-950"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
