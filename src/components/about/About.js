import React from "react";
import aboutImage from "../../image1.jpg"; // Replace with the actual image path
import "../about/About.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="image-wrapper">
              <img src={aboutImage} alt="About EduKidz" className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-wrapper">
              <h2 className="section-title">About SLI</h2>
              <p>
                Founded in <strong>2005</strong>, Shepherds Learning Institute has been a beacon of quality education in South Africa, catering to children from <strong>6 months old to Grade 6</strong>. 
                Our mission is to create a safe and nurturing environment that encourages holistic development, helping children excel academically, socially, and emotionally.
              </p>
              <p>
                At SLI, we prioritize small class sizes, innovative teaching methods, and state-of-the-art facilities. Over the years, we have proudly helped shape the future of countless students with a strong foundation in academics, creativity, and life skills.
              </p>
              <p>
                Our programs are designed to foster curiosity, critical thinking, and lifelong learning, ensuring every child’s unique potential is realized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
