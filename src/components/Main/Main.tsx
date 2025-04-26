import React from "react";
import Categories from "../Category/Categories";
import ListMiniProductCard from "./ListMiniProductCard";
import Container from "../Container/Container";
import BestSeller from "./BestSeller";

function Main() {
  return (
    <Container>
      <div className="flex gap-6">
        <div className="flex flex-col gap-3">
        <Categories />
        <BestSeller />
        </div>
        <ListMiniProductCard />
        
      </div>
    </Container>
  );
}

export default Main;
