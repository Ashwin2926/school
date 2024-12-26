import React from "react";
import '../footer/Footer.css';

const Footer = () => {
  return (
    <footer class="footer">
  <div class="container">
    <div class="footer-about">
      <h3>SLI Education</h3>
      <p>
        Welcome to SLI Education, a place where we nurture bright futures through comprehensive and engaging learning experiences. 
        Our institution is committed to academic excellence, offering courses designed to inspire creativity, critical thinking, 
        and a love for lifelong learning.
      </p>
    </div>

    <div class="footer-sections">

      <div class="footer-column">
        <h4>Get In Touch</h4>
        <p><i class="fa fa-map-marker"></i> 123 Learning Street, Education City</p>
        <p><i class="fa fa-phone"></i> +1 (234) 567-890</p>
        <p><i class="fa fa-envelope"></i> contact@sli.edu</p>
        <div class="footer-socials">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
        </div>
      </div>

    
      {/* <div class="footer-column">
        <h4>Our Courses</h4>
        <ul>
          <li><a href="#web-design">Web Design</a></li>
          <li><a href="#apps-design">App Development</a></li>
          <li><a href="#marketing">Digital Marketing</a></li>
          <li><a href="#research">Educational Research</a></li>
          <li><a href="#seo">SEO Strategies</a></li>
        </ul>
      </div> */}


      <div class="footer-column">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#terms">Terms & Conditions</a></li>
          <li><a href="#faq">FAQs</a></li>
          <li><a href="#help-support">Help & Support</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <p>Copyright © 2024 SLI Education. All Rights Reserved.</p>
  </div>
</footer>


  );
};

export default Footer;
