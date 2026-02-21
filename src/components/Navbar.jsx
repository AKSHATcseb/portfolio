import { useState } from "react";
import { Menu, X, Download, Code2 } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT - Logo */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-indigo-500/20">
            <Code2 className="text-indigo-400" size={20} />
          </div>
          <span className="font-bold text-lg text-white">akshat</span>
        </div>

        {/* CENTER - Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-slate-300 font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleScroll(item.id)}
                className="hover:text-indigo-400 transition"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* RIGHT - Resume + Hamburger */}
        <div className="flex items-center gap-3">

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg 
            bg-indigo-600 text-white text-sm 
            hover:bg-indigo-700 transition"
          >
            <Download size={16} />
            <span className="hidden sm:inline">Resume</span>
          </a>

          {/* Hamburger - Mobile Only */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">
          <ul className="flex flex-col items-center gap-6 py-6 text-slate-300">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="hover:text-indigo-400 transition text-lg"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}