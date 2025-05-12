import React from "react";
import Socialmedia from "./Socialmedia";
import Search from "./Search";
import Menu from "./Menu";

function Header() {
  return (
    <div>
      <Socialmedia />
      <Search />
      <Menu />
    </div>
  );
}

export default Header;
