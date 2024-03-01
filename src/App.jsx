import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import CoursesSection from "./Components/CoursePage/Course";
import Login from "./Components/LoginPage";
import ContactPage from "./Components/Contact";
import StudentInterface from "./Students/Dashboard";
import StudentLayout from "./Students/StudentLayout";
import DashboardMainContent from "./Students/MainContent";
import Profile from "./Students/Profile";
import Std_Course from "./Students/Std_Course";
import Grades from "./Students/Grades";
import Schedule from "./Students/Schedule";

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
        <Route
          path="/students/dashboards"
          element={
            <StudentLayout>
              <StudentInterface />
            </StudentLayout>
          }
        />
        <Route
          path="/students/main"
          element={
            <StudentLayout>
              <DashboardMainContent />
            </StudentLayout>
          }
        />
        <Route
          path="/students/profile"
          element={
            <StudentLayout>
              <Profile />
            </StudentLayout>
          }
        />
        <Route
          path="/students/course"
          element={
            <StudentLayout>
              <Std_Course />
            </StudentLayout>
          }
        />
        <Route
          path="/students/grades"
          element={
            <StudentLayout>
              <Grades />
            </StudentLayout>
          }
        />
        <Route
          path="/students/schedule"
          element={
            <StudentLayout>
              <Schedule />
            </StudentLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
