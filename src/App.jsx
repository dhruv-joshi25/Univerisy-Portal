import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import CoursesSection from "./Components/CoursePage/Course";
import Login from "./Components/LoginPage";
import ContactPage from "./Components/Contact";
import Dashboards from "./Students/Dashboards";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/courses"
          element={
            <Layout>
              <CoursesSection />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <ContactPage />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route path="/Students/Dashboards" element={<Dashboards />} />
      </Routes>
    </Router>
  );
};

export default App;
