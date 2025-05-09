import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";

import Blog from "./pages/Blog/Blog";
import Login from "./pages/Login/Login";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;
