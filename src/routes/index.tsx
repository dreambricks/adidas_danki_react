import { Routes, Route, BrowserRouter } from "react-router";
import { Home } from "../pages/Home";
import { Welcome } from "../pages/Welcome";
import { ListShoes } from "../pages/ListShoes";
import { ShoesDetail } from "../pages/ShoesDetail";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bem-vindo" element={<Welcome />} />
        <Route path="/listar-tenis" element={<ListShoes />} />
        <Route path="/listar-tenis/:id" element={<ShoesDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
