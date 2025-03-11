import React, { useEffect, useState } from "react";


const CakeLoader = () => {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "."));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-200 to-pink-100">
      {/* Cake */}
      <div className="relative w-32">
        {/* Bottom Layer */}
        <div className="w-full h-12 bg-pink-500 rounded-b-lg shadow-lg"></div>
        {/* Middle Layer */}
        <div className="absolute top-0 left-1/2 w-28 h-10 bg-pink-400 rounded-b-lg transform -translate-x-1/2 shadow-md"></div>
        {/* Top Layer */}
        <div className="absolute top-0 left-1/2 w-24 h-8 bg-pink-300 rounded-b-lg transform -translate-x-1/2 shadow-sm"></div>
        {/* Icing Drip */}
        <div className="absolute top-0 left-0 w-full h-4 bg-white rounded-b-lg">
          <div className="absolute w-4 h-4 bg-white rounded-full -bottom-2 left-2"></div>
          <div className="absolute w-6 h-6 bg-white rounded-full -bottom-3 right-4"></div>
        </div>

        {/* Candles */}
        <div className="absolute -top-5 left-1/4 flex space-x-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="relative">
              <div className="w-2 h-6 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-3 bg-orange-500 rounded-full animate-flicker absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Text */}
      <p className="mt-4 text-xl font-bold text-pink-700 animate-pulse">
        Baking Sweetness{dots}
      </p>
    </div>
  );
};

export default CakeLoader;
