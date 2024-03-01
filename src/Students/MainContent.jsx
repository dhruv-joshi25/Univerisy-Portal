// Import necessary modules
import React from "react";
import { motion } from "framer-motion";

const DashboardMainContent = () => {
  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="text-lg"
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-4">Welcome to your Dashboard</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Lorem*5
      </p>
      {/* Add more content and customize the animation as needed */}
    </motion.div>
  );
};

export default DashboardMainContent;
