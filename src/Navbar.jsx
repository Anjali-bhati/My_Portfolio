// import logo from "./assets/AB.png";
// import resume from './assets/Anjali_Bhati_Resume.pdf';
// 
// function Navbar() {
//   return (
//     <nav className="flex h-33 items-center justify-around sticky top-0 z-50 bg-[#040137]">
//       <img
//         src={logo}
//         alt="Anjali Bhati Logo"
//         className="w-25 h-25 lg:ms-[100px]"
//       />
// 
//       <div className="flex gap-10 text-lg font-bold">
//         <a className="hover-link" href="#home">Home</a>
//         <a className="hover-link" href="#about">About</a>
//         <a className="hover-link" href="#skills">Skills</a>
//         <a className="hover-link" href="#projects">Projects</a>
//         <a className="hover-link" href="#contact">Contact</a>
//         <a className="hover-link" href={resume} target="_blank" rel="noopener noreferrer" download>Resume</a>
//       </div>
//     </nav>
//   );
// }
// 
// export default Navbar;


import { useState, useEffect } from "react";
import logo from "./assets/AB.png";
import resume from "./assets/Anjali_Bhati_Resume.pdf";

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const sections = links.map((link) => document.getElementById(link.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="flex h-20 md:h-33 items-center justify-between md:justify-around sticky top-0 z-50 bg-[#040137] px-5 md:px-0">
      <img
        src={logo}
        alt="Anjali Bhati Logo"
        className="w-16 h-16 md:w-25 md:h-25 lg:ms-[100px]"
      />

      <div className="hidden md:flex items-center gap-10 text-lg font-bold">
        {links.map((link) => (
          <a
            key={link.href}
            className={`hover-link ${
              activeSection === link.id ? "text-purple-400" : "text-white"
            }`}
            href={link.href}
          >
            {link.label}
          </a>
        ))}
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-0.5 text-white px-8 py-2 rounded-full text-base hover:opacity-90 transition"
        >
          <DownloadIcon />
          Resume
        </a>
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden text-white text-3xl"
        aria-label="Open menu"
      >
        ☰
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}

      <div
        className={
          "fixed top-0 right-0 h-full w-64 bg-[#0a0a2e] border-l border-white/10 z-50 transform transition-transform duration-300 md:hidden " +
          (isOpen ? "translate-x-0" : "translate-x-full")
        }
      >
        <div className="flex justify-end p-5">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-3xl"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-6 px-8 text-lg font-bold">
          {links.map((link) => (
            <a
              key={link.href}
              className={`hover-link ${
                activeSection === link.id ? "text-purple-400" : "text-white"
              }`}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            download
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-full text-base"
          >
            <DownloadIcon />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;