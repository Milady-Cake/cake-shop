import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ProductPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const product = {
    name: "Delicious Chocolate Cake",
    reviews: 5,
    price: 25.0,
    description: "A rich chocolate cake with layers of creamy filling.",
    images: ["cake-image-1.jpg", "cake-image-2.jpg"],
  };

  return (
    <>
      {/* Add to Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-black text-white px-4 py-2 rounded-md"
      >
        Add to Cart
      </button>

      {/* Popup Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <Dialog.Panel className="bg-white p-6 rounded-lg w-2/3 shadow-lg relative">
            {/* Close Button */}
            <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-gray-500">
              ✕
            </button>

            <div className="grid grid-cols-2 gap-6">
              {/* Image Carousel */}
              <div>
                <Swiper spaceBetween={10} slidesPerView={1}>
                  {product.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img} alt={`Product ${index}`} className="w-full rounded-md" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Product Details */}
              <div>
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-gray-500">⭐⭐⭐⭐⭐ {product.reviews} Reviews</p>
                <p className="text-lg font-semibold">${product.price}</p>
                <p className="text-gray-700 mt-2">{product.description}</p>
                <button className="bg-black text-white px-4 py-2 mt-4 rounded-md">
                  Confirm & Add to Cart
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
