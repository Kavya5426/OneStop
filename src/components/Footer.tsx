import React from "react";
import "../styles/Footer.css"; // Import the CSS file

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h2>Startopia</h2>
        </div>
        <div className="footer-links">
          <div>
            <h3>Links</h3>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Mentor</a></li>
              <li><a href="#">Investor</a></li>
              <li><a href="#">Service Provider</a></li>
              <li><a href="#">Startups</a></li>
            </ul>
          </div>
          <div>
            <h3>Connect</h3>
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Startopia. All rights reserved.</p>
        <div className="footer-links-bottom">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
        <div className="footer-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-x-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
