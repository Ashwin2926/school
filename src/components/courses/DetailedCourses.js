import React from "react";
import './Courses.css';
import courseImage1 from '../../image1.jpg'; // Replace with your actual images
import courseImage2 from '../../image2.jpg'; // Replace with your actual images
import courseImage3 from '../../image3.jpg'; // Replace with your actual images

const DetailedCourses = () => {
  const courses = [
    {
      title: "Early Childhood Development",
      description: "Holistic care and learning for children aged 6 months to 3 years.",
      features: ["Safe Environment", "Interactive Play", "Social Skills Development"],
      image: courseImage1,
    },
    {
      title: "Foundation Phase (Grade R-3)",
      description: "Building fundamental skills in literacy, numeracy, and creativity.",
      features: ["Phonics and Reading", "Art and Craft", "Basic Mathematics"],
      image: courseImage2,
    },
    {
      title: "Intermediate Phase (Grade 4-6)",
      description: "Preparing students for senior phases with advanced learning methods.",
      features: ["Critical Thinking", "Problem Solving", "Project-Based Learning"],
      image: courseImage3,
    },
  ];

  return (
    <section className="courses-section py-5">
      <div className="container">
        <h2 className="text-center section-title">Comprehensive Courses</h2>
        <div className="row">
          {courses.map((course, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="course-card">
                <img src={course.image} alt={course.title} className="course-image img-fluid" />
                <div className="course-content">
                  <h5 className="course-title">{course.title}</h5>
                  <p className="course-description">{course.description}</p>
                  <ul className="course-features">
                    {course.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedCourses;
