import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import devlioLogo from "../../assets/DevLio.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#09090b]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <img src={devlioLogo} alt="DevLio" className="h-25 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-white/50 transition hover:text-white"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-white/50 transition hover:text-white"
          >
            How it works
          </a>

          <a
            href="#about"
            className="text-sm text-white/50 transition hover:text-white"
          >
            About
          </a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg px-4 py-2 text-sm text-white/60 transition hover:bg-white/5 hover:text-white">
            Login
          </button>

          <button className="group flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90">
            Get started

            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((value) => !value)}
          className="rounded-lg p-2 text-white/70 transition hover:bg-white/5 md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#09090b] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            <a href="#features" onClick={() => setMenuOpen(false)}>
              Features
            </a>

            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
              How it works
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <button className="rounded-lg border border-white/10 px-4 py-2 text-sm">
              Login
            </button>

            <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black">
              Get started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;