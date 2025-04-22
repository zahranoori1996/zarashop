import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

function PopularCategory() {
  const dataPouplarCategory = [
    {
      id: 1,
      nameCategory: "t-shirts",
      count: 35,
      imageSrc: "./src/assets/icons/tee.png",
      path: "tshirts",
    },
    {
      id: 2,
      nameCategory: "jacket",
      count: 16,
      imageSrc: "./src/assets/icons/jacket.png",
      path: "jackets",
    },
    {
      id: 3,
      nameCategory: "watch",
      count: 27,
      imageSrc: "./src/assets/icons/watch.png",
      path: "watchs",
    },
    {
      id: 4,
      nameCategory: "hat & caps",
      count: 30,
      imageSrc: "./src/assets/icons/hat.png",
      path: "hats",
    },
  ];
  return (
    <Container>
     <div className="py-4 flex gap-4 justify-between flex-wrap max-lg:justify-center">
        {
            dataPouplarCategory.map((category,index)=>(
                <div key={index} className="border-[#EDEDED] border-2 p-4 flex rounded-xl w-[300px] min-w-[200px] justify-between">
                   <div className="flex gap-3">
                   <div className="p-3 border-[#e3e3e3] border-2 rounded-md">
                        <img className="w-[30px]" src={category.imageSrc}/>
                    </div>
                    <div className="text-left flex flex-col gap-4">
                        <h3 className="font-semibold ">{category.nameCategory.toLocaleUpperCase()}</h3>
                        <Link to={category.path} className="text-[12px] text-[#FF8F9C]">Show All</Link>
                    </div>
                   </div>
                    <div className="text-[11px] text-[#707070]">({category.count})</div>

                </div>
            ))
        }
    </div>
    </Container>
  );
}

export default PopularCategory;
