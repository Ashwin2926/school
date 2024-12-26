import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="horizontal-navbar">
      <div className="container">
        <a href="/" className="brand">
          <h1 className="brand-title">
            <i className="mr-2">SLI</i>
            {/* <i className="fa fa-school mr-2"></i>SLI */}
          </h1>
        </a>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#courses" className="nav-link">
              Courses
            </a>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle">
              Services
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="#early-education" className="dropdown-item">
                  Early Education
                </a>
              </li>
              <li>
                <a href="#primary-education" className="dropdown-item">
                  Primary Education
                </a>
              </li>
              <li>
                <a href="#special-programs" className="dropdown-item">
                  Special Programs
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
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
