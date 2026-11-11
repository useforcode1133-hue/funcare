
import { useState } from "react";
import "./index.css";


function Logo() {
  return (
    <a href="#home" className="funcare-logo">
      <svg
        className="logo-svg"
        viewBox="0 0 160 52"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="FunCare - Where learning is fun"
      >
        <text
          x="0"
          y="32"
          fontFamily="Fredoka, sans-serif"
          fontWeight="700"
          fontSize="38"
          letterSpacing="-1"
          fill="#20B5E8"
        >
          Fun
        </text>

        <text
          x="67"
          y="32"
          fontFamily="Fredoka, sans-serif"
          fontWeight="700"
          fontSize="38"
          letterSpacing="-1"
          fill="#FF941F"
        >
          Care
        </text>

        <text
          x="1"
          y="47"
          fontFamily="Poppins, sans-serif"
          fontWeight="500"
          fontSize="9"
          fill="#101B5A"
        >
          Where learning is fun
        </text>
      </svg>
    </a>
  );
}


function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="#facebook" aria-label="Facebook">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.6V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.2v3h2.8v8h3.5Z" />
        </svg>
      </a>

      <a href="#instagram" aria-label="Instagram">
        <svg viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
          <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
        </svg>
      </a>

      <a href="#youtube" aria-label="YouTube">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.5 7.2a2.5 2.5 0 0 0-1.8-1.8C18.1 5 12 5 12 5s-6.1 0-7.7.4A2.5 2.5 0 0 0 2.5 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .5 4.8 2.5 2.5 0 0 0 1.8 1.8C5.9 19 12 19 12 19s6.1 0 7.7-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.5-4.8ZM10 15V9l5 3-5 3Z" />
        </svg>
      </a>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 3H9L11 8L8.5 9.5C9.7 12 12 14.3 14.5 15.5L16 13L21 15V19C21 20.1 20.1 21 19 21C9.6 20.5 3.5 14.4 3 5C3 3.9 3.9 3 5 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
      {open ? (
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7H20M4 12H20M4 17H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs", dropdown: true },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Parents", href: "#parents", dropdown: true },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="funcare-header">
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-social">
            <span>Follow us:</span>
            <SocialIcons />
          </div>

          <div className="topbar-message">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8Z"
                fill="#7FCB25"
              />
            </svg>
            <span>Learning today, leading tomorrow</span>
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                d="M12 2L15 9H22L16.5 13.5L18.5 21L12 16.5L5.5 21L7.5 13.5L2 9H9Z"
                fill="#FFC928"
              />
            </svg>
          </div>

          <a href="tel:+15558050000" className="topbar-phone">
            <PhoneIcon />
            <span>+1 555 80 50 000</span>
          </a>
        </div>
      </div>

      <div className="navbar-container">
        <nav className="main-navbar">
          <Logo />

          <div className={`nav-menu ${menuOpen ? "menu-open" : ""}`}>
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link ${index === 0 ? "nav-active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                {link.dropdown && (
                  <svg
                    className="nav-chevron"
                    viewBox="0 0 16 16"
                    width="12"
                    height="12"
                    fill="none"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </a>
            ))}
          </div>

          <a href="#contact" className="tour-button">
            Book a Tour
            <ArrowIcon />
          </a>

          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </nav>
      </div>
    </header>
  );
}
export { Logo };