import React, { useState } from "react";
import "./EnrollmentForm.css";

const EnrollmentForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleForm = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* Modern Floating Apply Now Button */}
      <button className="apply-now-btn-modern" onClick={toggleForm}>
        Apply Now
      </button>

      {/* Enrollment Form Modal */}
      {isVisible && (
        <div className="enrollment-form-modal">
          <div className="enrollment-form-container">
            <button className="close-btn" onClick={toggleForm}>
              &times;
            </button>
            <h2 className="section-title text-center">Online Enrollment Form</h2>
            <form className="enrollment-form">
              <div className="form-group">
                <input type="text" name="name" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Phone Number" required />
              </div>
              <div className="form-group">
                <select name="grade" required>
                  <option value="">Select Grade</option>
                  <option value="Grade R">Grade R</option>
                  <option value="Grade 1">Grade 1</option>
                  <option value="Grade 2">Grade 2</option>
                  <option value="Grade 3">Grade 3</option>
                  <option value="Grade 4">Grade 4</option>
                  <option value="Grade 5">Grade 5</option>
                  <option value="Grade 6">Grade 6</option>
                </select>
              </div>
              <div className="form-group">
                <label>Upload Documents:</label>
                <input type="file" name="documents" required />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message or Additional Information"
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EnrollmentForm;
