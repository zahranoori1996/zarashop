import Container from "../Container/Container";
import ACategory from "./ACategory";

function RandomCategory() {
  const dataPouplarCategory = [
    {
      id: 1,
      nameCategory: "t-shirts",
      count: 35,
      imageSrc: "./src/assets/icons/tee.png",
      path: "/tshirts",
    },
    {
      id: 2,
      nameCategory: "jacket",
      count: 16,
      imageSrc: "./src/assets/icons/jacket.png",
      path: "/jackets",
    },
    {
      id: 3,
      nameCategory: "watch",
      count: 27,
      imageSrc: "./src/assets/icons/watch.png",
      path: "/watchs",
    },
    {
      id: 4,
      nameCategory: "hat & caps",
      count: 30,
      imageSrc: "./src/assets/icons/hat.png",
      path: "/hats",
    },
  ];
  return (
    <Container>
      <div className="py-4 px-2 flex gap-4 justify-between flex-wrap ">
        {dataPouplarCategory.map((category, index) => (
          <ACategory key={index} {...category} />
        ))}
      </div>
    </Container>
  );
}

export default RandomCategory;
