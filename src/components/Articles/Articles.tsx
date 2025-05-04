import React from "react";
import Article from "../Article/Article";

function Articles() {
  return (
    <div className="flex gap-4 flex-wrap  max-sm:justify-around">
      <Article
        path="/"
        imageUrl="./src/assets/images/article-fashion.png"
        type="Fashion"
        title="Clothes Retail KPIs 2021 Guide for Clothes Executives."
        author="By Mr Admin"
        date="June 18, 2024"
      />
      <Article
        path="/"
        imageUrl="./src/assets/images/article-shoes.png"
        type="Shoes"
        title="EBT vendor: Claim Your Share of SNAP Online Revenue."
        author="By Mr Jone"
        date="June 18, 2024"
      />
      <Article
        path="/"
        imageUrl="./src/assets/images/article-electronics.png"
        type="Electronics"
        title="Curbside fashion Trends: How to Win the Pickup Battle."
        author="By Mr Pawar"
        date="June 18, 2024"
      />
      <Article
        path="/"
        imageUrl="./src/assets/images/article-clothes.png"
        type="Clothes"
        title="Curbside fashion Trends: How to Win the Pickup Battle."
        author="By Mr Wick"
        date="June 18, 2024"
      />
    </div>
  );
}

export default Articles;
