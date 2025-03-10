


import './CakeDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import CakeItem from '../CakeItem/CakeItem';
import { useContext } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

const CakeDisplay = ({ category }) => {
  const { cake_list } = useContext(StoreContext);
  console.log("cake_list", cake_list);

  return (
    <motion.div 
      className="mt-8 px-2 lg:px-12 max-md:px-1"  
      id="cake-display"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-[max(2vw,24px)] font-semibold">Top Dishes Near You</h2>

      <motion.div 
        className="cake-display-list grid grid-cols-2 gap-5 max-md:gap-1 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        {cake_list.map((item) => {
          console.log(category, item.category);

          if (category === 'All' || category === item.category) {
            return (
              <motion.div 
                key={item._id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <CakeItem
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.images}
                  prices={item.prices}
                  rating={item.rating}
                  reviews={item.reviews}
                  weights={item.weights}
                  category={item.category}
                  offerPrice={item.offerPrice}
                />
              </motion.div>
            );
          }
          return null;
        })}
      </motion.div>
    </motion.div>
  );
};

export default CakeDisplay;
