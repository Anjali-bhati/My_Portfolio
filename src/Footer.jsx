function Footer() {
  return (
    <footer className="w-full py-8 text-center border-t border-white/10 mt-10">
      <p className="text-gray-400 text-sm">
        © 2026 Anjali Bhati. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-3">
        <a href="https://www.linkedin.com/in/anjali-bhati2006/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 text-sm">
          LinkedIn
        </a>
        <a href="https://github.com/Anjali-bhati" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 text-sm">
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;