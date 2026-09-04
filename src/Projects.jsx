import project2 from "./assets/project2.png";
import project1 from "./assets/project1.png";
import portfolio from "./assets/portfolio.png";

function Projects() {
  const projects = [
    {
      name: "Housing Society Management System",
      description: "A console-based Java application with Admin, Resident, and Tenant modules to manage flats, resident and tenant records, maintenance payments, complaints, and society-related activities using JDBC and MySQL.",
      tech: ["Java", "SQL"],
      demo: null,
      github: "https://github.com/Anjali-bhati/Housing-Society-Facility-management",
      image: project1,

    },
    {
      name: "E-Commerce Website Ayurveda",
      description: "A responsive e-commerce website for Ayurvedic products with product categories, product details, shopping cart, and a user-friendly interface built with Bootstrap.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      demo: "https://ayurveda-ecommerce-anjali.netlify.app",
      github: "https://github.com/Anjali-bhati/Ayurveda",
      image: project2,
    },
    {
      name: "My Portfolio Website",
      description: "A responsive personal portfolio website showcasing my skills, projects, education, and resume with a clean and interactive interface.",
      tech: ["React", "Tailwind CSS"],
      demo: "your-portfolio-live-url",
      github: "your-portfolio-github-url",
      image: portfolio,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-15 sm:mt-20 md:mt-23 lg:mt-30">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Projects</h2>

      <div className="w-[30%] sm:w-[30%] md:w-[20%] lg:w-[10%] h-1 mx-auto mb-8 sm:mb-10 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl w-full mt-10">
        {projects.map((project) => (
          <div key={project.name} className="group bg-white/10 border border-white/10 rounded-2xl p-6 min-h-[420px] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="w-full h-40 sm:h-44 md:h-48 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-indigo-500/25 to-purple-400/25 flex items-center justify-center">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <span className="text-gray-400 text-xs">screenshot</span>
              )}
            </div>
            <h3 className="text-white text-lg font-semibold mb-1.5">{project.name}</h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tech.map((t) => (
                <span key={t} className="bg-indigo-500/15 text-purple-300 px-2 py-1 rounded-full text-[15px]">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-auto">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-purple-400 text-lg font-medium hover:underline">
                  Live Demo →
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white text-lg font-medium hover:underline">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;