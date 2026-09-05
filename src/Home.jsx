import logo from './assets/photo.png';
import resume from './assets/Anjali_Bhati_Resume.pdf';

function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/>
    </svg>
  );
}

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-6 sm:px-10 md:px-10 lg:px-20 xl:px-50 pt-10 sm:pt-16 md:pt-24 lg:pt-40 w-full">

      {/* Text */}
      <div className="order-2 md:order-1 flex flex-col items-start justify-center">
        <h1 className="Name text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold pb-2">
          Hi,
        </h1>

        <h1 className="Name text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold pb-5">
          I'm Anjali Bhati
        </h1>

        <p className="name text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold pb-1">
          SOFTWARE DEVELOPER
        </p>

        <p className="name text-base sm:text-lg md:text-xl lg:text-xl text-[rgb(210_210_210)]">
          I’m passionate about technology, creativity, and building
          digital experiences that are simple and meaningful.
        </p>

        <div className="pt-7 sm:pt-9 text-base sm:text-lg flex flex-wrap gap-4">
          <button
            className="cursor-pointer bg-gradient-to-r from-purple-500 to-indigo-500 hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-0.5 font-bold text-white rounded-full px-9 py-2 transition-all"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </button>

          <button className="cursor-pointer flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-0.5 font-bold text-white rounded-full px-9 py-2 transition-all"
            onClick={() => {
              const link = document.createElement("a");
              link.href = resume; link.download = "Anjali_Bhati_Resume.pdf"; link.click();
            }}><DownloadIcon />Resume</button>
        </div>
      </div>

      {/* Image */}
      <div className="order-1 md:order-2 flex items-center justify-center md:justify-end mb-10 md:mb-0">
        <img
          src={logo}
          alt="Anjali Bhati"
          className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-8 border-white-800"
        />
      </div>

    </div>
  );
}

export default Home;