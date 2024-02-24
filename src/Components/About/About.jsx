import React from "react";
import TeamMemberImage from "./TeamMemberImage"; // Import or replace this with the actual image component

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Founder",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Lead Developer",
    bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  // Add more team members as needed
];

const About = () => {
  return (
    <div className="container mx-auto my-12 p-8 bg-white rounded-lg shadow-md">
      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Mission Statement</h2>
        <p>
          Our mission is to provide high-quality education and foster innovation
          through our platform. We aim to empower individuals to achieve their
          full potential.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">History</h2>
        <p>
          Tech University was founded in 2010 with the vision of creating a
          space for learning and collaboration in the field of technology. Since
          then, we have been dedicated to making education accessible and
          inspiring innovation.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Team Members</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="mb-8">
              <TeamMemberImage /> {/* Replace this with your image component */}
              <h3 className="text-lg font-bold mb-2">{member.name}</h3>
              <p>{member.role}</p>
              <p className="text-gray-700">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Add more sections as per your needs */}
    </div>
  );
};

export default About;
