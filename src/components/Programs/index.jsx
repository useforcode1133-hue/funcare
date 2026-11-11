
import "./index.css";

const programs = [
  {
    id: 1,
    title: "Baby Little Stars",
    description: "Early development for children 1–2 years",
    color: "purple",
    action: "Explore Now",
    icon: "star",
  },
  {
    id: 2,
    title: "Little Explorers",
    description: "Activities for children 2–3 years",
    color: "green",
    action: "Explore Now",
    icon: "sailboat",
  },
  {
    id: 3,
    title: "First Steps",
    description: "Activities for children 3–4 years",
    color: "orange",
    action: "Explore Now",
    icon: "abc",
  },
  {
    id: 4,
    title: "Little Einsteins",
    description: "Learning for children 4–5 years",
    color: "pink",
    action: "Explore Now",
    icon: "baby",
  },
];

function StarIcon() {
  return (
    <svg viewBox="0 0 100 100" className="program-svg">
      <path
        d="M50 8 C56 8 60 25 65 29 L82 29
        C90 30 90 40 83 46 L70 57 L75 76
        C77 85 69 90 61 85 L50 77 L35 86
        C27 90 20 83 23 75 L29 57 L15 45
        C8 38 12 29 21 29 L36 29 L44 13
        C46 10 48 8 50 8 Z"
        fill="#6741C7"
      />

      <g fill="#FFFFFF">
        <circle cx="39" cy="44" r="4" />
        <circle cx="61" cy="44" r="4" />
      </g>

      <path
        d="M38 57 Q50 69 62 57"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SailboatIcon() {
  return (
    <svg viewBox="0 0 100 100" className="program-svg">
      <path
        d="M48 12V67"
        stroke="#72B52B"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      <path
        d="M44 18L18 61Q17 64 21 64H44Z"
        fill="#A5D83F"
      />

      <path
        d="M53 25L53 61H78Q83 61 80 57Z"
        fill="#72B52B"
      />

      <path
        d="M12 65H88L77 80Q73 85 66 85H34Q25 85 20 78Z"
        fill="#82C52D"
        stroke="#72B52B"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <path
        d="M20 69H80"
        stroke="#A5D83F"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <circle cx="36" cy="75" r="3.5" fill="#FFFFFF" />
      <circle cx="50" cy="75" r="3.5" fill="#FFFFFF" />
      <circle cx="64" cy="75" r="3.5" fill="#FFFFFF" />
    </svg>
  );
}

function ABCIcon() {
  return (
    <svg viewBox="0 0 100 100" className="program-svg">
      <rect x="35" y="8" width="30" height="30" rx="3" fill="#FF941F" />
      <rect x="20" y="42" width="30" height="30" rx="3" fill="#FF941F" />
      <rect x="52" y="42" width="30" height="30" rx="3" fill="#FF941F" />

      <g
        fill="#FFFFFF"
        fontFamily="Fredoka, sans-serif"
        fontSize="22"
        fontWeight="700"
        textAnchor="middle"
      >
        <text x="50" y="31">A</text>
        <text x="35" y="65">B</text>
        <text x="67" y="65">C</text>
      </g>
    </svg>
  );
}

function BabyIcon() {
  return (
    <svg viewBox="0 0 100 100" className="program-svg">
      <circle
        cx="50"
        cy="52"
        r="32"
        fill="#FFF0F5"
        stroke="#FF477E"
        strokeWidth="3"
      />

      <circle cx="18" cy="48" r="10" fill="#FFB3CB" stroke="#FF477E" strokeWidth="2" />
      <circle cx="82" cy="48" r="10" fill="#FFB3CB" stroke="#FF477E" strokeWidth="2" />

      <path
        d="M25 34 Q32 14 50 18 Q68 14 75 34"
        fill="#FF477E"
      />

      <circle cx="39" cy="49" r="4" fill="#101B5A" />
      <circle cx="61" cy="49" r="4" fill="#101B5A" />

      <circle cx="31" cy="60" r="5" fill="#FFB3CB" />
      <circle cx="69" cy="60" r="5" fill="#FFB3CB" />

      <path
        d="M40 62 Q50 74 60 62"
        fill="none"
        stroke="#FF477E"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M45 8 Q50 2 55 8"
        fill="none"
        stroke="#FF477E"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProgramIcon({ type }) {
  switch (type) {
    case "star":
      return <StarIcon />;

    case "sailboat":
      return <SailboatIcon />;

    case "abc":
      return <ABCIcon />;

    case "baby":
      return <BabyIcon />;

    default:
      return null;
  }
}

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
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

function ProgramCard({ program }) {
  return (
    <article className={`program-card program-${program.color}`}>
      <div className="program-icon">
        <ProgramIcon type={program.icon} />
      </div>

      <h3 className="program-title">{program.title}</h3>

      <p className="program-description">{program.description}</p>

      <a href="#contact" className="program-link">
        {program.action}
        <ArrowIcon />
      </a>
    </article>
  );
}

export default function Programs() {
  return (
    <section className="programs-section" id="programs">
      <div className="programs-container">
        <div className="programs-heading">
          <div className="programs-title-row">
            <span className="heading-dot dot-green" />
            <span className="heading-dot dot-pink" />

            <h2>Our Programs</h2>

            <span className="heading-dot dot-orange" />
            <span className="heading-dot dot-green" />
          </div>

          <p>
            Age-appropriate programs designed to spark curiosity
            and build confidence.
          </p>
        </div>

        <div className="programs-grid">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
