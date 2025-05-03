import React from "react";
import star from "./../../assets/icons/star.svg";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";

function SuggestedProduct() {
  return (
    <div className="">
      <h2 className="border-b-gray-100 border-b-2 pb-2 font-semibold">
        Deal Of The Day
      </h2>
      <div className="shadow rounded-xl w-full p-4 my-8 flex">
       <Link to='/'>
       <img src="./src/assets/images/shampoo.png" alt="" />
       </Link>
        <div className="flex flex-col gap-2 pr-6">
          <div className="flex">
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
            <img src={star} />
          </div>
          <h2 className="uppercase font-semibold">
            SHAMPOO, CONDITIONER & FACEWASH....
          </h2>
          <p className="text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
            amet consectetur Lorem ipsum dolor
          </p>
          <div className="flex w-[150px] justify-between">
            <span className="text-xl font-bold text-[#FF8F9C]">$150.00</span>
            <span className="text-xl line-through text-gray-500">$200.00</span>
          </div>
          <button className="text-left bg-[#FF8F9C] w-fit px-4 py-2 rounded-xl text-white font-semibold uppercase cursor-pointer">
            add to cart
          </button>
          <div className="flex justify-between text-gray-700 text-sm">
            <span className="uppercase">already sold : 20</span>
            <span className="uppercase">available : 40</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-200">
            <div className=" h-2.5 rounded-full dark:bg-[#FF8F9C] w-[40%]"></div>
          </div>
          {/* <input
            type="range"
            value="20"
            max="60"
            className="accent-[#FF8F9C] "
          /> */}
          <p className="font-bold text-sm uppercase text-gray-800 py-3">
            HURRY UP! OFFER ENDS IN:
          </p>

          <Countdown
            date={Date.now() + 336 * 60 * 60 * 1000}
            renderer={({ days, hours, minutes, seconds, completed }) =>
              completed ? (
                <h2>تخفیف به پایان رسید!</h2>
              ) : (
                <div className="timer flex gap-3">
                  <span className="w-[70px] h-[70px] bg-gray-200 rounded-lg flex flex-col justify-center items-center ">
                    <span className="text-2xl font-semibold">
                      {String(days).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] text-gray-600">Days</span>
                  </span>
                  <span className="w-[70px] h-[70px] bg-gray-200 rounded-lg flex flex-col justify-center items-center ">
                    <span className="text-2xl font-semibold">
                      {String(hours).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] text-gray-600">Hours</span>
                  </span>
                  <span className="w-[70px] h-[70px] bg-gray-200 rounded-lg flex flex-col justify-center items-center">
                    <span className="text-2xl font-semibold">
                      {String(minutes).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] text-gray-600">Minutes</span>
                  </span>
                  <span className="w-[70px] h-[70px] bg-gray-200 rounded-lg flex flex-col justify-center items-center">
                    <span className="text-2xl font-semibold">
                      {String(seconds).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] text-gray-600">Seconds</span>
                  </span>
                </div>
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default SuggestedProduct;
