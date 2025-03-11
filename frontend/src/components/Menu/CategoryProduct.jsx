import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import CakeItem from "../CakeItem/CakeItem";
import HeadPart from "../../Utils/HeadPart";

const CategoryProduct = () => {
  const { category } = useParams();
  const { cake_list } = useContext(StoreContext);

  // Filter cakes by category
  const filteredCakes = cake_list.filter((item) => item.category === category);

  const categoryImages = {
    "Chocolate Cake":
      "https://img.freepik.com/premium-photo/black-background-with-red-white-striped-tie-that-says-word-it_111797-1233.jpg?ga=GA1.1.1965850165.1734144540&semt=ais_hybrid",
    "Freshcream Cake": "https://img.freepik.com/premium-photo/fresh-cheesecake-with-fruits-berries-wooden-table-piece-dessert-with-caramel-sauce-classic-traditional-recipe-header-banner-mockup-with-copy-space-ai-generated_868611-9391.jpg?w=1380",

    "Cup Cake": "https://img.freepik.com/premium-photo/delicious-cupcake-topped-with-colorful-frosting-sprinkles-pink-background_1275611-22399.jpg?ga=GA1.1.1965850165.1734144540&semt=ais_hybrid",
    "Fondant Cake": "https://img.freepik.com/premium-photo/close-up-pink-cake_1048944-11816460.jpg?ga=GA1.1.1965850165.1734144540&semt=ais_hybrid",
    Hampers: "",
    "Tier Cake": "https://img.freepik.com/premium-photo/three-tiered-cake-table_118124-216664.jpg?w=1380",
    "Number Cake": "https://img.freepik.com/premium-photo/cake-with-number-it-table_1213951-42145.jpg?w=1800",
    Desserts: "",
  };
  return (
    <div className="px-2 w-full lg:px-12  lg:mt-24 max-md:px-1">
      <div>
        <HeadPart heading={category} image={categoryImages[category]} />
      </div>

      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-9"
        style={{
          gridAutoRows: "minmax(250px, auto)", // Adjust height dynamically
        }}
      >
        {filteredCakes.map((cake) => (
          <CakeItem
            key={cake._id} // Ensure key is included
            id={cake._id}
            name={cake.name}
            description={cake.description}
            price={cake.price}
            image={cake.images}
            prices={cake.prices}
            rating={cake.rating}
            reviews={cake.reviews}
            weights={cake.weights}
            category={cake.category}
            offerPrice={cake.offerPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
