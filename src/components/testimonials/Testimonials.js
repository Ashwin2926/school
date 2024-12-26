import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      feedback:
        "The care and attention my child receives are beyond expectations. We’re so grateful for this school!",
      role: "Parent of Grade R Student",
    },
    {
      name: "John Smith",
      feedback:
        "The staff are excellent, and my kids love the engaging activities. Highly recommend it!",
      role: "Parent of Grade 2 Student",
    },
    {
      name: "Sarah Johnson",
      feedback:
        "My son has made tremendous progress academically and socially. The teachers are fantastic!",
      role: "Parent of Grade 4 Student",
    },
    {
      name: "Michael Brown",
      feedback:
        "The school provides a well-rounded education and a nurturing environment. We couldn’t be happier.",
      role: "Parent of Grade 1 Student",
    },
  ];

  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <h2 className="section-title text-center">What Parents Say</h2>
        <div className="testimonials-carousel">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <p className="testimonial-author">{testimonial.name}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
