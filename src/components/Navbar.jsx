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

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <CloseIcon className="modal-icon" />
        </button>
        <div className="resume-preview">
          <iframe
            src="https://drive.google.com/file/d/1qvrh5gGu9AGxw94AxEAS15StDe3YdOuV/preview"
            title="Resume"
            className="resume-iframe"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

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
          <span className="brand-text">Compiled-Works</span>
        </a>

        <div className="nav-links" />

        <a
          className="nav-cta accent"
          onClick={() => setResumeOpen(true)}
          style={{ cursor: "pointer" }}
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
              onClick={() => {
                setResumeOpen(true);
                setOpen(false);
              }}
              style={{ cursor: "pointer" }}
            >
              Resumé
            </a>
          </li>
        </ul>
      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </nav>
  );
};

export default Navbar;
