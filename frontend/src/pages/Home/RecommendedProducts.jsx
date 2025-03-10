import React, { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { StoreContext } from "../../context/StoreContext";

const RecommendedProducts = () => {
  const { cake_list, addToCart } = useContext(StoreContext);
  const navigate = useNavigate();
  const [selectedWeights, setSelectedWeights] = useState({});

  // Set initial weight and price for each product
  useEffect(() => {
    const initialSelection = {};
    cake_list.forEach((item) => {
      if (item.weights?.length > 0) {
        initialSelection[item._id] = {
          weight: item.weights[0],
          price: item.prices[item.weights[0]] || item.offerPrice || item.price,
        };
      }
    });
    setSelectedWeights(initialSelection);
  }, [cake_list]);

  const handleWeightSelection = (productId, weight, prices) => {
    setSelectedWeights((prev) => ({
      ...prev,
      [productId]: { weight, price: prices[weight] || "N/A" },
    }));
  };

  const handleAddToCart = (productId) => {
    const selectedWeight = selectedWeights[productId]?.weight;
    if (!selectedWeight) {
      toast.error("Please select a weight");
      return;
    }
    addToCart(productId, selectedWeight);
    toast.success("Product Added Successfully");
  };

  return (
    <div className="  lg:pt-5  max-md:mt-6 ">
      <h2 className="text-xl  font-semibold mb-4">You may also like</h2>
      <Swiper 
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1} // Default for smallest screens
        breakpoints={{
          640: { slidesPerView: 1 }, // ✅ Small screens: 1 slide per view
          768: { slidesPerView: 2 }, // ✅ Medium screens: 2 slides per view
          1024: { slidesPerView: 2 }, // ✅ Large screens: Keep same as before
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="w-full"
      >
        {cake_list.map((item) => (
         <SwiperSlide
         key={item._id}
         className="flex flex-row bg-slate-400 items-center gap-5 border rounded-lg w-full p-4 max-md:gap-3 max-sm:p-3"
       >
         {/* Image on the Left */}
         <div className="relative group bg-orange-300 w-28 h-28 max-sm:w-20 max-sm:h-20 flex-shrink-0">
           <img
             src={`https://cake-shop-backend-qfhf.onrender.com/images/${
               item.images?.[0] || "default.jpg"
             }`}
             alt={item.name}
             onClick={() => navigate(`/detail/${item._id}`)}
             className="w-full h-full object-cover cursor-pointer transition duration-300 
               group-hover:blur-[1.1px] group-hover:opacity-95 rounded-md"
           />
           <FaEye
             className="absolute inset-0 m-auto text-white text-2xl opacity-0 group-hover:opacity-100 transition duration-300"
             onClick={() => navigate(`/detail/${item._id}`)}
           />
         </div>
       
         {/* Content on the Right */}
         <div className="flex flex-col justify-center max-sm:text-left w-full">
           <p className="text-gray-500 text-[10px]">{item.category}</p>
           <h3 className="font-medium">{item.name}</h3>
           <p className="font-semibold">
             ₹
             {selectedWeights[item._id]?.price || item.offerPrice || item.price}
             {item.offerPrice && (
               <span className="text-gray-400 line-through"> ₹{item.price}</span>
             )}
           </p>
       
           <div className="flex gap-5 items-center">
             {item.weights?.length > 0 && (
               <select
                 onChange={(e) =>
                   handleWeightSelection(item._id, e.target.value, item.prices)
                 }
                 value={selectedWeights[item._id]?.weight || ""}
                 className="mt-2 p-2 border-2 border-gray-300 rounded-md text-sm"
               >
                 {item.weights.map((weight) => (
                   <option key={weight} value={weight}>
                     {weight}
                   </option>
                 ))}
               </select>
             )}
             <button
               className="px-3 py-2 text-sm bg-black text-white font-medium rounded-md max-sm:px-2 max-sm:py-1"
               onClick={() => handleAddToCart(item._id)}
             >
               ADD TO CART
             </button>
           </div>
         </div>
       </SwiperSlide>
       
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendedProducts;
