import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const RESUME_URL = "/Naveen_negi_resume.pdf"; // put your PDF in /public

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-pink-900/30 bg-[#160910]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo and Name */}
        <a href="#home" className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-pink-400/20 bg-gradient-to-br from-[#2a0f1b] to-[#140810] font-display text-lg italic text-white">
            NN
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">
            Naveen Negi
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[15px] text-pink-100/60 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-pink-400/25 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
          >
            Resume
          </a>
        </div>

        {/* Mobile button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-pink-400/20 text-white lg:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col border-t border-pink-900/30 px-6 pb-6 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-pink-900/30 py-3 text-pink-100/70"
            >
              {link.name}
            </a>
          ))}
          <a
            href={RESUME_URL}
            className="mt-5 rounded-full border border-pink-400/25 px-5 py-3 text-center font-semibold text-white"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
