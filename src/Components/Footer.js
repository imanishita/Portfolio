import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/imanishita" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/manishita-b-b32815140/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:imanishita17@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <p className="copyright">
        © 2025 Manishita Biswas. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
