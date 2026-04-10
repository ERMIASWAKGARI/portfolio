import GoogleAnalytics from "./components/GoogleAnalytics";
import ScrollIndicator from "./components/ScrollIndicator";
import ThemeToggle from "./components/ThemeToggle";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Skill from "./sections/Skill";

function App() {
  return (
    <div className="overflow-x-hidden bg-[var(--bg)] text-[var(--text)] transition-colors duration-300 custom-scrollbar">
      <GoogleAnalytics />
      <Header />
      <ThemeToggle />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skill />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <ScrollIndicator />
    </div>
  );
}

export default App;
