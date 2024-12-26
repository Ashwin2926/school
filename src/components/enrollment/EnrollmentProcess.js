import React from "react";
import { FaRegFileAlt, FaCalendarAlt, FaUserCheck, FaGraduationCap } from "react-icons/fa"; // Icons for steps
import "../enrollment/Enrollment.css";

const EnrollmentProcess = () => {
  const steps = [
    {
      title: "Submit Application",
      description: "Fill out the online application form with all required details.",
      icon: <FaRegFileAlt />,
    },
    {
      title: "Schedule a Visit",
      description: "Book a visit to tour our facilities and meet our staff.",
      icon: <FaCalendarAlt />,
    },
    {
      title: "Interview & Assessment",
      description: "Attend an interview and academic assessment with our team.",
      icon: <FaUserCheck />,
    },
    {
      title: "Finalize Enrollment",
      description: "Receive acceptance and complete the enrollment process.",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section className="enrollment-process">
      <div className="container">
        <h2 className="text-center section-title">How to Enroll</h2>
        <div className="timeline">
          {steps.map((step, index) => (
            <div key={index} className="timeline-step">
              <div className="timeline-icon">{step.icon}</div>
              <div className="timeline-content">
                <h5>{step.title}</h5>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnrollmentProcess;
