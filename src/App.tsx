import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Navbar from "./components/Navbar/Navbar";


function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/store" element={<Store />}/>
    </Routes>
      
    </>
  );
}

export default App;
