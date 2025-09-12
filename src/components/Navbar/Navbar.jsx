import React from "react";
import "./Navbar.css";
// import logo from "../../assets/web-logo.png";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    // Agar page already top pe hai, refresh kar do
    if (window.scrollY === 0) {
      window.location.reload();
    } else {
      // warna "home" section pe scroll karo
      scrollToSection("home");
    }
  };

  return (
    <div className="Navbar">
      {/* <img
        src={logo}
        alt="logo"
        className="logo"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      /> */}

      <ul className="nav-menu">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        {/* <li onClick={() => scrollToSection("contact")}>Contact</li> */}
      </ul>

      <button
        className="nav-connect"
        onClick={() => scrollToSection("contact")}
      >
        Connect with me
      </button>
    </div>
  );
};

export default Navbar;
