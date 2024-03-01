import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const Resources = () => {
  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // State to track the selected subject
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Dummy data for subjects
  const subjects = ["Maths", "Physics", "Science"];

  // Object mapping subjects to their content
  const subjectContent = {
    Maths: (
      <>
        <h4>Mathematics Resources</h4>
        <p>Content for Mathematics goes here...</p>
        <img
          src="https://images.pexels.com/photos/3729557/pexels-photo-3729557.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Maths"
        />
      </>
    ),
    Physics: (
      <>
        <h4>Physics Resources</h4>
        <p>Content for Physics goes here...</p>
        {/* Add more content specific to Physics */}
      </>
    ),
    Science: (
      <>
        <h4>Science Resources</h4>
        <p>Content for Science goes here...</p>
        {/* Add more content specific to Science */}
      </>
    ),
  };

  return (
    <motion.div
      className="flex h-screen bg-gray-100 w-full"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {/* Main Content Area */}
      <div className="flex-1 p-8 ml-1/5 overflow-y-auto     ">
        <h2 className="text-2xl font-semibold mb-4">Resources</h2>

        {/* Navigation for Subjects */}
        <div className="flex space-x-4 mb-4">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              className={`cursor-pointer py-2 px-4 rounded-md ${
                selectedSubject === index
                  ? "bg-gray-500 text-white"
                  : "bg-gray-300 text-gray-800"
              }`}
              onClick={() => setSelectedSubject(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {subject}
            </motion.div>
          ))}
        </div>

        {/* Display Resources based on the selected subject */}
        {selectedSubject !== null && (
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md mb-4 flex-1"
            variants={fadeInVariants}
          >
            <h3 className="text-lg font-semibold mb-4">
              Resources for {subjects[selectedSubject]}
            </h3>
            {subjectContent[subjects[selectedSubject]]}
          </motion.div>
        )}

        {/* Add more sections and content based on your needs */}
      </div>
    </motion.div>
  );
};

export default Resources;
