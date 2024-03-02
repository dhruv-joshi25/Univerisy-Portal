import React from "react";
import FactProfile from "./Fact_Profile";
import FactSidebar from "./Fact_Sidebar";

const FacutltyInterface = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <FactSidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-8 ml-64 overflow-x-hidden">
        {/* Main Content Goes Here */}
        <FactProfile />
        {/* Add more sections and content based on your needs */}
      </div>
    </div>
  );
};

export default FacutltyInterface;
