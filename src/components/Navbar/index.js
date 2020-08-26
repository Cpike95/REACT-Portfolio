import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    
    <nav id="nav-wrap" className="navbar mb-1 navbar-expand-lg navbar-custom">
      <Link className="navbar-brand active" to="/">
        Curtis Pike
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/experience"
              className={window.location.pathname === "/experience" ? "nav-link active" : "nav-link"}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/education"
              className={window.location.pathname === "/education" ? "nav-link active" : "nav-link"}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/skills"
              className={window.location.pathname === "/skills" ? "nav-link active" : "nav-link"}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
            </li>
            <li className="nav-item">
            <Link
              className= {"/contact" ? "nav-link active" : "nav-link"}
             href="https://docs.google.com/document/d/1AIAaFEFbeJ3-DriRGxvyGA2Cnox3SvpQAhn3K0RRVf4/edit?usp=sharing"
            >
              Resume
            </Link>
          </li>
          </ul>
        </div>
     </nav>

  );
}

export default Navbar;
