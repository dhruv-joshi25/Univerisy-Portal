import React from "react";

const FactProfile = () => {
  // Dummy data for the faculty profile
  const facultyData = {
    name: "John Doe",
    designation: "Assistant Professor",
    department: "Computer Science",
    email: "john.doe@university.edu",
    officeLocation: "Room 201",
    contactNumber: "123-456-7890",
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Faculty Profile</h2>

      {/* Faculty Information */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        <p className="text-gray-600">
          <strong>Name:</strong> {facultyData.name}
          <br />
          <strong>Designation:</strong> {facultyData.designation}
          <br />
          <strong>Department:</strong> {facultyData.department}
          <br />
          <strong>Email:</strong> {facultyData.email}
          <br />
          <strong>Office Location:</strong> {facultyData.officeLocation}
          <br />
          <strong>Contact Number:</strong> {facultyData.contactNumber}
        </p>
      </div>

      {/* Add more sections and content based on your needs */}
    </div>
  );
};

export default FactProfile;
