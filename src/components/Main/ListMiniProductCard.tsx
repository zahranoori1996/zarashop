import NewArrivals from "./NewArrivals";
import TopRated from "./TopRated";
import Trending from "./Trending";

function ListMiniProductCard() {
  return (
    <div className="flex flex-wrap justify-between max-lg:flex-col">
      <NewArrivals titleList="New Arrivals" />
      <Trending titleList="Trending" />
      <TopRated titleList="Top Rated"/>
    </div>
  );
}

export default ListMiniProductCard;
