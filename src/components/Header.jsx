import React from 'react';
import NavBar from './NavBar';
import { motion } from "motion/react"


const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/fundoo.jpeg')" }}
      id="Header"
    >
      <NavBar />

      <motion.div
        className="container text-center mx-auto py-4 px-4 md:px-20 lg:px-32 text-white"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.5 }} 
      >
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          A criar pontes entre pessoas e os seus lugares ideais
        </h2>

        <div className="flex justify-center items-center mt-16 gap-5 md:px-20 lg:px-32">
          <a
            href="#Projects"
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Projectos
          </a>

          <a
            href="#"
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Detalhes
          </a>
        </div>
      </motion.div>



    </div>
  );
};

export default Header;
