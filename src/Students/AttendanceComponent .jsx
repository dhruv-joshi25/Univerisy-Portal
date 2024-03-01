import React from "react";
import { Line } from "react-chartjs-2";

const AttendanceComponent = () => {
  // Dummy data for circular progress
  const circularData = {
    labels: ["Attended", "Remaining"],
    datasets: [
      {
        data: [89, 11], // 89% attended, 11% remaining
        backgroundColor: ["#4CAF50", "#2c3e50"], // Green for Attended, Gray for Remaining
        hoverBackgroundColor: ["#4CAF50", "#2c3e50"],
      },
    ],
  };

  // Dummy data for horizontal attendance
  const horizontalData = [
    { subject: "Math", attendance: 75 },
    { subject: "English", attendance: 92 },
    { subject: "Science", attendance: 88 },
    // Add more subjects as needed
  ];

  return (
    <div className="flex flex-col items-center space-y-4 bg-gray-800 p-6 rounded-lg">
      {/* Circular Progress Bar */}
      <div className="w-24 h-24">
        <Line
          data={circularData}
          options={{
            cutoutPercentage: 75, // Adjust the cutout percentage for a circular shape
            legend: {
              display: false,
            },
          }}
        />
        <p className="text-center text-gray-200 mt-2">Overall Attendance</p>
      </div>

      {/* Horizontal Attendance Display */}
      <div className="w-full">
        <h2 className="text-lg font-semibold text-gray-200 mb-2">Subject-wise Attendance</h2>
        <ul className="list-none p-0">
          {horizontalData.map((item, index) => (
            <li key={index} className="flex items-center justify-between py-2 border-b border-gray-700">
              <span className="text-gray-300">{item.subject}</span>
              <span className="text-green-500 font-semibold">{`${item.attendance}%`}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AttendanceComponent;
