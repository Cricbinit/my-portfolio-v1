import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const contacts = [
    {
      icon: <FaEnvelope size={40} />,
      title: "Email",
      value: "vivekkrchoubey2000@gmail.com",
      link: "mailto:vivekkrchoubey2000@gmail.com",
    },
    {
      icon: <FaLinkedin size={40} />,
      title: "LinkedIn",
      value: "linkedin.com/in/vivekkrchoubey",
      link: "https://www.linkedin.com/in/choubey2000236/",
    },
    {
      icon: <FaGithub size={40} />,
      title: "GitHub",
      value: "github.com/Cricbinit",
      link: "https://github.com/Cricbinit",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b  flex flex-col items-center justify-center px-6 relative">
      
      {/* Floating Go Back Button - top right */}
      <motion.button
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-6 right-6 px-5 py-2 rounded-lg bg-blue-900 text-white font-semibold shadow-md hover:bg-blue-950 transition-all"
      >
        Go Back
      </motion.button>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
        Contact Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mb-10">
        {contacts.map((c, i) => (
          <motion.a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800/60 border border-gray-700 rounded-2xl p-8 flex flex-col items-center text-center text-white shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
            whileHover={{ scale: 1.08, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-blue-400 mb-4">{c.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{c.title}</h2>
            <p className="text-gray-300 text-sm">{c.value}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
