import React from 'react';
import { motion } from 'framer-motion';


export default function Std_Course() {
  const subjects = [
    { name: 'Introduction to Computer Science', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Data Structures and Algorithms', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { name: 'Web Development', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  ];
    const fadeInVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  
    return (
      <motion.div
        className="p-8"
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Computer Science Course</h2>
  
        <p>
          Explore the exciting world of Computer Science and gain knowledge in various fundamental concepts.
        </p>
  
        <h3 className="text-lg font-semibold mt-4">Subjects:</h3>
        <ul className="list-disc pl-6">
          {subjects.map((subject, index) => (
            <li key={index} className="mb-3">
              <h4 className="text-xl font-semibold">{subject.name}</h4>
              <p>{subject.content}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    );
  };
  

