import React from "react";
import MiniProductCard from "./MiniProductCard";
import { TTitleList } from "../../types/Type";

function TopRated({ titleList }: TTitleList) {
  const TopRateProducts = [
    {
      imageSrc: "./src/assets/images/platinum.png",
      nameProduct: "Platinum Zircon",
      typeProduct: "jewellery",
      price: 65.0,
      discount: 5.0,
      path: "/jelly",
    },
    {
      imageSrc: "./src/assets/images/smart-watch.png",
      nameProduct: "Smart Watch Violla",
      typeProduct: "Watches",
      price: 70.0,
      discount: 21.0,
      path: "/jelly",
    },
    {
      imageSrc: "./src/assets/images/shampoo.png",
      nameProduct: "Shampoo, Conditioner & Facewash",
      typeProduct: "cosmetics",
      price: 70.0,
      discount: 13.0,
      path: "/jelly",
    },
    {
      imageSrc: "./src/assets/images/rose-gold.png",
      nameProduct: "Rose Gold ",
      typeProduct: "jewellery",
      price: 30.0,
      discount: 8.0,
      path: "/jelly",
    },
  ];
  return (
    <div className="w-[40%]">
      <h2 className="mb-4 pb-1 border-b-2 border-b-gray-100 font-bold text-lg">
        {titleList}
      </h2>
      {TopRateProducts.map((item, index) => (
        <MiniProductCard key={index} {...item} />
      ))}
    </div>
  );
}

export default TopRated;
