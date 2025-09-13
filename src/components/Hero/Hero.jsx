import React from "react";
import "./Hero.css";
import heroImg from "../../assets/my-pic.jpg";
import cvFile from "../../assets/Professional CV Resume.pdf"; // ✅ import CV

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>
          Hi, I am <span className="highlight">Abdul Raheem</span>
        </h1>
        <h2>Front-End Developer</h2>
        <p>
          I build modern, responsive, and user-friendly web applications. Always
          learning, always creating.
        </p>

        <a href={cvFile} download>
          <button className="hero-btn">
            <span className="btn-text">Download CV</span>
            <span className="btn-hover-text">Download PDF</span>
          </button>
        </a>
      </div>

      <div className="hero-img">
        <img src={heroImg} alt="Abdul Raheem profile" />
      </div>
    </section>
  );
};

export default Hero;
