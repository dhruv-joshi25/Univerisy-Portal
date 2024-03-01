import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaGraduationCap,
  FaBullhorn,
  FaClipboardList,
  FaEnvelope,
  FaCalendar,
  FaUser,
  FaFileAlt,
  FaQuestionCircle,
  FaSignOutAlt,
  FaCog,
  FaChartLine,
  FaUsers,
  FaSearch,
  FaTools,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const SideBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">
        Your Logo
      </Link>

      <div className="flex items-center">
        <button
          className="md:hidden focus:outline-none"
          onClick={handleToggleNav}
        >
          {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <div className={`md:flex space-x-4 ${isNavOpen ? "flex" : "hidden"}`}>
          <Link to="/dashboard" className="flex items-center">
            <FaHome className="mr-2" />
            Dashboard
          </Link>

          <div className="group">
            <span className="flex items-center cursor-pointer">
              <FaBook className="mr-2" />
              Courses
            </span>
            {/* Dropdown content */}
            <div className="hidden group-hover:block absolute bg-gray-800 p-2 space-y-2">
              <Link to="/courses/course1">Course 1</Link>
              <Link to="/courses/course2">Course 2</Link>
              {/* Add more courses as needed */}
            </div>
          </div>

          <Link to="/gradebook" className="flex items-center">
            <FaClipboardList className="mr-2" />
            Gradebook
          </Link>

          <Link to="/announcements" className="flex items-center">
            <FaBullhorn className="mr-2" />
            Announcements
          </Link>

          <Link to="/attendance" className="flex items-center">
            <FaUsers className="mr-2" />
            Attendance
          </Link>

          <Link to="/messages" className="flex items-center">
            <FaEnvelope className="mr-2" />
            Messages
          </Link>

          <Link to="/schedule" className="flex items-center">
            <FaCalendar className="mr-2" />
            Schedule
          </Link>

          <Link to="/profile" className="flex items-center">
            <FaUser className="mr-2" />
            Profile
          </Link>

          <Link to="/resources" className="flex items-center">
            <FaFileAlt className="mr-2" />
            Resources
          </Link>

          <Link to="/help" className="flex items-center">
            <FaQuestionCircle className="mr-2" />
            Help
          </Link>

          <Link to="/logout" className="flex items-center">
            <FaSignOutAlt className="mr-2" />
            Logout
          </Link>

          <Link to="/settings" className="flex items-center">
            <FaCog className="mr-2" />
            Settings
          </Link>

          <Link to="/reports" className="flex items-center">
            <FaChartLine className="mr-2" />
            Reports
          </Link>

          <Link to="/collaboration" className="flex items-center">
            <FaUsers className="mr-2" />
            Collaboration
          </Link>

          <Link to="/research" className="flex items-center">
            <FaSearch className="mr-2" />
            Research
          </Link>

          <Link to="/tools" className="flex items-center">
            <FaTools className="mr-2" />
            Tools
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
