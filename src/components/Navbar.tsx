import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Startopia</Link>
      </div>

      {/* Hamburger Menu */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen("features")}
          onMouseLeave={() => setDropdownOpen(null)}
        >
          <span>Features ▾</span>
          {dropdownOpen === "features" && (
            <ul className="dropdown-menu">
              <li><Link to="/mentors">Mentors</Link></li>
              <li><Link to="/investors">Investors</Link></li>
              <li><Link to="/startups">Startups</Link></li>
            </ul>
          )}
        </li>

        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen("resources")}
          onMouseLeave={() => setDropdownOpen(null)}
        >
          <span>Resources ▾</span>
          {dropdownOpen === "resources" && (
            <ul className="dropdown-menu">
              <li><Link to="/articles">Articles</Link></li>
              <li><Link to="/videos">Videos</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/community">Community</Link> </li>
        <li><Link to="/contact">Contact Us</Link> </li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
