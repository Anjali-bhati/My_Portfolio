import { useState } from "react";

function Skills() {
  const [active, setActive] = useState("frontend");

  const categories = {
    frontend: [
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
    ],
    backend: [
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "SAP ABAP", icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg", isImage: true },
    ],
    tools: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "SAP GUI", icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg", isImage: true },
    ],
  };

  const tabs = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Tools" },
  ];

  return (
    <div className="w-full flex flex-col items-center mt-15 sm:mt-20 md:mt-18 lg:mt-25">

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Skills</h2>

      <div className="w-16 sm:w-20 md:w-[12%] lg:w-[10%] xl:w-[6%] h-1 mx-auto mb-8 sm:mb-10 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"></div>

      {/* Tabs */}
      <div className="flex justify-center gap-8 sm:gap-16 md:gap-40 mb-10 sm:mb-7 lg:pb-20 flex-wrap lg:pt-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`cursor-pointer relative pb-2 text-xl sm:text-2xl md:text-3xl font-medium transition ${active === tab.id ? "text-white" : "text-gray-400 hover:text-white"
              }`}
          >
            {tab.label}
            {active === tab.id && (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"></span>
            )}
          </button>
        ))}
      </div>

      {/* Skill Icons - always centered, consistent regardless of item count */}
      <div className="flex flex-wrap justify-center gap-x-10 sm:gap-x-14 md:gap-x-20 xl:gap-x-24 gap-y-6 sm:gap-y-8 md:gap-y-10 max-w-4xl mx-auto w-full">
        {categories[active].map((skill) => (
          <div key={skill.name} className="bg-indigo-500/8 border border-purple-400/20 rounded-xl px-6 py-4 flex items-center gap-3 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20">
            {skill.isImage ? (
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20"
              />
            ) : (
              <i className={`${skill.icon} !text-[36px] sm:!text-[48px] md:!text-[60px] xl:!text-[80px]`}></i>
            )}
            <span className="text-base sm:text-lg md:text-xl text-gray-100">{skill.name}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Skills;