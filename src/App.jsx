import { ReactLenis } from "lenis/react";

import AboutMe from "./components/AboutMe";
import Credits from "./components/Credits";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stack from "./components/Stack";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <ReactLenis root>
      <section className="max-w-7xl mx-auto px-3 py-2 md:px-8 xl:px-16 2xl:px-0 relative">
        <Header />
        <Hero />
        <Work />
        <AboutMe />
        <Experience />
        <Services />
        <Stack />
        <Contact />
        <Footer />
        <Credits />
      </section>
    </ReactLenis>
  );
};

export default App;
