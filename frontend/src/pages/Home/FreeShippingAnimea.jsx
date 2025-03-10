import { motion } from "framer-motion";
import React from "react";
import { FaShippingFast } from "react-icons/fa";

const FreeShippingProgress = ({ progress }) => {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <div className="relative w-full h-2 bg-gray-200 rounded-full">
        {/* Animated progress bar */}
        <motion.div
          className="h-[70%] max-md:w-[20%]  bg-green-600 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Moving truck icon - aligned with the border */}
        <motion.div
          className="absolute top-[-14px]" // Moves the truck on top of the border
          initial={{ left: "0%" }}
          animate={{ left: `${progress}%` }} // Moves along with the green bar
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-green-600 shadow-md">
            <FaShippingFast className="text-green-600 text-lg" />
          </div>
        </motion.div>
      </div>

      {/* Message */}
      {progress >= 100 ? (
        <p className="text-green-600 font-semibold">
          🎉 Congratulations! You’ve got free shipping!
        </p>
      ) : (
        <p className="text-gray-600 text-sm">
          Spend more to unlock free shipping!
        </p>
      )}
    </div>
  );
};

export default FreeShippingProgress;
