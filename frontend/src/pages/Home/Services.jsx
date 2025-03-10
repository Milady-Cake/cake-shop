import { GiCroissant, GiCoffeeCup, GiDonut, GiSlicedBread } from "react-icons/gi";
import { motion } from "framer-motion";
import React from "react";

const Services = () => {
  return (
    <section className="text-center py-12 bg-white">
      <h3 className="text-gray-500 uppercase tracking-widest text-sm">
        CHECK THEM ALL
      </h3>
      <h2 className="text-4xl font-serif font-semibold my-2">Our Services</h2>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/** Service Item 1 - Croissant */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GiCroissant className="text-6xl text-gray-700" />
          <p className="text-gray-600 mt-4 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur{" "}
            <a href="#" className="text-blue-500 underline">
              adipiscing
            </a>{" "}
            elit. Curabitur ut diam etni
          </p>
        </motion.div>

        {/** Service Item 2 - Coffee */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <GiCoffeeCup className="text-6xl text-gray-700" />
          <p className="text-gray-600 mt-4 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur{" "}
            <a href="#" className="text-blue-500 underline">
              adipiscing
            </a>{" "}
            elit. Curabitur ut diam etni
          </p>
        </motion.div>

        {/** Service Item 3 - Donut */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <GiDonut className="text-6xl text-gray-700" />
          <p className="text-gray-600 mt-4 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur{" "}
            <a href="#" className="text-blue-500 underline">
              adipiscing
            </a>{" "}
            elit. Curabitur ut diam etni
          </p>
        </motion.div>

        {/** Service Item 4 - Sliced Bread */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <GiSlicedBread className="text-6xl text-gray-700" />
          <p className="text-gray-600 mt-4 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur{" "}
            <a href="#" className="text-blue-500 underline">
              adipiscing
            </a>{" "}
            elit. Curabitur ut diam etni
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
