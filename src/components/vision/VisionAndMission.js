import React from "react";
import visionImage from "../../image1.jpg"; // Replace with actual image path

import { FaLightbulb, FaUsers, FaRegSmile, FaGlobe } from "react-icons/fa";
import "./Vision.css";

const VisionAndMission = () => {
  return (
    <section className="vision-mission">
      <div className="container">
        <div className="row align-items-center">
         
          <div className="col-md-6">
            <div className="text-container">
              <h2 className="section-title">Our Vision</h2>
              <p>
                To nurture young minds by creating a supportive environment that promotes personal and academic excellence.
              </p>
              <p>
                We leverage modern technologies like <strong>AI-driven learning platforms</strong> and <strong>interactive classrooms</strong> to stay ahead in education innovation.
              </p>
            </div>
          </div>
           {/* Vision Section */}
           <div className="col-md-6">
            <img src={visionImage} alt="Vision" className="img-fluid rounded shadow" />
          </div>
        </div>
        </div>
        <section className="mission-section">
      <div className="container">
        {/* Central Mission Statement */}
        <div className="mission-statement">
          <h2 className="section-title" style={{color: 'white'}}>Our Mission</h2>
          <p>
            To provide engaging and inclusive education that fosters creativity, 
            critical thinking, and lifelong learning in every child. We aim to 
            inspire, innovate, and empower the next generation with a holistic 
            approach to education.
          </p>
        </div>

        {/* Mission Features */}
        <div className="row mt-5">
          {/* Feature 1 */}
          <div className="col-md-3 text-center">
            <div className="feature-card">
              <FaLightbulb className="feature-icon" />
              <h5>Innovation</h5>
              <p>Integrating AI-driven tools and robotics into daily learning.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-md-3 text-center">
            <div className="feature-card">
              <FaUsers className="feature-icon" />
              <h5>Inclusivity</h5>
              <p>Fostering a supportive and diverse learning environment.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-md-3 text-center">
            <div className="feature-card">
              <FaRegSmile className="feature-icon" />
              <h5>Well-Being</h5>
              <p>Ensuring mental and emotional health alongside academics.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="col-md-3 text-center">
            <div className="feature-card">
              <FaGlobe className="feature-icon" />
              <h5>Global Outlook</h5>
              <p>Preparing students to thrive in an interconnected world.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
          
    </section>
    
  );
};

export default VisionAndMission;
