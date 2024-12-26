import React from "react";
import courseImage1 from "../../image1.jpg"; 
import courseImage2 from "../../image2.jpg"; 
import courseImage3 from "../../image3.jpg"; 
import '../courses/Courses.css'

const ComprehensiveCourses = () => {
  const courses = [
    {
      title: "Early Childhood Development",
      description: "Holistic care and learning for children aged 6 months to 3 years.",
      image: courseImage1,
    },
    {
      title: "Foundation Phase (Grade R-3)",
      description: "Building fundamental skills in literacy, numeracy, and creativity.",
      image: courseImage2,
    },
    {
      title: "Intermediate Phase (Grade 4-6)",
      description: "Preparing students for senior phases with advanced learning methods.",
      image: courseImage3,
    },
  ];

  return (
    <section className="courses">
      <div className="container">
        <h2 className="section-title text-center">Comprehensive Courses</h2>
        <div className="row">
          {courses.map((course, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="course-card">
                <img src={course.image} alt={course.title} className="img-fluid rounded" />
                <div className="course-content">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveCourses;
