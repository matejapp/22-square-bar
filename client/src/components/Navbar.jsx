import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Početna", to: "/" },
  { label: "O nama", to: "/#about" },
  { label: "Menu", to: "/menu" },
  { label: "Ketering", to: "/ketering" },
  { label: "Galerija", to: "/#gallery" },
  { label: "Kontakt", to: "/kontakt" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setActiveLink(null);
  }, [location.pathname]);

  const isActive = (to) => {
    if (to.includes("#")) return activeLink === to;
    return location.pathname === to;
  };

  const handleClick = (to) => {
    if (to.includes("#")) setActiveLink(to);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-500
          ${
            scrolled
              ? "bg-navy/85 backdrop-blur-md shadow-lift py-1"
              : "bg-transparent py-2"
          }`}
      >
        <div className="flex items-center justify-between px-4 md:px-6">
          <Link to="/" aria-label="22 Square Bar — početna" className="tap-target">
            <img
              src="/slike/download (1).webp"
              alt="22 Square Bar logo"
              className={`object-contain transition-all duration-500
                ${scrolled ? "w-14 h-14 md:w-16 md:h-16" : "w-20 h-20 md:w-24 md:h-24"}`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-1" aria-label="Glavna navigacija">
            {links.map(({ label, to }) => (
              <a
                key={to}
                href={to}
                onClick={() => handleClick(to)}
                aria-current={isActive(to) ? "page" : undefined}
                className={`relative font-semibold px-4 py-2 text-sm tracking-wide transition-colors
                  after:content-[''] after:absolute after:left-0 after:bottom-0
                  after:w-full after:h-[2px] after:bg-orange after:transition-transform
                  ${
                    isActive(to)
                      ? "text-orange after:scale-x-100"
                      : "text-white hover:text-orange after:scale-x-0 hover:after:scale-x-100"
                  }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden tap-target text-white text-3xl leading-none p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Otvori meni"
            aria-expanded={menuOpen}
          >
            &#9776;
          </button>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile side menu */}
      <nav
        className={`fixed top-0 left-0 h-full w-72 z-50 pt-20
          bg-navy/95 backdrop-blur-md
          transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Mobilna navigacija"
        aria-hidden={!menuOpen}
      >
        <button
          className="absolute top-4 right-6 text-white text-4xl leading-none tap-target"
          onClick={() => setMenuOpen(false)}
          aria-label="Zatvori meni"
        >
          &times;
        </button>
        <ul>
          {links.map(({ label, to }) => (
            <li key={to}>
              <a
                href={to}
                onClick={() => {
                  setMenuOpen(false);
                  handleClick(to);
                }}
                aria-current={isActive(to) ? "page" : undefined}
                className={`block px-8 py-4 text-lg font-medium transition-colors border-l-4
                  ${
                    isActive(to)
                      ? "text-orange border-orange bg-white/5"
                      : "text-white border-transparent hover:text-orange hover:border-orange/50"
                  }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
