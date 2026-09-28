import devlioLogo from "../../assets/DevLio.png";
function Footer() {
  return (
    <footer
      id="about"
      className="border-t border-white/10 px-6 py-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <img src={devlioLogo} alt="DevLio" className="h-25 w-auto" />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/blackswan15/devlio"
            target="_blank"
            rel="noreferrer"
            className="text-white/30 transition hover:text-white"
            aria-label="GitHub"
          >
            GitHub
          </a>

          <span className="text-xs text-white/20">
            © {new Date().getFullYear()} DevLio
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;