import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const Profile = () => {
  // Dummy data for the student profile
  const studentData = {
    name: "John Doe",
    course: "Bachelor of Science in Computer Science",
    studentID: "S123456",
    email: "john.doe@example.com",
    address: "123 Main Street, Cityville",
    contactNumber: "123-456-7890",
    dob: "January 1, 2000",
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="flex h-screen bg-gray-100"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {/* Main Content Area */}
      <div className="flex-1 p-8 ml-1/5">
        <h2 className="text-2xl font-semibold mb-4">Student Profile</h2>

        {/* Student Information */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-md mb-4"
          variants={fadeInVariants}
        >
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          <p className="text-gray-600">
            <strong>Name:</strong> {studentData.name}
            <br />
            <strong>Course:</strong> {studentData.course}
            <br />
            <strong>Student ID:</strong> {studentData.studentID}
            <br />
            <strong>Email:</strong> {studentData.email}
            <br />
            <strong>Address:</strong> {studentData.address}
            <br />
            <strong>Contact Number:</strong> {studentData.contactNumber}
            <br />
            <strong>Date of Birth:</strong> {studentData.dob}
          </p>
        </motion.div>

        {/* Add more sections and content based on your needs */}
      </div>
    </motion.div>
  );
};

export default Profile;
