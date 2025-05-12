import Container from "../Container/Container";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-900 ">
      <Container>
        <div className="flex flex-col gap-3 max-lg:gap-0">
          <h2 className="text-[#ff8f9c] font-bold px-12 py-6 max-lg:text-sm max-md:text-xs max-lg:px-6 max-lg:py-3">BRAND DIRECTORY</h2>

          <div className="text-gray-500 px-12 max-lg:text-sm max-md:text-xs max-lg:px-6 max-lg:py-2">
            <span className="font-bold">FASHION: </span>
            <Link to="/">T-Shirt</Link> |<Link to="/"> Shirt</Link> |
            <Link to="/"> Shorts & Jeans</Link> |<Link to="/"> Jackets</Link> |
            <Link to="/"> Dress & Frock</Link> |<Link to="/"> Innerwear</Link> |
            <Link to="/"> Hosiery</Link>
          </div>
          <div className="text-gray-500 px-12 max-lg:text-sm max-md:text-xs max-lg:px-6 max-lg:py-2">
            <span className="font-bold">FOOTWEAR: </span>
            <Link to="/">Branded</Link> |<Link to="/"> Sport</Link> |
            <Link to="/"> Formal</Link> |<Link to="/"> First Copy</Link> |
            <Link to="/"> Boots</Link> |<Link to="/"> Casual</Link> |
            <Link to="/"> Party Wear Shoes</Link>
            <Link to="/"> Long Shoes</Link>
          </div>
          <div className="text-gray-500 px-12 max-lg:text-sm max-md:text-xs max-lg:px-6 max-lg:py-2">
            <span className="font-bold">JEWELLERY: </span>
            <Link to="/"> Neckiace</Link> |<Link to="/"> Earrings</Link> |
            <Link to="/"> Couple Rings</Link> |<Link to="/"> Pendente</Link> |
            <Link to="/"> Crystal</Link> |<Link to="/"> Bangles</Link> |
            <Link to="/"> Bracelets</Link> |<Link to="/"> Nosepin</Link> |
            <Link to="/"> Chain</Link>
          </div>
        </div>
        <div className="border-b-2 border-b-gray-800 py-3"></div>
      <div className="flex flex-wrap">
      <div className="text-gray-500 flex flex-col gap-2 px-12 py-6 max-lg:text-sm max-md:text-xs max-lg:px-6 max-lg:py-2">
          <Link className="font-bold text-white pt-4" to="/"> POPULAR CATEGORY</Link>
          <Link to="/"> Fashion</Link>
          <Link to="/"> Electronic</Link>
          <Link to="/"> Cosmetic</Link>
          <Link to="/"> Health</Link>
          <Link to="/"> Watches</Link>
        </div>
        <div className="text-gray-500 flex flex-col gap-2 px-12 py-6 max-lg:text-sm max-md:text-xs max-lg:px-6 max-lg:py-2">
          <Link className="font-bold text-white pt-4" to="/">PRODUCTS</Link>
          <Link to="/"> Price Drop</Link>
          <Link to="/"> New Products</Link>
          <Link to="/"> Best Sales</Link>
          <Link to="/"> Sitemap</Link>
          <Link to="/"> Contact Us</Link>
        </div>
        <div className="text-gray-500 flex flex-col gap-2 px-12 py-6 max-lg:text-sm max-md:text-xs max-lg:px-6 max-lg:py-2">
          <Link className="font-bold text-white pt-4" to="/">OUR COMPANY</Link>
          <Link to="/"> Delivery</Link>
          <Link to="/"> Legal Notice</Link>
          <Link to="/"> Teams And Conditions</Link>
          <Link to="/"> About Us</Link>
          <Link to="/"> Secure Payment</Link>
        </div>
        <div className="text-gray-500 flex flex-col gap-2 px-12 py-6 max-lg:text-sm max-md:text-xs max-lg:px-6 max-lg:py-2">
          <Link className="font-bold text-white pt-4" to="/">SERVICES</Link>
          <Link to="/"> Price Drop</Link>
          <Link to="/"> New Products</Link>
          <Link to="/"> Best Sales</Link>
          <Link to="/"> Sitemap</Link>
          <Link to="/"> Contact Us</Link>
        </div>
        <div className="text-gray-500 flex flex-col gap-2 px-12 py-6 max-lg:text-sm max-md:text-xs max-lg:px-6 max-lg:py-2">
          <Link className="font-bold text-white pt-4" to="/">CONTACT</Link>
          <div className="flex w-[210px] items-start gap-2">
            <img className="w-5 pt-1" src="./src/assets/icons/location.svg" alt="" />
            <p>419 State 414 Rte Beaver Doms, New York(NY). 14812, USA</p>
          </div>
          <div className="flex w-[210px] gap-2">
            <img className="w-5 " src="./src/assets/icons/call.svg" alt="" />
            <p>032 454-3256</p>
          </div>
          <div className="flex w-[210px] gap-2">
            <img className="w-5" src="./src/assets/icons/email.svg" alt="" />
            <p>Zahranoorisorkhani@gmail.com</p>
          </div>
        </div>
      </div>
        
      </Container>
    </div>
  );
}

export default Footer;
