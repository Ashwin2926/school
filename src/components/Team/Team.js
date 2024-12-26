import React from "react";
import "./Team.css";

const Team = () => {
  const instructors = [
    {
      name: "John Doe",
      subject: "Mathematics",
      image: "https://via.placeholder.com/150",
      description: "Specializes in algebra and calculus for Grades 4-6.",
    },
    {
      name: "Jane Smith",
      subject: "Science",
      image: "https://via.placeholder.com/150",
      description: "Focuses on hands-on experiments and scientific inquiry.",
    },
    {
      name: "Mark Johnson",
      subject: "English",
      image: "https://via.placeholder.com/150",
      description: "Expert in phonics, grammar, and creative writing.",
    },
    {
      name: "Emily Davis",
      subject: "Arts & Crafts",
      image: "https://via.placeholder.com/150",
      description: "Encourages creativity through various art mediums.",
    },
  ];

  return (
    <section className="team-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Meet Our Instructors</h2>
        <p className="text-center mb-5">
          Dedicated professionals passionate about education.
        </p>

        {/* Scrollable Cards */}
        <div className="instructors-carousel d-flex overflow-auto">
          {instructors.map((instructor, index) => (
            <div key={index} className="instructor-card">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="img-fluid rounded-circle instructor-image"
              />
              <div className="card-content">
                <h5 className="instructor-name">{instructor.name}</h5>
                <p className="instructor-subject text-secondary">
                  {instructor.subject}
                </p>
                <p className="instructor-description text-muted">
                  {instructor.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="contact-form mt-5">
          <h3 className="text-center mb-4">Get in Touch</h3>
          <form>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-5">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Team;
