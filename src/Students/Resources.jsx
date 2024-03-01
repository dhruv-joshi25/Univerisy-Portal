// Resource.js
import React, { useState } from "react";

const subjects = [
  { id: 1, name: "Mathematics" },
  { id: 2, name: "Physics" },
  { id: 3, name: "Computer Science" },
];

const Resource = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Main Content Area */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-semibold mb-4">Resource Center</h2>
        {selectedSubject ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">{selectedSubject.name} Resources</h3>
            <ul>
              {/* Assume you have a list of uploaded content for each subject */}
              <li>
                <a href="/math-content.pdf" target="_blank" rel="noopener noreferrer">
                  Mathematics - Sample PDF
                </a>
              </li>
              <li>
                <a href="/physics-video.mp4" target="_blank" rel="noopener noreferrer">
                  Physics - Sample Video
                </a>
              </li>
              <li>
                <a href="/cs-code.zip" target="_blank" rel="noopener noreferrer">
                  Computer Science - Sample Code
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <p className="text-gray-600">Select a subject to view resources.</p>
        )}
      </div>
    </div>
  );
};

export default Resource;
