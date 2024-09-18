import React from "react";
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Prem Rajput ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
