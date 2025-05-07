import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Blog from "./pages/Blog/Blog";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
