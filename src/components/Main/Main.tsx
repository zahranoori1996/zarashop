import React from "react";
import Categories from "../Category/Categories";
import ListMiniProductCard from "./ListMiniProductCard";
import Container from "../Container/Container";

function Main() {
  return (
    <Container>
      <div className="flex gap-6">
        <Categories />
        <ListMiniProductCard />
      </div>
    </Container>
  );
}

export default Main;
