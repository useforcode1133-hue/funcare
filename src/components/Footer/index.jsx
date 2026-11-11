import { Logo } from "../Navbar";
import "./index.css";

const programs = [
    { name: "Baby Little Stars", icon: "book", href: "#baby-little-stars" },
    { name: "Little Explorers", icon: "star", href: "#little-explorers" },
    { name: "First Steps", icon: "sprout", href: "#first-steps" },
    { name: "Little Einsteins", icon: "heart", href: "#little-einsteins" },
];

const iconPositions = {
    location: 0,
    phone: 1,
    email: 2,
    book: 3,
    star: 4,
    sprout: 5,
    heart: 6,
};

function FooterSvgIcon({ icon, className = "" }) {
    const position = iconPositions[icon] ?? 0;

    return (
        <svg
            className={`footer-svg-icon ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox={`${position * 64} 0 64 64`}
            style={{ overflow: "hidden" }}
            aria-hidden="true"
            focusable="false"
        >
            <defs>
                <filter id="footer-shadow" x="-30%" y="-30%" width="160%" height="160%">
                    <feDropShadow
                        dx="0.8"
                        dy="2"
                        stdDeviation="1.8"
                        floodColor="#45277B"
                        floodOpacity="0.28"
                    />
                </filter>

                <linearGradient id="pinGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#FFB28D" />
                    <stop offset="0.45" stopColor="#FF805F" />
                    <stop offset="1" stopColor="#E84B36" />
                </linearGradient>

                <linearGradient id="phoneGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#D1F3FF" />
                    <stop offset="0.5" stopColor="#8DD5F4" />
                    <stop offset="1" stopColor="#5EADE0" />
                </linearGradient>

                <linearGradient id="mailGrad" x1="0" y1="0" x2="0.3" y2="1">
                    <stop offset="0" stopColor="#F9FFFF" />
                    <stop offset="1" stopColor="#A9D7F3" />
                </linearGradient>

                <linearGradient id="bookGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#FFFFFF" />
                    <stop offset="1" stopColor="#BDE5FA" />
                </linearGradient>

                <linearGradient id="blueCover" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#9AE0FF" />
                    <stop offset="1" stopColor="#4BA9E0" />
                </linearGradient>

                <linearGradient id="yellowGrad" x1="0" y1="0" x2="0.8" y2="1">
                    <stop offset="0" stopColor="#FFF17C" />
                    <stop offset="0.55" stopColor="#FFD33D" />
                    <stop offset="1" stopColor="#F9AE00" />
                </linearGradient>

                <linearGradient id="greenGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#C4F779" />
                    <stop offset="0.5" stopColor="#91DF42" />
                    <stop offset="1" stopColor="#59B526" />
                </linearGradient>

                <linearGradient id="heartGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#FFB5D3" />
                    <stop offset="0.5" stopColor="#FF80B5" />
                    <stop offset="1" stopColor="#F34A91" />
                </linearGradient>
            </defs>

            {/* 1. Location Pin */}
            <g transform="translate(0 0)" filter="url(#footer-shadow)">
                <path
                    d="M32 7 C22.5 7 15.5 14.3 15.5 23.2 C15.5 34.1 32 53 32 53 C32 53 48.5 34.1 48.5 23.2 C48.5 14.3 41.5 7 32 7Z"
                    fill="url(#pinGrad)"
                />
                <path
                    d="M32 10 C24.2 10 18.5 16.2 18.5 23.2 C18.5 32 32 47.5 32 47.5 C32 47.5 45.5 32 45.5 23.2 C45.5 16.2 39.8 10 32 10Z"
                    fill="#FF9B79"
                    opacity="0.4"
                />
                <circle cx="32" cy="23" r="9.5" fill="#EFA18A" />
                <circle cx="32" cy="23" r="6.8" fill="#9670D1" />
                <circle cx="32" cy="23" r="4.5" fill="#BDA2ED" />
                <ellipse
                    cx="28.7"
                    cy="18.7"
                    rx="3.2"
                    ry="2.1"
                    fill="#FFE2D5"
                    opacity="0.9"
                />
            </g>

            {/* 2. Phone */}
            <g transform="translate(64 0)" filter="url(#footer-shadow)">
                <path
                    d="M18.5 15.8 C16.8 17.1 15.2 20.2 16.4 23.8 C19.7 34.1 29.5 43.5 39.3 46.4 C42.8 47.5 46.2 45.6 47.2 43.3 L43.3 35.7 C42.6 34.4 41.2 34 39.9 34.7 L35.4 37.2 C31.5 35.1 27.8 31.5 25.7 27.5 L28.2 23 C29 21.7 28.5 20.3 27.2 19.6 L20 15.8 C19.5 15.5 19 15.5 18.5 15.8Z"
                    fill="url(#phoneGrad)"
                />
                <path
                    d="M19.5 19.1 C18.3 21 19.6 25 22.4 29.1 C26.2 34.7 32.5 40.1 38.5 42.5"
                    fill="none"
                    stroke="#E9FAFF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.7"
                />
                <path
                    d="M18 20 L23.7 23.2 M37.2 38.2 L43.5 41.2"
                    stroke="#DFF7FF"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                />
            </g>

            {/* 3. Email */}
            <g transform="translate(128 0)" filter="url(#footer-shadow)">
                <rect
                    x="14"
                    y="19"
                    width="36"
                    height="26"
                    rx="5"
                    fill="url(#mailGrad)"
                />
                <path
                    d="M15.5 21.5 L32 34 L48.5 21.5"
                    fill="none"
                    stroke="#7DB6DE"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                />
                <path
                    d="M15 42 L27 31.5 M49 42 L37 31.5"
                    fill="none"
                    stroke="#A9D4EF"
                    strokeWidth="2"
                />
                <path
                    d="M17 22 L30 31.5"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M18 41 L46 41"
                    stroke="#C1E4F8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
            </g>

            {/* 4. Open Book */}
            <g transform="translate(192 0)" filter="url(#footer-shadow)">
                <path
                    d="M32 15 C24 10 13 11 12 17 L12 41 C20 37 27 39 32 44Z"
                    fill="url(#blueCover)"
                />
                <path
                    d="M32 15 C40 10 51 11 52 17 L52 41 C44 37 37 39 32 44Z"
                    fill="url(#blueCover)"
                />
                <path
                    d="M29.5 18 C23 14 16 15 15 19 L15 37 C21 35 26 37 29.5 40Z"
                    fill="url(#bookGrad)"
                />
                <path
                    d="M34.5 18 C41 14 48 15 49 19 L49 37 C43 35 38 37 34.5 40Z"
                    fill="url(#bookGrad)"
                />
                <path
                    d="M32 15 L32 44"
                    stroke="#4C9CD5"
                    strokeWidth="2.4"
                />
                <g
                    stroke="#A2CDEB"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                >
                    <path d="M19 22 L26 22 M19 27 L26 27 M19 32 L26 32" />
                    <path d="M38 22 L45 22 M38 27 L45 27 M38 32 L45 32" />
                </g>
                <path
                    d="M17 17 L24 17"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </g>

            {/* 5. Star */}
            <g transform="translate(256 0)" filter="url(#footer-shadow)">
                <path
                    d="M32 8 L39.5 23 L56 25.5 L44 37 L47 53 L32 45 L17 53 L20 37 L8 25.5 L24.5 23Z"
                    fill="#E8A700"
                />
                <path
                    d="M32 6 L39.5 21.5 L56 24 L44 36 L47 52 L32 44 L17 52 L20 36 L8 24 L24.5 21.5Z"
                    fill="url(#yellowGrad)"
                />
                <path
                    d="M24.5 21.5 L32 9 L35.5 22"
                    fill="none"
                    stroke="#FFF7B8"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                />
                <path
                    d="M13 25 L23 27"
                    stroke="#FFEFA0"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </g>

            {/* 6. Sprout */}
            <g transform="translate(320 0)" filter="url(#footer-shadow)">
                <path
                    d="M32 51 L32 28"
                    stroke="#63B52C"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                <path
                    d="M32 29 C18 26 8 13 14 10 C24 5 34 17 32 29Z"
                    fill="url(#greenGrad)"
                />
                <path
                    d="M32 28 C45 25 56 12 50 9 C40 4 30 17 32 28Z"
                    fill="url(#greenGrad)"
                />
                <path
                    d="M32 40 C22 38 15 29 20 27 C27 24 34 33 32 40Z"
                    fill="#A9EB5B"
                />
                <path
                    d="M18 51 L46 51"
                    stroke="#75C738"
                    strokeWidth="5"
                    strokeLinecap="round"
                />
                <path
                    d="M17 14 C22 13 27 20 29 25"
                    fill="none"
                    stroke="#D9FFA6"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <path
                    d="M47 13 C42 13 37 20 35 25"
                    fill="none"
                    stroke="#D9FFA6"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </g>

            {/* 7. Heart */}
            <g transform="translate(384 0)" filter="url(#footer-shadow)">
                <path
                    d="M32 52 C26 46 8 34 8 22 C8 10 23 5 32 17 C41 5 56 10 56 22 C56 34 38 46 32 52Z"
                    fill="#E43C80"
                />
                <path
                    d="M32 49 C26 43 11 32 11 22 C11 12 23 8 32 19 C41 8 53 12 53 22 C53 32 38 43 32 49Z"
                    fill="url(#heartGrad)"
                />
                <path
                    d="M17 19 C18 13 25 13 29 18"
                    fill="none"
                    stroke="#FFD5E7"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                />
                <ellipse
                    cx="19"
                    cy="25"
                    rx="3"
                    ry="5"
                    fill="#FFBED9"
                    opacity="0.65"
                />
            </g>
        </svg>
    );
}

function Footer() {
    return (
        <footer className="funcare-footer">
            <div className="footer-main">
                {/* Brand */}
                <div className="footer-brand">
                    <div className="footer-logo">
                        <Logo />
                    </div>

                    <p className="footer-description">
                        Where little minds grow, big dreams begin,
                        and every day is filled with fun!
                    </p>

                    <div className="footer-brand-decoration" aria-hidden="true">
                        <span className="footer-decoration-star">✦</span>
                        <span className="footer-decoration-dot" />
                    </div>
                </div>

                {/* Quick Links */}
                <nav className="footer-links" aria-label="Quick Links">
                    <h3>Explore</h3>
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#programs">Our Programs</a>
                    <a href="#curriculum">Curriculum</a>
                </nav>

                {/* Our Programs */}
                <div className="footer-links footer-programs">
                    <h3>Our Programs</h3>

                    {programs.map((program) => (
                        <a
                            href={program.href}
                            className="footer-program-link"
                            key={program.name}
                        >
                            <FooterSvgIcon icon={program.icon} />
                            <span>{program.name}</span>
                        </a>
                    ))}
                </div>

                {/* Get in Touch */}
                <div className="footer-links footer-contact">
                    <h3>Get in Touch</h3>

                    <div className="footer-contact-item footer-location">
                        <FooterSvgIcon icon="location" />
                        <span>
                            Madhapur, Hyderabad,
                            <br />
                            Telangana, India
                        </span>
                    </div>

                    <a
                        href="tel:+919876543210"
                        className="footer-contact-item"
                    >
                        <FooterSvgIcon icon="phone" />
                        <span>+91 98765 43210</span>
                    </a>

                    <a
                        href="mailto:hello@funcare.in"
                        className="footer-contact-item"
                    >
                        <FooterSvgIcon icon="email" />
                        <span>hello@funcare.in</span>
                    </a>

                    {/* Social Icons */}
                    <div className="footer-socials">
                        <a href="#" aria-label="Instagram">
                            <svg viewBox="0 0 24 24">
                                <rect x="3" y="3" width="18" height="18" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle
                                    cx="17.5"
                                    cy="6.5"
                                    r="1"
                                    fill="currentColor"
                                    stroke="none"
                                />
                            </svg>
                        </a>

                        <a href="#" aria-label="YouTube">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23 7a3 3 0 0 0-2-2C19 4.5 12 4.5 12 4.5s-7 0-9 .5a3 3 0 0 0-2 2A21 21 0 0 0 .5 12 21 21 0 0 0 1 17a3 3 0 0 0 2 2c2 .5 9 .5 9 .5s7 0 9-.5a3 3 0 0 0 2-2 21 21 0 0 0 .5-5A21 21 0 0 0 23 7ZM9.5 15.5v-7l6 3.5Z" />
                            </svg>
                        </a>

                        <a href="#" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM3.5 8.5h3V21h-3ZM9 8.5h3v1.7a3.5 3.5 0 0 1 3.2-1.9c3.3 0 4.3 2.1 4.3 5.1V21h-3v-6.7c0-1.6-.3-3-2-3s-2.5 1.2-2.5 3V21H9Z" />
                            </svg>
                        </a>

                        <a href="#" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.6V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.2v3h2.8v8Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} FunCare Preschool.
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;