import Container from "../Container/Container";

const dataSocialMedia = [
  {
    id: 1,
    link: "https://google.com",
    srcImage: "./src/assets/icons/icons8-facebook.svg",
    title: "facebook",
  },
  {
    id: 2,
    link: "https://google.com",
    srcImage: "./src/assets/icons/icons8-twitter-bird.svg",
    title: "twitter",
  },
  {
    id: 3,
    link: "https://google.com",
    srcImage: "./src/assets/icons/icons8-instagram.svg",
    title: "instagram",
  },
  {
    id: 4,
    link: "https://google.com",
    srcImage: "./src/assets/icons/icons8-linkedin.svg",
    title: "linkedin",
  },
];
function Socialmedia() {
  return (
    <div className="shadow h-9 flex items-center ">
      <Container>
        <div className="flex justify-between max-sm:flex-wrap px-2">
          <div className="flex">
            {dataSocialMedia.map((item) => (
              <a key={item.id} href={item.link} target="_blank">
                <img src={item.srcImage} alt={item.title} />
              </a>
            ))}
          </div>
          <div className="max-sm:hidden">
            <h3 className="text-gray-600 text-sm font-semibold">
            FREE SHIPPING THIS WEEK ORDER OVER - $55
            </h3>
          </div>
          <div className="text-gray-600 ">
            <select className="cursor-pointer" name="" id="">
              <option className="cursor-pointer" value="">Persian</option>
              <option className="cursor-pointer" value="">English</option>
            </select>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Socialmedia;
