import React from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import VisionAndMission from "./components/vision/VisionAndMission";
import About from "./components/about/About";
import DetailedCourses from "./components/courses/DetailedCourses";
import Testimonials from "./components/testimonials/Testimonials";
import EnrollmentProcess from "./components/enrollment/EnrollmentProcess";
import Team from "./components/Team/Team";
import Footer from "./components/footer/Footer";
import "./index.css";
import EnrollmentForm from "./components/enrollment/EnrollmentForm";
import EventsNews from "./components/news/news";


const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <EnrollmentProcess />
      <EnrollmentForm/>
      <DetailedCourses />
      <VisionAndMission /> 
      <EventsNews/> 
      <Testimonials />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
