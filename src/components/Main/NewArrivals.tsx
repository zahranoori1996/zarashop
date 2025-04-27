import React from "react";
import MiniProductCard from "./MiniProductCard";
import { TTitleList } from "../../types/Type";

function NewArrivals({ titleList }: TTitleList) {
  const newProducts = [
    {
      imageSrc: "./src/assets/images/men-yarn.png",
      nameProduct: "MEN Yarn Fleece F..",
      typeProduct: "winter wear",
      price: 61.0,
      discount: 0,
      path: "/newPr",
    },
    {
      imageSrc: "./src/assets/images/men-winter.png",
      nameProduct: "Men’s Winter Leat..",
      typeProduct: "winter wear",
      price: 32.0,
      discount: 12.0,
      path: "/newPr",
    },
    {
      imageSrc: "./src/assets/images/men-winter-2.png",
      nameProduct: "Men’s Winter Leat..",
      typeProduct: "jackets",
      price: 50.0,
      discount: 25.0,
      path: "/newPr",
    },
    {
      imageSrc: "./src/assets/images/better-basics.png",
      nameProduct: "Better Basics Fren..",
      typeProduct: "shorts",
      price: 20.0,
      discount: 10.0,
      path: "/newPr",
    },
  ];
  return (
    <div className="w-fit">
      <h2 className="mb-4 pb-1 border-b-2 border-b-gray-100 font-bold text-lg">
        {titleList}
      </h2>
      {newProducts.map((item, index) => (
        <MiniProductCard key={index} {...item} />
      ))}
    </div>
  );
}

export default NewArrivals;
