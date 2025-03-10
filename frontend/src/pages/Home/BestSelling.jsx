import React from "react";

const products = [
  {
    id: 1,
    name: "Cakes",
    image: "https://static.wixstatic.com/media/35744d_1154b575a3e64f0eaf4d270ed91d3429~mv2.jpg/v1/fill/w_280,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_20220620_150628.jpg",
  },
  {
    id: 2,
    name: "Pastries",
    image: "https://static.wixstatic.com/media/35744d_1154b575a3e64f0eaf4d270ed91d3429~mv2.jpg/v1/fill/w_280,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_20220620_150628.jpg",
  },
  {
    id: 3,
    name: "Party Menu",
    image: "https://static.wixstatic.com/media/35744d_1154b575a3e64f0eaf4d270ed91d3429~mv2.jpg/v1/fill/w_280,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_20220620_150628.jpg",
  },
  {
    id: 4,
    name: "Customized Cakes",
    image: "https://static.wixstatic.com/media/35744d_1154b575a3e64f0eaf4d270ed91d3429~mv2.jpg/v1/fill/w_280,h_383,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_20220620_150628.jpg",
  },
];

export default function BestSelling() {
  return (
    <section className="max-w-6xl mx-auto py-12 mt-14 px-6 text-center">
      <h2 className="text-3xl font-semibold text-gray-800">Best Selling Product</h2>
      <p className="text-gray-500 mt-2">
        Nicky's Cafe & Fine Pastries prides itself on using the finest
        ingredients in all of our items.
      </p>

      {/* Grid Container */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col items-center">
            {/* Image Box */}
            <div className="border-2  bg-[#C3A27C] p-2 ">
              <img
                src={product.image}
                alt={product.name}
                className="w-[250px] h-[300px] bg-[#C3A27C] p-1 object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <h3 className="mt-3 text-lg font-semibold text-gray-800">
              {product.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
