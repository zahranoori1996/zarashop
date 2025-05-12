import React from "react";
import Banner from "../../components/Banner/Banner";
import bannerHeader from "../../assets/images/banner.png";
import RandomCategory from "../../components/RandomCategory/RandomCategory";
function Home() {
  return (
    <div className="pb-3 overflow-x-hidden">
      <Banner
        className="w-full px-2"
        src={bannerHeader}
        alt="trending item women's latest fashion sale"
      />
      <RandomCategory />
    </div>
  );
}

export default Home;
