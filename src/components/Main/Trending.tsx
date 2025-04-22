import React from "react";
import { TTitleList } from "../../types/Type";
import MiniProductCard from "./MiniProductCard";

function Trending({ titleList }: TTitleList) {
  const trendingProducts = [
    {
      imageSrc: "./src/assets/images/running-white.png",
      nameProduct: "Running & Trekki Black",
      typeProduct: "sports",
      price: 49.0,
      discount: 24.0,
      path: '/runnig'
    },
    {
      imageSrc: "./src/assets/images/trekking-black.png",
      nameProduct: "MEN Yarn Fleece F..",
      typeProduct: "sports",
      price: 78.0,
      discount: 42.0,
      path: '/runnig'
    },
    {
      imageSrc: "./src/assets/images/shoe-women.png",
      nameProduct: "Women's Party",
      typeProduct: "party wear",
      price: 94.0,
      discount: 54.0,
      path: '/runnig'
    },
    {
      imageSrc: "./src/assets/images/sports-claw.png",
      nameProduct: "Sport Claw",
      typeProduct: "sports ",
      price: 65.0,
      discount: 12.0,
      path: '/runnig'
    }
  ];
  return (
    <div className="w-[40%]">
      <h2 className="mb-4 pb-1 border-b-2 border-b-gray-100 font-bold text-lg">
        {titleList}
      </h2>
      {trendingProducts.map((item, index) => (
        <MiniProductCard key={index} {...item} />
      ))}
    </div>
  );
}

export default Trending;
