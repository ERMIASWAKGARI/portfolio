// src/App.jsx
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
// import SocialMediaIcons from "./components/SocialMediaIcons";
import ScrollIndicator from "./components/ScrollIndicator";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div>
      {/* <SocialMediaIcons iconSize={28} hoverColor="teal-500" /> */}

      <Header />
      <ThemeToggle />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollIndicator />
    </div>
  );
}

export default App;
