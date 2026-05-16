import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {

  return (

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">

          <h2 className="footer-logo">
            BookVault
          </h2>

          <p className="footer-text">
            Securely manage and organize your books.
          </p>

        </div>

        <div className="footer-section">

          <h3 className="footer-title">
            Quick Links
          </h3>

          <Link to="/" className="footer-link">
            Home
          </Link>

          <Link to="/signup" className="footer-link">
            Sign Up
          </Link>

          <Link to="/login" className="footer-link">
            Login
          </Link>

        </div>

        <div className="footer-section">

          <h3 className="footer-title">
            Contact
          </h3>

          <p className="footer-text">
            Email: support@bookvault.com
          </p>

          <p className="footer-text">
            Phone: +91 9876543210
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 BookVault. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;