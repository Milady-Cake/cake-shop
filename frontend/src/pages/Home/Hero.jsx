import React from "react";
import { motion } from "framer-motion";
import Services from "./Services";
import NewsSection from "./OurNews";

const BakeryUI = () => {
  return (
    <>
      {/* services */}
      <Services />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 max-md:p-1 md:p-8 h-screen"
      >
        {/* Left Side: Company Info & Opening Times */}
        <div className="flex flex-col col-span-1 h-full gap-6">
          {/* Company Info */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative bg-cover bg-center text-white p-6 flex-grow flex flex-col justify-center items-center text-center before:absolute before:inset-0 before:bg-black/40 before:blur-md before:grayscale before:opacity-60"
            style={{
              backgroundImage:
                "url('https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/09/project-5-720x720.jpg')",
            }}
          >
            <h2 className="text-2xl tracking-widest font-semibold relative">OUR COMPANY</h2>
            <p className="relative">Avenue Marina 34568 NY (U.S)</p>
            <p className="relative">+1 374 474 637</p>
            <p className="relative">info@bakery.com</p>
          </motion.div>

          {/* Opening Times */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-[#d2a47e] p-6 text-white flex-grow flex flex-col justify-around items-center text-center"
          >
            <h2 className="text-lg font-semibold">OPENING TIMES</h2>
            <p>MON &nbsp; 17:00 to 23:00</p>
            <p>WED &nbsp; 19:00 to 24:00</p>
            <p>THU &nbsp; 14:00 to 18:00</p>
            <p>FRI &nbsp; 16:00 to 24:00</p>
            <p>SAT/SUN &nbsp; 20:00 to 4:00</p>
          </motion.div>
        </div>

        {/* Right Side: Bakery & Pastry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 col-span-1 md:col-span-2 h-full gap-6">
          {/* Bakery - Cookies */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative bg-cover bg-center text-white p-6 flex flex-col justify-center items-center text-center before:absolute before:inset-0 before:bg-black/40 before:blur-md before:grayscale before:opacity-60"
            style={{
              backgroundImage:
                "url('https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/09/project-1-720x720.jpg')",
            }}
          >
            <h2 className="text-2xl tracking-widest font-semibold relative">BAKERY</h2>
            <p className="text-2xl italic relative">Cookies</p>
            <motion.button whileHover={{ scale: 1.1 }} className="border px-4 py-2 text-sm relative">
              ASK A QUOTE
            </motion.button>
          </motion.div>

          {/* Pastry - Pancakes */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative bg-cover bg-center text-white p-6 flex flex-col justify-center items-center text-center before:absolute before:inset-0 before:bg-black/40 before:blur-md before:grayscale before:opacity-60"
            style={{
              backgroundImage:
                "url('https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/10/shop-6.jpg')",
            }}
          >
            <h2 className="text-2xl tracking-widest font-semibold relative">PASTRY</h2>
            <p className="text-2xl italic relative">Pancakes</p>
            <motion.button whileHover={{ scale: 1.1 }} className="border px-4 py-2 text-sm relative">
              REQUEST INFO
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Our news */}
      <NewsSection />
    </>
  );
};

export default BakeryUI;
