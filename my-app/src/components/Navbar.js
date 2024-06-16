import React from "react";
import "../App.css";

const Navbar = () => {
  const handleNavClick = (event) => {
    const target = event.target;
    const link = target.getAttribute("data-link");
    if (link) {
      const section = document.querySelector(link);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar__menu" onClick={handleNavClick}>
        <li className="navbar__menu__item active" data-link="#home">
          Home
        </li>
        <li className="navbar__menu__item" data-link="#about">
          About
        </li>
        <li className="navbar__menu__item" data-link="#skills">
          Skills
        </li>
        <li className="navbar__menu__item" data-link="#work">
          My work
        </li>
        <li className="navbar__menu__item" data-link="#service">
          Service
        </li>
        <li className="navbar__menu__item" data-link="#contact">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
