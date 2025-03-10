import React from "react";

const Topline = ({ isVisible }) => (
  <div
    className={`bg-black text-white flex justify-between items-center p-2 text-xs md:text-sm px-4 md:px-6 transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}
  >
    <span className="text-center md:text-left">
      Free Delivery on orders over $260
    </span>
    <div className="flex gap-4 sm:gap-6">
      <a href="#" className="hover:text-gray-400 text-center md:text-left">
        Track your Order
      </a>
      <a href="#" className="hover:text-gray-400 text-center md:text-left">
        Find a Store
      </a>
      <a href="#" className="hover:text-gray-400 text-center md:text-left">
        INR ₹
      </a>
    </div>
  </div>
);

export default Topline;