import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
interface ILayout {
  children: React.ReactNode;
}

function Layout({ children }: ILayout) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
