import React from "react";
import star from './../../assets/icons/star.svg'
import { Link } from "react-router-dom";
interface IProductOff {
  image: string;
  title: string;
  rating: number;
  price: number;
  off: number;
  path: string;
}
function ProductOff({ image, title, rating, price, off, path }: IProductOff) {
  return (
    <Link to={path} className="flex">
      <Link to={path}><img className="w-20" src={image} /></Link>
      <div>
        <h3 className="text-md text-gray-400 ">{title}</h3>
        <div className="flex">
          <img className="w-4" src={star}/>
          <img className="w-4" src={star}/>
          <img className="w-4" src={star}/>
          <img className="w-4" src={star}/>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-400 line-through">${price}.00</span>
          <span className="font-semibold text-gray-800">
            ${price - off}.00
          </span>
        </div>
      </div>
    </Link>
  );
}



export default ProductOff;
