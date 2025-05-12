import { Link } from "react-router-dom";
import Container from "../Container/Container";

function Search() {
  return (
    <div className="shadow p-2">
      <Container>
        <div className="flex items-center justify-between gap-2 max-md:flex-wrap">
          <Link to='/'>
            <img
              className="max-w-[200px] max-md:max-w-[120px] max-md:order-2 "
              src="./src/assets/icons/logo.png"
            />
          </Link>
          <div className="flex justify-between searchBox border-[#EDEDED] border-2 w-[70vw] text-left rounded-lg p-2 max-md:order-first max-md:w-[100vw]">
            <input
              className="w-[90%] focus:outline-0 max-md:text-[14px]"
              placeholder="Enter your product name.... "
            />
            <button>
              <img
                className="cursor-pointer"
                src="./src/assets/icons/search.svg"
              />
            </button>
          </div>
          <div className="flex gap-1.5 max-md:order-3">
            <Link to="/login">
              <img
                className="max-w-9 cursor-pointer max-md:w-5"
                src="./src/assets/icons/user.svg"
              />
            </Link>
            <Link to="/">
              <img
                className="max-w-9 cursor-pointer max-md:w-5"
                src="./src/assets/icons/heart.svg"
              />
            </Link>
            <Link to="/">
              <img
                className="max-w-9 cursor-pointer max-md:w-5"
                src="./src/assets/icons/shopping-bag.svg"
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Search;
