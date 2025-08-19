import React from 'react'
import { motion } from "framer-motion";

const Footer = () => {
    return (
       <div className="bg-gray-800 mt-5 rounded-b-2xl min-h-[200px] sm:min-h-[250px] flex items-center justify-center">
      <div className="text-center px-4 py-8 flex flex-col items-center gap-4 max-w-[90%]">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
        >
          GET IN TOUCH
        </motion.h1>
        <a
          href="mailto:vivekkrchoubey2000@gmail.com"
          className="border-2 border-white text-white text-sm sm:text-base md:text-lg px-4 py-2 sm:px-6 sm:py-3 rounded-2xl transition-all hover:bg-white hover:text-gray-800"
        >
          vivekkrchoubey2000@gmail.com
        </a>
      </div>
    </div>
    )
}

export default Footer