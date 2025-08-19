import Image1 from "../assets/icon.webp"
import Image2 from "../assets/660ed10be19f5033fabd6837_Hero Headshot.avif"
import { LuSquareArrowUpRight } from "react-icons/lu"
import Logo from "../assets/logo.svg"
import Logo1 from "../assets/logo1.svg"
import Logo2 from "../assets/logo2.svg"
import Logo3 from "../assets/download (1).jpeg"
import { FcReading } from "react-icons/fc";

import { motion, AnimatePresence } from "framer-motion";
import LatestWork from "./LatestWork"
import { Link } from "react-router-dom"
import Footer from "./Footer"
const Header = () => {

  return (
    <>
      <div className="h-[90px] flex justify-between items-center">
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-[50px] h-[50px] flex justify-center items-center bg-black rounded-lg"
        >
          {/* <img className="h-[40px] w-[40px] " src={Image1} alt="" /> */}
          <FcReading />
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="fixed right-6 w-[60px] h-[120px] flex justify-center items-center bg-black rounded-b-2xl text-white text-2xl shadow-lg z-50 cursor-pointer"
        >
          <Link to="/contact">
            <i className="fa-regular fa-message"></i>
          </Link>
        </motion.div>
      </div>
      <div className="h-[200px] mt-10 rounded-t-4xl bg-black flex justify-center items-center lg:h-[450px]">
        <img
          src={Image2}
          alt=""
          className="relative bottom-10 h-[220px] lg:h-[400px]"
        />
      </div>
      {/*================================ name========================== */}
      <div className="text-center relative lg:bottom-15 bottom-5 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full text-3xl lg:text-7xl xl:text-8xl font-extrabold bg-gradient-to-b from-white to-black bg-clip-text text-transparent"
        >
          VIVEK KUMAR CHOUBEY
        </motion.h1>
      </div>

      {/* ==========================contact=================== */}
      <div className="flex justify-between items-center h-[50px] px-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-gray-500 lg:text-xl text-sm">
            Webflow Designer / Developer
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <a
            href="#"
            className="border border-white lg:px-4 lg:py-2 px-2 py-2 text-white rounded-2xl text-[10px] sm:text-lg hover:bg-white hover:text-black transition"
          >
            Get in touch →
          </a>
        </motion.div>
      </div>

      {/*======================= mouse pointer=================== */}
      <div className="flex justify-center mt-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start relative">
          <motion.div
            className="w-1 h-1 bg-white rounded-full"
            initial={{ y: 2, opacity: 1 }}
            animate={{ y: 20, opacity: 0 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
      {/*  */}

      <div className="sm:px-15 sm:py-15 mt-10 sm:flex sm:flex-row sm:justify-center sm:items-center sm:gap-4 flex flex-col gap-3 bg-black rounded-lg px-5 py-5">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <h2 className="text-white text-4xl font-medium lg:text-5xl">
            Hi, I’m Vivek, a designer and front-end developer based in Wales.
          </h2>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
        >
          <p className="text-gray-500 text-xl">
            With over a decade of experience in multiple disciplines, I work with companies to create intuitive and engaging digital experiences.
          </p>
        </motion.div>
      </div>
      {/* ==================================== */}


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 sm:px-10 sm:py-10 px-4 py-2 bg-black rounded-lg flex flex-col gap-5 sm:flex-row sm:justify-between sm:items-center sm:gap-10 pb-4"
      >
        {/* Left Card */}
        <div>
          <h1 className="lg:text-6xl sm:text-4xl text-3xl bg-gradient-to-t from-white to-black text-transparent bg-clip-text font-bold">
            I often work with :
          </h1>
        </div>

        {/* Right Cards */}
        <div className="border-2 flex flex-col gap-4">
          {["Startups", "Agencies", "Enterprises", "Personal Brands"].map((item, index) => (
            <motion.div
              key={index}
              className="flex justify-start items-center px-5 py-5 bg-[#1a1a1a] text-white gap-5 text-2xl sm:text-3xl rounded-lg sm:w-[400px] hover:bg-[#3b3a3a] cursor-pointer w-[100%]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <LuSquareArrowUpRight />
              <h3>{item}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ======================================================*/}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="sm:px-15 sm:py-15 mt-10 sm:flex sm:flex-row sm:justify-start sm:items-center sm:gap-10 flex flex-col bg-black rounded-lg px-5 py-5"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="lg:text-5xl sm:text-4xl text-3xl bg-gradient-to-t from-white to-black text-transparent bg-clip-text font-bold">
            I've worked with the likes of :
          </h1>
        </motion.div>

        {/* Logos */}
        <div className="grid grid-cols-2 gap-10 py-5">
          {[Logo, Logo1, Logo3].map((logo, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={logo} alt={`Logo ${index + 1}`} className="w-full h-auto" />
            </motion.span>
          ))}
        </div>
      </motion.div>
      {/* scroll sect */}

      <LatestWork />

      <Footer />
    </>
  )
}

export default Header