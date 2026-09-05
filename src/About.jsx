import logo from "./assets/college.png";
function About() {
  return (
    <div className="w-full max-w-7xl mx-auto pt-10 sm:pt-16 md:pt-15 lg:pt-25">

      <h1 className="text-5xl font-bold mb-4 text-center">About Me</h1>
      <div className="w-[60%] sm:w-[43%] md:w-[28%] lg:w-[20%] xl:w-[16%] h-1 mx-auto mb-10 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"></div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 items-start w-full px-4 md:px-8 lg:px-5 xl:px-2 pt-10">

        <div className="w-full md:w-[56%] lg:w-[55%] text-center md:text-left">

          <p className="about text-lg sm:text-xl leading-7 sm:leading-8">
            I am a BCA student with a strong foundation in Java, Web
            Development, SQL, and SAP ABAP. I enjoy building applications
            and exploring how different technologies work together to solve
            real-world problems.
          </p>

          <p className="about text-lg sm:text-xl leading-7 sm:leading-8 pt-6 sm:pt-7">
            I have hands-on experience with Java, HTML, CSS, JavaScript, Bootstrap
            React, Tailwind CSS, SQL, and SAP ABAP. I have also worked on
            projects such as a Job Portal, Housing Society Management
            System, E-Commerce Website Ayurveda, and My Portfolio.
          </p>

          <p className="about text-lg sm:text-xl leading-7 sm:leading-8 pt-6 sm:pt-7">
            Currently, I am strengthening my frontend development skills
            with React and building responsive, user-friendly web
            applications while continuing to expand my knowledge of
            software development.
          </p>

          <p className="about text-lg sm:text-xl leading-7 sm:leading-8 pt-6 sm:pt-7">
            I am looking for opportunities where I can apply my technical
            skills, learn from real-world projects, and grow as a software
            developer.
          </p>

        </div>

        <div className="w-full md:w-[44%] lg:w-[45%] flex flex-col gap-4">

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 lg:p-8 flex items-center gap-1">

            
            <img src={logo} alt="" className="w-10 h-10" />
           

            <div className="text-left min-w-0">

             <p className="text-white font-semibold text-xs sm:text-lg md:text-sm lg:text-xl">
  BCA (Bachelor of Computer Applications)
</p>

<p className="text-gray-200 text-sm sm:text-xs md:text-sm lg:text-base mt-1">
  Sant Singaji Institute of Science & Management
</p>

            </div>

          </div>

          <div className="grid grid-cols-3 gap-3">

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-4 lg:p-7 text-center">
              <h3 className="text-white text-xl sm:text-2xl font-medium">
                3+
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm mt-1">
                Projects
              </p>
            </div>


            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <h3 className="text-white text-xl sm:text-2xl font-medium">
                2+
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm mt-1">
                Years
              </p>
            </div>


            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
              <h3 className="text-white text-xl sm:text-2xl font-medium">
                9+
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm mt-1">
                Technologies
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;