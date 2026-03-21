import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";
import WorkWithUs from "./pages/WorkWithUs";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aempresa" element={< AboutUs/>} />
        <Route path="/produtos" element={< Products/>} />
        <Route path="/produto/:id" element={<ProductDetail />} />
        <Route path="/trabalheconosco" element={< WorkWithUs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;