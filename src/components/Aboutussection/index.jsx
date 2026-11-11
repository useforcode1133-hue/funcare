
import React from "react";
import "./index.css";

const images = {
  blocks:
    "https://res.cloudinary.com/sy3ts81q/image/upload/v1794419582/Gemini_Generated_Image_dsr1wbdsr1wbdsr1.png",
  reading:
    "https://res.cloudinary.com/sy3ts81q/image/upload/v1794419582/Gemini_Generated_Image_qssb1mqssb1mqssb.png",
  painting:
    "https://res.cloudinary.com/sy3ts81q/image/upload/v1794419571/Gemini_Generated_Image_qdfblhqdfblhqdfb.png",
  running:
    "https://res.cloudinary.com/sy3ts81q/image/upload/v1794419581/Gemini_Generated_Image_46df5f46df5f46df.png",
};

function BlueCloud() {
  return (
    <svg viewBox="0 0 120 70" className="about-doodle cloud-doodle">
      <path
        d="M17 55H99a16 16 0 0 0 0-32 25 25 0 0 0-47-6 20 20 0 0 0-31 17A12 12 0 0 0 17 55Z"
        fill="none"
        stroke="#20B5E8"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function YellowHeart() {
  return (
    <svg viewBox="0 0 80 80" className="about-doodle heart-doodle">
      <path
        d="M40 68 12 40C-2 23 18 7 32 20L40 29 48 20C62 7 82 23 68 40Z"
        fill="none"
        stroke="#FFC928"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PinkStar() {
  return (
    <svg viewBox="0 0 80 80" className="about-doodle pink-star">
      <path
        d="m40 5 9 23 25 2-19 16 6 25-21-13-21 13 6-25L11 30l25-2Z"
        fill="#F54283"
        stroke="#F54283"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GreenStar() {
  return (
    <svg viewBox="0 0 80 80" className="about-doodle green-star">
      <path
        d="m40 5 9 23 25 2-19 16 6 25-21-13-21 13 6-25L11 30l25-2Z"
        fill="#7FCB25"
        stroke="#7FCB25"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PurpleOutlineStar() {
  return (
    <svg viewBox="0 0 80 80" className="about-doodle purple-outline-star">
      <path
        d="m40 5 9 23 25 2-19 16 6 25-21-13-21 13 6-25L11 30l25-2Z"
        fill="none"
        stroke="#6741C7"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PurpleSpark() {
  return (
    <svg viewBox="0 0 80 80" className="about-doodle purple-spark">
      <path
        d="M40 8 46 31 68 40 46 47 40 70 33 47 11 40 33 31Z"
        fill="none"
        stroke="#6741C7"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PaperPlane() {
  return (
    <svg viewBox="0 0 140 110" className="about-doodle paper-plane">
      <path
        d="M18 18 L108 8 L72 78 L55 49 Z"
        fill="none"
        stroke="#F54283"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M55 49 L108 8 L38 39"
        fill="none"
        stroke="#F54283"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M55 49 L42 68 L38 39"
        fill="none"
        stroke="#F54283"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M85 82 C72 98 48 101 28 91 C12 83 8 72 15 61"
        fill="none"
        stroke="#F54283"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="7 9"
      />
    </svg>
  );
}

function CuriosityBadge() {
  return (
    <svg
      viewBox="0 0 220 200"
      className="curiosity-badge"
      role="img"
      aria-label="Where Curiosity Meets Confidence"
    >
      <path
        d="M110 8
        C132 -2 148 14 151 31
        C174 19 194 34 187 56
        C211 63 218 85 198 101
        C218 120 205 143 184 143
        C185 167 164 181 145 169
        C130 193 106 193 92 174
        C69 188 47 174 50 153
        C25 151 13 130 31 112
        C10 94 20 72 43 68
        C39 43 60 27 81 39
        C88 18 98 11 110 8Z"
        fill="#F54283"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      <g
        fill="#FFFFFF"
        fontFamily="Fredoka, sans-serif"
        fontWeight="600"
        textAnchor="middle"
      >
        <text x="110" y="76" fontSize="23">
          Where
        </text>
        <text x="110" y="105" fontSize="23">
          Curiosity
        </text>
        <text x="110" y="134" fontSize="23">
          Meets
        </text>
        <text x="110" y="163" fontSize="22">
          Confidence
        </text>
      </g>
    </svg>
  );
}

function AboutUs() {
  return (
    <section className="about-section" id="about">
      {/* Decorative SVGs */}
      <div className="about-decorations" aria-hidden="true">
        <div className="doodle-loop">
          <svg viewBox="0 0 260 100">
            <path
              d="M8 60 C45 15 95 -10 80 42
              C68 90 130 85 135 40
              C140 5 180 5 160 55
              C145 90 210 100 245 58"
              fill="none"
              stroke="#7FCB25"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <YellowHeart />
        <BlueCloud />
        <PinkStar />
        <GreenStar />
        <PurpleOutlineStar />
        <PurpleSpark />
        <PaperPlane />
      </div>

      {/* About heading */}
      <div className="about-header">
        <p className="about-eyebrow">About Us</p>

        <h2>
          Nurturing Genius in Every Child
        </h2>

        <p className="about-description">
          Where creativity is encouraged and every little curiosity meets
          confidence, our children grow, explore, and become their best selves.
        </p>
      </div>

      {/* Image gallery */}
      <div className="about-gallery">
        <div className="about-image image-blocks">
          <img
            src={images.blocks}
            alt="A young child building colorful blocks"
          />
        </div>

        <div className="about-image image-reading">
          <img
            src={images.reading}
            alt="Children enjoying a storybook together"
          />
        </div>

        <div className="about-image image-painting">
          <img
            src={images.painting}
            alt="A cheerful child painting with colorful hands"
          />
        </div>

        <div className="about-image image-running">
          <img
            src={images.running}
            alt="A group of happy preschool children running together"
          />
        </div>

        <div className="badge-container">
          <CuriosityBadge />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
