import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 p-7">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-3xl font-bold">
          Tech University
        </Link>
        <div className="flex items-center text-xl space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/courses" className="text-white hover:text-gray-300">
            Courses
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>

          <div>
            <Link to="/Login" className="text-white hover:text-gray-300">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
