import { useContext, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";

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
            className="flex gap-5 border rounded-lg w-5 p-4 max-md:gap-3 max-sm:p-3"
          >
            <div className="relative group w-28 h-28 max-sm:w-20 max-sm:h-20">
              <img
                src={`http://localhost:4000/images/${
                  item.images?.[0] || "default.jpg"
                }`}
                alt={item.name}
                onClick={() => navigate(`/detail/${item._id}`)}
                className="w-full h-full object-cover mb-2 cursor-pointer transition duration-300 
                 group-hover:blur-[1.1px] group-hover:opacity-95"
              />
              <FaEye
                className="absolute inset-0 m-auto text-white text-2xl opacity-0 group-hover:opacity-100 transition duration-300"
                onClick={() => navigate(`/detail/${item._id}`)}
              />
            </div>
            <div className="max-sm:text-left">
              <p className="text-gray-500 text-[10px] ">{item.category}</p>
              <h3 className="font-medium">{item.name}</h3>
              <p className="font-semibold ">
                ₹
                {selectedWeights[item._id]?.price ||
                  item.offerPrice ||
                  item.price}
                {item.offerPrice && (
                  <span className="text-gray-400 line-through">
                    {" "}
                    ₹{item.price}
                  </span>
                )}
              </p>

              <div className="flex gap-5">
                {item.weights?.length > 0 && (
                  <select
                    onChange={(e) =>
                      handleWeightSelection(
                        item._id,
                        e.target.value,
                        item.prices
                      )
                    }
                    value={selectedWeights[item._id]?.weight || ""}
                    className="mt-2 p-2 border-2 border-gray-300  rounded-md text-sm"
                  >
                    {item.weights.map((weight) => (
                      <option key={weight} value={weight}>
                        {weight}
                      </option>
                    ))}
                  </select>
                )}
                <button
                  className="px-2 py-1 text-xs sm:px-3  sm:py-2 sm:text-sm bg-black text-white font-medium max-sm:px-2 max-sm:py-1"
                  onClick={() => handleAddToCart(item._id)}
                >
                  ADD TO CART
                </button>
              </div>
              {/* Weight Selection Dropdown */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendedProducts;
