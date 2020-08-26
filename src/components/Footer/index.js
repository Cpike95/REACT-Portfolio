import React from "react";
import {  FaGithub, FaLinkedin  } from "react-icons/fa";

function Footer() {
  return (
    <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
    <div className="container text-center">
      <small>Copyright &copy; Curtis Pike</small> 
      <br></br>
      <a href="https://github.com/Cpike95"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/curtis-pike-a818bb197/"><FaLinkedin /></a>
      {/* <a href="https://github.com/Cpike95"><FaGithub /></a> */}
    </div>
  </footer>
  );
}

export default Footer;
