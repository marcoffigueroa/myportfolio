import { useLang } from '../i18n';

const NAV_KEYS = ['home', 'projects', 'posts', 'about', 'contact'];

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const { t } = useLang();

  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-zinc-950/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-zinc-400 hover:text-white text-3xl focus:outline-none cursor-pointer transition"
        aria-label="Close menu"
      >
        &times;
      </button>

      <nav className="flex flex-col items-center gap-6">
        {NAV_KEYS.map((key, i) => (
          <a
            key={key}
            href={`#${key}`}
            onClick={() => setMenuOpen(false)}
            className={`text-2xl font-semibold text-zinc-200 hover:text-white transition-all duration-300 ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
          >
            {t.nav[key]}
          </a>
        ))}
      </nav>
    </div>
  );
};
