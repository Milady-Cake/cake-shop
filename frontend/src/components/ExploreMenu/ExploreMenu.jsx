
import React from "react";
import { motion } from "framer-motion";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <motion.div 
      className="flex flex-col gap-5 px-3 pt-24" 
      id="explore-menu"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="lg:pl-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
          Discover Our Delicious Cakes
        </h1>
        <p className="text-gray-600 max-w-3xl md:max-w-2xl">
          Welcome to our bakery, where every cake tells a story of flavor and delight. 
          From classic favorites to exquisite custom creations, we craft each cake with passion 
          and the finest ingredients. Indulge in our delectable selection and find the perfect treat 
          for every occasion!
        </p>
      </div>

      {/* Menu List */}
      <motion.div 
        className="flex items-center justify-center gap-6 overflow-x-auto scrollbar-hide"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {menu_list.map((item, index) => (
          <motion.div
            key={index}
            onClick={() =>
              setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name))
            }
            className="flex flex-col items-center cursor-pointer text-center"
            layout // Helps with smooth transitions when state changes
          >
            <motion.img
              className={`w-[10vw] min-w-[130px] rounded-full transition-all ${
                category === item.menu_name ? "border-4 border-orange-600 p-2" : ""
              }`}
              src={item.menu_image}
              alt={item.menu_name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            />
            <p className="mt-2 text-gray-600 text-lg">{item.menu_name}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.hr 
        className="h-[2px] bg-gray-200 border-none my-4" 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
};

export default ExploreMenu;
