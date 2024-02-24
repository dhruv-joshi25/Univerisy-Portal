import React from "react";
import CoursesSection from "./CoursesSection";
import HeroSection from "./HeroSection";
import EventsSection from "./EventSection";
import NewsSection from "./NewsSection";
import ContactSection from "./ContectSection";
import Layout from "../../Layout";

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
