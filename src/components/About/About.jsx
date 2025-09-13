import React, { useEffect, useRef, useState } from "react";
import "./about.css";

const TimelineItem = ({ year, title, desc }) => {
  const [showDesc, setShowDesc] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      className="timeline-item"
      onMouseEnter={() => !isMobile && setShowDesc(true)}
      onMouseLeave={() => !isMobile && setShowDesc(false)}
    >
      <span>{year}</span>
      <p>{title}</p>

      {/* Description */}
      {(isMobile && showDesc) || !isMobile ? (
        <p className={`timeline-desc ${isMobile && showDesc ? "show" : ""}`}>
          {desc}
        </p>
      ) : null}

      {/* Read More button for mobile */}
      {isMobile && (
        <button
          className="timeline-btn"
          onClick={() => setShowDesc((prev) => !prev)}
        >
          {showDesc ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

const About = () => {
  const [showButton, setShowButton] = useState(true);
  const aboutRef = useRef(null);
  const ignoreObserver = useRef(false);
  const timeoutRef = useRef(null);

  const handleLearnMore = () => {
    const skills = document.getElementById("skills");
    if (!skills) return;

    setShowButton(false);
    ignoreObserver.current = true;

    const top = skills.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: top - 100,
      behavior: "smooth",
    });

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      ignoreObserver.current = false;
    }, 900);
  };

  useEffect(() => {
    const aboutEl = aboutRef.current;
    if (!aboutEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.5 && !ignoreObserver.current) {
            setShowButton(true);
          }
        });
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    observer.observe(aboutEl);

    return () => {
      observer.disconnect();
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-content">
        <h2>
          About <span className="highlight">Me</span>
        </h2>
        <p>
          I’m Abdul, a passionate <b>Front-End Developer</b> who loves creating
          modern, responsive, and user-friendly web applications. I enjoy
          learning new technologies and improving my skills every day.
        </p>
        <p>
          My goal is to craft clean, interactive, and meaningful digital
          experiences that leave a lasting impact.
        </p>

        {/* Timeline */}
        <div className="timeline">
          {[
            {
              year: "2025 - Present",
              title: "BS Software Engineering - UMT",
              desc: "Doing Software Engineering at UMT, 1st semester completed with 3.51 CGPA.",
            },
            {
              year: "2025 - Present",
              title: "Front-End Developer (React + Tailwind Projects)",
              desc: "Working as a Front-End Developer intern at TBox Solutions. Focused on React and Tailwind projects, moving forward to learn backend development, with some foundational knowledge already.",
            },
            {
              year: "2022 - 2023",
              title: "Graphic Designer",
              desc: "Experienced in video editing (Adobe Premiere), logo & basic design creation with Canva, and photo editing in Lightroom & InShot.",
            },
          ].map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>

        {/* Skills */}
        <h2 id="skills">
          My <span className="highlight">Skills</span>
        </h2>
        <div className="skills">
          <div className="skill">
            <span>HTML</span>
            <div className="bar">
              <div style={{ width: "90%" }}></div>
            </div>
            <small>90%</small>
          </div>
          <div className="skill">
            <span>CSS</span>
            <div className="bar">
              <div style={{ width: "85%" }}></div>
            </div>
            <small>85%</small>
          </div>
          <div className="skill">
            <span>JavaScript</span>
            <div className="bar">
              <div style={{ width: "75%" }}></div>
            </div>
            <small>75%</small>
          </div>
          <div className="skill">
            <span>React JS</span>
            <div className="bar">
              <div style={{ width: "70%" }}></div>
            </div>
            <small>70%</small>
          </div>
          <div className="skill">
            <span>Graphic Design (Basic)</span>
            <div className="bar">
              <div style={{ width: "60%" }}></div>
            </div>
            <small>60%</small>
          </div>
          <div className="skill">
            <span>Content Writing</span>
            <div className="bar">
              <div style={{ width: "70%" }}></div>
            </div>
            <small>70%</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
