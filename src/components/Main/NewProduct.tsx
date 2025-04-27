import React from "react";
import { Link } from "react-router-dom";

function NewProduct() {
  return (
    <div  className="w-[230px] p-4 shadow rounded-lg flex flex-col gap-1 ">
      <Link to='/'>
      <img src="./src/assets/images/shampoo.png" alt="" />
      </Link>
      <h2 className="uppercase text-sm text-[#FF8F9C] font-semibold">jacket</h2>
      <p className="text-gray-500">Men’s Winter Leathers Jackets</p>
      <div className="flex">
        <img src="./src/assets/icons/star.svg"/>
        <img src="./src/assets/icons/star.svg"/>
        <img src="./src/assets/icons/star.svg"/>
        <img src="./src/assets/icons/star.svg"/>
        <img src="./src/assets/icons/star.svg"/>
      </div>
      <div>
        <span className="font-bold pr-2">$48.00</span>
        <span className="line-through text-gray-600 text-sm">$75.00</span>
      </div>
    </div>
  );
}

export default NewProduct;
