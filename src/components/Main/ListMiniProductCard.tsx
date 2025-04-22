import NewArrivals from "./NewArrivals";
import TopRated from "./TopRated";
import Trending from "./Trending";

function ListMiniProductCard() {
  return (
    <>
      <NewArrivals titleList="New Arrivals" />
      <Trending titleList="Trending" />
      <TopRated titleList="Top Rated"/>
    </>
  );
}

export default ListMiniProductCard;
