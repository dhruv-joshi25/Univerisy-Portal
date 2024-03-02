import React, { useState } from "react";

const UploadResources = () => {
  const [resourceName, setResourceName] = useState("");
  const [resourceType, setResourceType] = useState("");
  const [file, setFile] = useState(null);

  const handleResourceNameChange = (e) => {
    setResourceName(e.target.value);
  };

  const handleResourceTypeChange = (e) => {
    setResourceType(e.target.value);
  };

  const handleFileChange = (e) => {
    // Handle file upload logic, you can use the selected file as needed
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    // Implement the logic to upload the resource, using resourceName, resourceType, and file
    console.log("Uploading resource:", resourceName, resourceType, file);
    // Reset the form after uploading
    setResourceName("");
    setResourceType("");
    setFile(null);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Upload Resources</h2>

      {/* Resource Upload Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h3 className="text-lg font-semibold mb-4">Resource Information</h3>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Resource Name:
            </label>
            <input
              type="text"
              className="border rounded-md p-2 w-full"
              value={resourceName}
              onChange={handleResourceNameChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Resource Type:
            </label>
            <input
              type="text"
              className="border rounded-md p-2 w-full"
              value={resourceType}
              onChange={handleResourceTypeChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload File:
            </label>
            <input
              type="file"
              className="border rounded-md p-2 w-full"
              onChange={handleFileChange}
            />
          </div>
          <button
            type="button"
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={handleUpload}
          >
            Upload
          </button>
        </form>
      </div>

      {/* Add more sections and content based on your needs */}
    </div>
  );
};

export default UploadResources;
