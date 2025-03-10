import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import CakeDisplay from "../../components/CakeDisplay/CakeDisplay";
import BakeryUI from "./Hero";
import ProductSection from "./Category";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <CakeDisplay category={category} />
      <ProductSection />
      <BakeryUI />
    </div>
  );
};

export default Home;
