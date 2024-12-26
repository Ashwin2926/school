import React from "react";
import "./news.css";

const EventsNews = () => {
  const events = [
    {
      title: "Science Fair 2024",
      date: "March 15, 2024",
      description: "A showcase of student science projects and experiments.",
    },
    {
      title: "Parent-Teacher Meeting",
      date: "April 10, 2024",
      description: "Discuss your child's progress with their teachers.",
    },
    {
      title: "Annual Sports Day",
      date: "May 5, 2024",
      description: "Join us for a day of fun and sports activities.",
    },
  ];

  return (
    <section className="events-news-section py-5">
      <div className="container">
        <h2 className="section-title text-center">Events & News</h2>
        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-card">
              <h4 className="event-title">{event.title}</h4>
              <p className="event-date">{event.date}</p>
              <p className="event-description">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsNews;
