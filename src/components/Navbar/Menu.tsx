import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

function Menu() {
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
      <nav className="py-4 max-md:hidden">
        <ul className="flex gap-7 justify-center font-semibold text-[#494949] text-[17px] ">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.title.toLocaleUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}

export default Menu;
