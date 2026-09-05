import { useState } from "react";
import emailjs from "@emailjs/browser";
 
function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); 
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
 
    emailjs
      .send(
        "Portfolio_service",     
        "contact_template",     
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "37xU9BUEMmhfs4_Wv"     // Public Key
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setStatus("error");
      });
  };

  return (
    <div className="w-full max-w-7xl mx-auto pt-10 sm:pt-16 md:pt-15 lg:pt-25 lg:px-20">

      <div className="px-4 md:px-8 lg:px-2 text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Contact Me
        </h1>
        <div className="w-40 sm:w-52 md:w-60 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-8"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 w-full px-4 md:px-8 lg:px-2">

        <div className="w-full text-left order-1 md:col-start-1 md:row-start-1">

          <p className="text-gray-200 text-lg leading-relaxed max-w-md mb-8">
            I'm always open to discussing new projects, opportunities, or
            simply connecting. Feel free to reach out!
          </p>

          <div className="flex flex-col gap-7 max-w-full sm:max-w-sm md:max-w-md">
            <div className="bg-white/5 border border-white/20 rounded-xl px-5 py-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/15 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-purple-400">
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-gray-100 text-lg">Email</p>
                <p className="text-white text-sm font-semibold">anjalibhati132@gmail.com</p>
              </div>
            </div>
            <div className="bg-white/5 border border-white/20 rounded-xl px-5 py-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/15 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-purple-400">
                  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-gray-100 text-lg">Location</p>
                <p className="text-white text-sm font-semibold">Khategaon, Dewas, Madhya Pradesh</p>
              </div>
            </div>

          </div>
        </div>

        <div className="w-full text-left border border-white/20 rounded-xl px-5 pt-4 pb-6 order-2 md:col-start-2 md:row-start-1 md:row-span-2 flex flex-col">

          <form onSubmit={handleSubmit} className="flex flex-col flex-1">

            <div className="p-3">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-purple-400"/>
            </div>

            <div className="p-3">
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-purple-400"/>
            </div>

            <div className="p-3 flex-1">
              <textarea name="message" placeholder="Your Message" rows={5} value={formData.message} onChange={handleChange}
                required className="w-full h-full min-h-[140px] bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-purple-400 resize-none" />
            </div>

             {status === "success" && (
              <p className="px-3 text-green-400 text-sm mb-2">Message sent successfully! I'll get back to you soon.</p>
            )}
            {status === "error" && (
              <p className="px-3 text-red-400 text-sm mb-2">Something went wrong. Please try again or email me directly.</p>
            )}
 
            <div className="p-3">
              <button type="submit" disabled={status === "sending"} 
              className="cursor-pointer bg-gradient-to-r from-purple-500 to-indigo-500 hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-0.5 text-xl font-bold text-white rounded-full px-10 py-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

        </div>

        <div className="order-3 md:col-start-1 md:row-start-2 flex flex-col gap-5 pt-4 md:self-end">
          <h2 className="text-2xl text-gray-200 font-semibold">Find Me On</h2>
          <div className="flex gap-6">

            <a href="https://www.linkedin.com/in/anjali-bhati2006/" target="_blank" rel="noopener noreferrer" 
              className="w-14 h-14 flex items-center justify-center border border-white/50 rounded-lg hover:border-cyan-400 transition">
              <i className="devicon-linkedin-plain colored text-4xl"></i>
            </a>
            <a href="https://github.com/Anjali-bhati" target="_blank" rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center border border-white/50 rounded-lg hover:border-purple-400 transition">
              <i className="devicon-github-original text-4xl text-white"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;