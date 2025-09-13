import React, { useState } from "react";
import "./Project.css";

const projects = [
  {
    title: "Stone Paper Scissors",
    description: "Classic Stone Paper Scissors game in JavaScript.",
    image: "/assets/proj1.jpg",
    demoLink: "https://stone-paper-scissor-game-inky.vercel.app/",
    githubLink: "https://github.com/Abdul-Raheem-07/stone-paper-scissor-game.git"
  },
  {
    title: "Weather App",
    description: "Weather forecast app using API integration.",
    image: "/assets/Weather-App-Logo.png",
    demoLink: "https://weather-app-bkgr.vercel.app/",
    githubLink: "https://github.com/Abdul-Raheem-07/Weather-App.git"
  },
  {
    title: "E-commerce Site",
    description: "Responsive e-commerce front-end. (Work in Progress 🚧)",
    image: null,
    demoLink: null,
    githubLink: null
  },
  {
    title: "Digital Clock",
    description: "A simple digital clock app built with JS.",
    image: "/assets/Clock-App.png",
    demoLink: "https://github.com/Abdul-Raheem-07/Clock.git",
    githubLink: "https://github.com/yourname/digital-clock"
  },
  {
    title: "Calculator",
    description: "A functional calculator made with JavaScript.",
    image: "/assets/Calculator-App-Logo-.png",
    demoLink: "https://calculator-inky-nine-38.vercel.app/",
    githubLink: "https://github.com/Abdul-Raheem-07/calculator.git"
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="projects" id="projects">
      <h2>
        My <span className="highlight">Projects</span>
      </h2>

      <div className="projects-grid">
        {visible.map((p, i) => (
          <div className="project-card" key={i}>
            <div className="thumb">
              {p.image ? (
                <img src={p.image} alt={p.title} loading="lazy" />
              ) : (
                <div className="placeholder">
                  🚀 Coming Soon
                </div>
              )}
            </div>

            <div className="project-body">
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <div className="project-actions">
                {p.demoLink ? (
                  <a
                    className="btn primary"
                    href={p.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ▶ Play
                  </a>
                ) : (
                  <button className="btn disabled" disabled>
                    ▶ Play
                  </button>
                )}

                {p.githubLink ? (
                  <a
                    className="btn outline"
                    href={p.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                ) : (
                  <button className="btn disabled" disabled>
                    GitHub
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {projects.length > 3 && (
        <div className="show-more-wrap">
          <button
            className="show-more-btn"
            onClick={() => setShowAll((s) => !s)}
          >
            {showAll ? "Show Less" : `Show More (${projects.length - 3})`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
