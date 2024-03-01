import React from "react";
import { Link } from "react-router-dom";
import Resource from "./Resources";

const StudentDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="bg-gray-800 text-white h-screen w-1/5 fixed flex justify-center ">
        <ul className="p-3">
          <li className="mb-3">
            <Link to="/dashboard" className="text-lg font-semibold">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/edit-profile" className="text-lg font-semibold">
              Edit Profile
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/resources" className="text-lg font-semibold">
              Resources
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/attendance" className="text-lg font-semibold">
              Attendance
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/grades" className="text-lg font-semibold">
              Grades
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/schedule" className="text-lg font-semibold">
              Schedule
            </Link>
          </li>
          <li>
            <Link to="/logout" className="text-lg font-semibold">
              Logout
            </Link>
          </li>
        </ul>
      </div>
      {/* Main Content Area */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-semibold mb-4 justify-center flex">
          Welcome to your Dashboard
        </h2>
        {/* Add your main content here */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">General Information</h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <Resource />
      </div>
    </div>
  );
};

export default StudentDashboard;
