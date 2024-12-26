import React from "react";
import '../footer/Footer.css';

const Footer = () => {
  return (
    <footer class="footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <h3>Shepherds Learning Institute</h3>
        <p>
          Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea lorem at et
          diam est, tempor rebum ipsum sit ea tempor stet et consetetur dolores.
        </p>
      </div>
     
    </div>
    <div class="footer-links">
      <div class="footer-column">
        <h4>Get In Touch</h4>
        <p>123 Street, New York, USA</p>
        <p>+012 345 67890</p>
        <p>info@example.com</p>
        <div class="footer-socials">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="footer-column">
        <h4>Our Courses</h4>
        <ul>
          <li><a href="#">Web Design</a></li>
          <li><a href="#">Apps Design</a></li>
          <li><a href="#">Marketing</a></li>
          <li><a href="#">Research</a></li>
          <li><a href="#">SEO</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms & Condition</a></li>
          <li><a href="#">Regular FAQs</a></li>
          <li><a href="#">Help & Support</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>Copyright © SLI All Rights Reserved.</p>
      <p>Designed by AN</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
