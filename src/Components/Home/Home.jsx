// src/pages/Home.js
import React from "react";
import CoursesSection from "./CoursesSection";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import EventsSection from "./EventSection";
import NewsSection from "./NewsSection";
import ContactSection from "./ContectSection";
import Footer from "./FooterSection";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Courses Section */}
      <CoursesSection />

      {/* Events Section */}
      <EventsSection />

      {/* News Section */}
      <NewsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;
