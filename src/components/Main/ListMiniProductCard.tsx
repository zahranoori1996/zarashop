import NewArrivals from "./NewArrivals";
import TopRated from "./TopRated";
import Trending from "./Trending";

function ListMiniProductCard() {
  return (
    <div className="flex gap-5 flex-wrap justify-between">
      <NewArrivals titleList="New Arrivals" />
      <Trending titleList="Trending" />
      <TopRated titleList="Top Rated"/>
    </div>
  );
}

export default ListMiniProductCard;
