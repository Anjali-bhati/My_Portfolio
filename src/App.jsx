import Navbar from "./Navbar";

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <section id="home" className="flex items-center py-5 sm:py-14 md:py-10">
          <Home />
        </section>

        <section id="about" className="flex items-center py-5 sm:py-14 md:py-10">
          <About />
        </section>

        <section id="skills" className="flex items-center py-5 sm:py-14 md:py-10">
          <Skills />
        </section>

        <section id="projects" className="flex items-center py-5 sm:py-14 md:py-10">
          <Projects />
        </section>

        <section id="contact" className="flex items-center py-5 sm:py-14 md:py-10">
          <Contact />
        </section>
        <footer>
          <Footer/>
        </footer>
      </div>
    </>
  );
}

export default App;