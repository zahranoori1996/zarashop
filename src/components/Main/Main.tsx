import React from "react";
import Categories from "../Category/Categories";
import ListMiniProductCard from "./ListMiniProductCard";
import Container from "../Container/Container";
import BestSeller from "./BestSeller";
import SuggestedProduct from "./SuggestedProduct";
import NewProducts from "./NewProducts";
import CardsBanner from "../CardsBanner/CardsBanner";
import Articles from "../Articles/Articles";

function Main() {
  return (
    <Container>
      <div className="flex gap-6 ">
        <div className="flex flex-col gap-3 w-fit">
          <Categories />
          <BestSeller />
        </div>

        <div className="flex flex-col w-full gap-8">
          <ListMiniProductCard />
          <SuggestedProduct />
          <NewProducts />
          <CardsBanner/>
          <Articles />
        </div>

      </div>
    </Container>
  );
}

export default Main;
