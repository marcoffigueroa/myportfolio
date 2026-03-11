import { useEffect } from "react";
import Logo from "../images/LogoMF.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useLang } from "../i18n";

const NAV_KEYS = ['home', 'projects', 'posts', 'about', 'contact'];

const LanguageToggle = ({ lang, onToggle }) => (
  <button
    onClick={onToggle}
    className="relative flex items-center w-16 h-7 rounded-full bg-zinc-800 border border-zinc-700 cursor-pointer select-none transition-colors duration-200 hover:border-zinc-600"
    aria-label="Toggle language"
  >
    <span className={`absolute left-1 text-[10px] font-bold transition-colors duration-200 ${lang === 'en' ? 'text-zinc-500' : 'text-blue-400'}`}>ES</span>
    <span className={`absolute right-1 text-[10px] font-bold transition-colors duration-200 ${lang === 'en' ? 'text-blue-400' : 'text-zinc-500'}`}>EN</span>
    <span
      className={`absolute top-0.5 w-6 h-6 rounded-full bg-zinc-600 shadow transition-transform duration-200 ${
        lang === 'en' ? 'translate-x-[34px]' : 'translate-x-0.5'
      }`}
    />
  </button>
);

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { lang, t, toggleLang } = useLang();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-mono text-lg font-bold text-white flex items-center gap-2 tracking-tight"
          >
            <img src={Logo} alt="Logo" className="h-7" />
            marco<span className="text-blue-400">.figueroa</span>
          </a>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle lang={lang} onToggle={toggleLang} />
            <button
              className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-white transition"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {NAV_KEYS.map((key) => (
              <a
                key={key}
                href={`#${key}`}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {t.nav[key]}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-5">
            <LanguageToggle lang={lang} onToggle={toggleLang} />
            <a href="https://www.linkedin.com/in/marco-figueroa-533848314/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-xl text-zinc-400 hover:text-blue-400 transition-colors duration-200"
              />
            </a>
            <a href="https://github.com/marcoffigueroa" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-xl text-zinc-400 hover:text-white transition-colors duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
