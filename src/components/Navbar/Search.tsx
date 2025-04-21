
import Container from "../Container/Container";

function Search() {
  return (
    <div className="shadow">
      <Container>
        <div className="flex items-center justify-between gap-2">
          <img className="max-w-[200px]" src="./src/assets/icons/logo.png" />
          <div className="flex justify-between searchBox border-[#EDEDED] border-2 w-[70vw] text-left rounded-lg p-2">
            <input
              className="w-[90%] focus:outline-0"
              placeholder="Enter your product name.... "
            />
            <button>
              <img className="cursor-pointer" src="./src/assets/icons/search.svg" />
            </button>
          </div>
          <div className="flex gap-1.5">
            <img className="max-w-9 cursor-pointer" src="./src/assets/icons/user.svg" />
            <img className="max-w-9 cursor-pointer" src="./src/assets/icons/heart.svg" />
            <img className="max-w-9 cursor-pointer" src="./src/assets/icons/shopping-bag.svg" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Search;
