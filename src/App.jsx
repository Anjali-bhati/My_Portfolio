// import Navbar from "./Navbar";
// import { Routes, Route } from "react-router-dom";
// 
// import Home from "./Home";
// import About from "./About";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Contact from "./Contact";
// 
// function App() {
//   return (
//     <>
//       <div>
//         <Navbar />
//         <section id="home" className="min-h-[550px] flex items-center py-6 sm:py-8 md:py-10">
//           <Home />
//         </section>
// 
//         <section id="about" className="min-h-[550px] flex items-center py-6 sm:py-8 md:py-10">
//           <About />
//         </section>
// 
//         <section id="skills" className="min-h-[550px] flex items-center py-6 sm:py-8 md:py-10">
//           <Skills />
//         </section>
// 
//         <section id="projects" className="min-h-[550px] flex items-center py-6 sm:py-8 md:py-10">
//           <Projects />
//         </section>
// 
//         <section id="contact" className="min-h-[550px] flex items-center py-6 sm:py-8 md:py-10">
//           <Contact />
//         </section>
//       </div>
//     </>
//   );
// }
// 
// export default App;
// import Navbar from "./Navbar";
// import { Routes, Route } from "react-router-dom";
// 
// import Home from "./Home";
// import About from "./About";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Contact from "./Contact";
// 
// function App() {
//   return (
//     <>
//       <div>
//         <Navbar />
//         <section id="home" className="min-h-[350px] sm:min-h-[500px] md:min-h-[500px] flex items-center py-6 sm:py-8 md:py-5">
//           <Home />
//         </section>
// 
//         <section id="about" className="min-h-[350px] sm:min-h-[500px] md:min-h-[500px] flex items-center py-6 sm:py-8">
//           <About />
//         </section>
// 
//         <section id="skills" className="min-h-[350px] sm:min-h-[500px] md:min-h-[500px] flex items-center py-6 sm:py-8 ">
//           <Skills />
//         </section>
// 
//         <section id="projects" className="min-h-[350px] sm:min-h-[500px] md:min-h-[500px] flex items-center py-6 sm:py-8">
//           <Projects />
//         </section>
// 
//         <section id="contact" className="min-h-[350px] sm:min-h-[500px] md:min-h-[500px] flex items-center py-6 sm:py-8">
//           <Contact />
//         </section>
//       </div>
//     </>
//   );
// }
// 
// export default App;
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

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
      </div>
    </>
  );
}

export default App;