import React, { useEffect, useState } from "react";

const MenuIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 7H20M4 12H20M4 17H20"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CloseIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 6L18 18M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-inner">
        <a
          href="#home"
          className="nav-brand"
          onClick={() => setOpen(false)}
        >
          <span className="logo-mark">KA</span>
          <span className="brand-text">CompiledWorrks</span>
        </a>

        <div className="nav-links" />

        <a
          className="nav-cta accent"
          href="https://drive.google.com/file/d/1qvrh5gGu9AGxw94AxEAS15StDe3YdOuV/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Resumé
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon className="nav-icon" /> : <MenuIcon className="nav-icon" />}
        </button>
      </div>

      <div className={`nav-drawer ${open ? "open" : ""}`}>
        <ul className="nav-drawer-links">
          <li>
            <a
              className="nav-link accent"
              href="https://drive.google.com/file/d/1qvrh5gGu9AGxw94AxEAS15StDe3YdOuV/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              Resumé
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
