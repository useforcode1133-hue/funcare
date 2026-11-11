
import "./index.css";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
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

export default function Hero() {
  const features = [
    {
      title: "Safe & Nurturing",
      description: "A secure environment for happy learning",
      icon: "♡",
      className: "feature-pink",
    },
    {
      title: "Expert Teachers",
      description: "Caring educators who love what they do",
      icon: "♧",
      className: "feature-green",
    },
    {
      title: "Holistic Growth",
      description: "Learning that develops mind, body & heart",
      icon: "▤",
      className: "feature-blue",
    },
  ];

  return (
    <section className="hero-section" id="home">
      {/* Complete Hero Background Image */}
      <div className="hero-bg-image"></div>

      {/* Hero Text Overlay */}
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-tagline">
            LEARN · PLAY · GROW
          </p>

          <h1 className="hero-title">
            Inspiring Young Minds,
            <span>Building Bright Futures!</span>
          </h1>

          <p className="hero-description">
            A joyful place where curiosity grows, creativity
            shines and every child becomes their best self.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <a href="#contact" className="hero-primary-btn">
              Book a Free Visit
              <span className="button-arrow">
                <ArrowIcon />
              </span>
            </a>

            <a href="#about" className="hero-secondary-btn">
              Learn More
              <span className="secondary-arrow">
                <ArrowIcon />
              </span>
            </a>
          </div>

          {/* Features */}
          <div className="hero-features">
            {features.map((feature) => (
              <div className="hero-feature" key={feature.title}>
                <div className={`feature-icon ${feature.className}`}>
                  {feature.icon}
                </div>

                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
