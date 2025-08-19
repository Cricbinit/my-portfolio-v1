import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "TestYantra",
    image:
      "https://cdn.prod.website-files.com/646bb626f5c2104941dd5a26/6612a0b23c6e3f14f460d7d2_cornerstone.webp",
    link: "https://www.testyantraglobal.com/",
  },
  {
    id: 2,
    title: "FireFlink",
    image:
      "https://cdn.prod.website-files.com/646bb626f5c2104941dd5a26/661635707d3a93b43d8bcae1_Team%20up%202.webp",
    link: "https://www.fireflink.com/",
  },
{
    id: 3,
    title: "Prodhee Technologies PVT.LTD",
    image:
      "https://cdn.prod.website-files.com/646bb626f5c2104941dd5a26/661635707d3a93b43d8bcae1_Team%20up%202.webp",
    link: "https://dheecodinglab.com/",
  }
];

const LatestWork = () => {
  return (
    <section className="bg-black py-20 px-4 min-h-screen text-white">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-white mb-14 text-center"
      >
        LATEST WORK
      </motion.h1>

      <div className="max-w-6xl mx-auto h-[80vh] overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide">
        {projects.map((project) => (
          <a
            href={project.link}
            key={project.id}
            target="_blank"
            rel="noopener noreferrer"
            className="snap-start group block mb-10 rounded-xl overflow-hidden transition duration-500 transform hover:scale-[1.02] hover:brightness-100 brightness-[40%] grayscale hover:grayscale-0"
          >
            <div className="relative">
              {/* Title & Icon */}
              {/* Title & Icon Header */}
              <div className="absolute top-6 left-6 z-10 bg-black/60 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 flex justify-between items-center w-[calc(100%-3rem)]">
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-white text-lg sm:text-2xl font-semibold"
                >
                  {project.title}
                </motion.h2>

                {/* Link Icon */}
                <div className="text-white ml-4">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="9"
                      y="9"
                      width="24"
                      height="24"
                    >
                      <rect x="9" y="9" width="24" height="24" fill="currentColor" />
                    </mask>
                    <g mask="url(#mask0)">
                      <path
                        d="M15.4 27L14 25.6L23.6 16H15V14H27V26H25V17.4L15.4 27Z"
                        fill="currentColor"
                      />
                    </g>
                  </svg>
                </div>
              </div>


              {/* Project Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="w-full object-cover max-h-[65vh] rounded-xl"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default LatestWork;
