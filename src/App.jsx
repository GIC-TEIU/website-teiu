import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aempresa" element={< AboutUs/>} />
        <Route path="/produtos" element={< Products/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;