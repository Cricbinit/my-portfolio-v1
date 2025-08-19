import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdClose } from "react-icons/io"; // Close icon
import { useNavigate } from "react-router-dom"; // navigation
import "./LightRays.css";

const LightRays = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/"); // go to homepage
  };

  return (
    <div className="light-rays-wrapper">
        <button className="close-btn" onClick={handleClose}>
          <IoMdClose size={28} />
        </button>
      <div className="contact-overlay">
        
        {/* Close Button */}
      

        <h2 className="contact-title">Contact Me</h2>

        <div className="contact-card">vivekkrchoubey2000@gmail.com</div>
        <div className="contact-card">+91 8910126472</div>
        <a
          href="https://www.mrchoubey.com"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          www.mrchoubey.com
        </a>

        {/* Social Icons */}
        <div className="social-cards">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/choubey2000236/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Cricbinit" target="_blank" rel="noreferrer">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LightRays;
