import React from "react";
import Card from "../Card/Card";
import Banner from "../Banner/Banner";
import Container from "../Container/Container";

function CardsBanner() {
  return (
    <Container>
      <div className="flex gap-3 justify-around pb-5 max-lg:flex-wrap">
        <Card className="flex flex-col min-w-[250px] w-[270px]" heading="Testimonial">
          <div className="flex flex-col items-center gap-3">
            <img className="w-20" src="./src/assets/images/user.png" />
            <h2 className="font-bold text-gray-600">ALAN DOE</h2>
            <h3 className="">CEO & Founder Invision</h3>
            <img className="w-[30px]" src="./src/assets/icons/quote-left.svg" />
            <p className="text-center text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nam
              est omnis pariatur molestiae eum hic nemo facilis, quae sequi!
            </p>
          </div>
        </Card>
     <div className="w-lg max-lg:order-1 max-lg:w-[100vw]">
     <Banner
          className="min-w-[400px] max-lg:w-full"
          src="./src/assets/images/sumer-discount.png"
        />
     </div>
        <Card className="flex flex-col min-w-[250px] w-[270px]" heading="Our Services">
          <ul className="flex flex-col gap-4">
            <li className="flex gap-3">
              <img className="w-[32px] h-[32px]" src="./src/assets/icons/boat.svg" alt="" />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-gray-500">Worldwide Delivery</h3>
                <p className="text-sm text-gray-400  ">For Order Over $100</p>
              </div>
            </li>
            <li className="flex gap-3 ">
              <img className="w-[32px] h-[32px]" src="./src/assets/icons/service-icn.svg" alt="" />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-gray-500">Next Day Delivery</h3>
                <p className="text-sm text-gray-400  ">UK Orders Only</p>
              </div>
            </li>
            <li className="flex gap-3 ">
              <img className="w-[32px] h-[32px]" src="./src/assets/icons/Vector.svg" alt="" />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-gray-500">Best Online Support</h3>
                <p className="text-sm text-gray-400  ">Hours: 8AM - 11PM</p>
              </div>
            </li>
            <li className="flex gap-3 ">
              <img className="w-[32px] h-[32px]" src="./src/assets/icons/service-icn1.svg" alt="" />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-gray-500">Return Policy</h3>
                <p className="text-sm text-gray-400  ">Easy & Free Return</p>
              </div>
            </li>
            <li className="flex gap-3 ">
              <img className="w-[32px] h-[32px]" src="./src/assets/icons/coupon.svg" alt="" />
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-gray-500">30% Money Back</h3>
                <p className="text-sm text-gray-400  ">For Order Over $100</p>
              </div>
            </li>
          </ul>
        </Card>
      </div>
    </Container>
  );
}

export default CardsBanner;
