import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/store" element={<Store />}/>
    </Routes>
      <Footer/>
    </>
  );
}

export default App;
