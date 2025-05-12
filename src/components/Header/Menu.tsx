import React, { useState } from "react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

function Menu() {
  const [isShowMenu,setIsShowMenu] = useState(false)
  const menuItems = [
    { path: "/", title: "Home" },
    { path: "/categories", title: "Categories" },
    { path: "/mens", title: "Men's" },
    { path: "/womens", title: "Women's" },
    { path: "/perfume", title: "Perfume" },
    { path: "/jewellery", title: "Jewellery" },
    { path: "/blog", title: "Blog" },
    { path: "/hotoffer", title: "Hot Offer" },
  ];

  
  return (
    <Container>
      <nav className="py-4 max-md:py-1">
      <div className="flex justify-end">
      <img onClick={()=> setIsShowMenu(!isShowMenu)} className="hidden max-md:block w-[48px] cursor-pointer" src="./src/assets/icons/menu-burger.svg"/>
      </div>
        <ul className={`flex gap-7 justify-center font-semibold text-[#494949] text-[17px] max-md:text-sm max-lg:gap-3
        ${isShowMenu ? 'max-md:flex-col' : 'max-md:hidden'}
        `}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to='/'>{item.title.toLocaleUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}

export default Menu;
