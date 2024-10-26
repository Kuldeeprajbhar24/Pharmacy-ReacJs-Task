import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Pharmacy Store</p>
      <nav>
        <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms-of-service">Terms of Service</Link>
      </nav>
    </footer>
  );
}
export default Footer;
