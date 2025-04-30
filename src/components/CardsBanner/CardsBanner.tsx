import React from "react";
import Card from "../Card/Card";
import Banner from "../Banner/Banner";
import Container from "../Container/Container";

function CardsBanner() {
  return (
      <Container>
    <div className="flex gap-5 justify-between">
        <Card heading="Testimonial">
          <div className="flex flex-col items-center">
            <img className="w-14" src="./src/assets/images/user.png" />
            <h2>ALAN DOE</h2>
            <h3>CEO & Founder Invision</h3>
            <img className="w-[50px]" src="./src/assets/icons/quote-left.svg"/>
            <p></p>
          </div>
        </Card>
        <Banner className="w-[50%]" src="./src/assets/images/sumer-discount.png" />
        <Card heading="Our Services">
          <div>
        
          </div>
        </Card>
    </div>
      </Container>
  );
}

export default CardsBanner;
