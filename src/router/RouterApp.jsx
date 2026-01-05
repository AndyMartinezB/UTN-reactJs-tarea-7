import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "../views/Inicio.jsx";
import Nosotros from "../views/Nosostros.jsx";
import Contacto from "../views/Contacto.jsx";
import NotFound from "../views/NotFound.jsx";

const RouterApp = () => {  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={ <Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RouterApp;