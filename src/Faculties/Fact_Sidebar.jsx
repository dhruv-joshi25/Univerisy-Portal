import React from "react";
import { Link } from "react-router-dom";

const FactSidebar = ({ childrenn }) => {
  return (
    <div className="flex">
      <div className="bg-gray-800 text-white h-screen w-1/5 fixed-1">
        <div className="p-4">
          <h1 className="text-2xl font-semibold">Faculty Dashboard</h1>
        </div>
        <ul className="p-3">
          <li className="mb-4">
            <Link
              to="/Faculties/Fact_Profile"
              className="text-lg font-semibold"
            >
              Profile
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/Faculties/UploadResources"
              className="text-lg font-semibold"
            >
              Resources
            </Link>
          </li>
          <li className="mb-4">
            <Link to="/Faculties/Fact_course" className="text-lg font-semibold">
              Courses
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/Faculties/Lecture_schedule"
              className="text-lg font-semibold"
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link to="/" className="text-lg font-semibold">
              Logout
            </Link>
          </li>
        </ul>
      <div className="m-7 flex h-screen">{childrenn}</div>
      </div>
    </div>
  );
};

export default FactSidebar;
