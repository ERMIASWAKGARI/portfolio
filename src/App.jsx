// src/App.jsx
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skill from "./sections/Skill";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ScrollIndicator from "./components/ScrollIndicator";
import ThemeToggle from "./components/ThemeToggle";
import Services from "./components/Services";

function App() {
  return (
    <div>
      {/* <SocialMediaIcons iconSize={28} hoverColor="teal-500" /> */}

      <Header />
      <ThemeToggle />
      <Hero />
      <About />
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
