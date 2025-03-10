import React from "react";

const products = [
  {
    id: 1,
    name: "Brioche",
    price: "$24",
    image:
      "https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/10/shop-1.jpg",
  },
  {
    id: 2,
    name: "Cookies",
    price: "$38",
    image:
      "https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/10/shop-1.jpg",
  },
  {
    id: 3,
    name: "Sandwich",
    price: "$56",
    image:
      "https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/10/shop-1.jpg",
  },
  {
    id: 4,
    name: "Pancake",
    price: "$62",
    image:
      "https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/10/shop-1.jpg",
  },
];

export default function ProductSection() {
  return (
    <div className="flex justify-center w-full  items-center">
  <section className="max-w-7xl    px-6 py-20">
      <div className="h-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Left Text Content */}
        <div className="flex-1">
          <h4 className="text-sm tracking-wide text-gray-500 uppercase">
            Our Shop
          </h4>
          <h2 className="text-4xl font-semibold text-gray-900 mt-2">
            Best Selling
          </h2>
          <p className="text-gray-600">
            Discover our freshly baked goods, made with love and the finest
            ingredients. Discover our freshly baked goods, made with love and
            the finest ingredients. Discover our freshly baked goods, made with
            love and the finest ingredients. Discover our freshly baked goods,
            made with love and the finest ingredients. Discover our freshly
            baked goods, made with love and the finest ingredients.
          </p>
          <button className="mt-6 bg-[#b19787] text-white px-6 py-2 rounded uppercase tracking-wide hover:bg-[#8a6f5a] transition">
            Catalogue
          </button>

          {/* Product Grid - Responsive but keeps LG layout intact */}
          <div className="flex mt-10 w-full justify-between items-center max-md:flex-col h-[50%] sm-w-[50%] md:w-full lg:w-[150%]">
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="relative w-[140px]  sm:w-[160px] md:w-[180px] lg:w-[200px] h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px]"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full max-md:w-[160%] h-full object-cover shadow-lg rounded-lg"
                  />
                  <span className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-1 text-xs">
                    {product.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image & Products Section - Responsive */}
        <div className="relative flex-1 max-w-lg mx-auto">
          {/* Main Image */}
          <div className="relative">
            <img
              src="https://www.nicdark-themes.com/themes/bakery/wp/demo/bakery/wp-content/uploads/sites/2/2019/09/project-1-700x1000.jpg"
              alt="Bakery Items"
              className="w-full h-auto rounded-lg shadow-md"
            />

            {/* Play Button */}
            <button className="animate-pulse absolute inset-0 m-auto bg-white bg-opacity-80 w-16 h-16 flex items-center justify-center rounded-full shadow-md hover:bg-opacity-100 transition">
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
    </div>
  
  );
}
