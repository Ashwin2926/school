import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="horizontal-navbar">
      <div className="container">
        <a href="/" className="brand">
          <h1 className="brand-title">
            <i className="mr-2">SLI</i>
          </h1>
        </a>
        {/* Hamburger Icon */}
        <div
          className={`hamburger ${isMenuOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        {/* Navigation Links */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li className="nav-item">
            <a href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#courses"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              href="#services"
              className="nav-link dropdown-toggle"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  href="#early-education"
                  className="dropdown-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Early Education
                </a>
              </li>
              <li>
                <a
                  href="#primary-education"
                  className="dropdown-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Primary Education
                </a>
              </li>
              <li>
                <a
                  href="#special-programs"
                  className="dropdown-item"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Special Programs
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
        {/* Call-to-Action Buttons */}
        <div className="cta-buttons">
          <a href="#enroll" className="btn btn-outline">
            Enroll Now
          </a>
          <a href="#login" className="btn btn-primary">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
