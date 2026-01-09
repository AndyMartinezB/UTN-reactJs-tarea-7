import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Inicio from "../views/Inicio.jsx";
import Nosotros from "../views/Nosostros.jsx";
import Contacto from "../views/Contacto.jsx";
import NotFound from "../views/NotFound.jsx";
import Configuracion from "../views/Configuracion.jsx";
import DetalleProducto from "../views/DetalleProducto.jsx";
import Layout from "../components/Layout.jsx";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import Login from "../views/Login.jsx";

const RouterApp = () => {
  const [user, setUser] = useState(null);
  const handleLogout = () => setUser(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/inicio" replace />} />

          <Route path="inicio" element={ <Inicio />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
           path="configuracion"
          element={
            <ProtectedRoute user={user}>
              <Configuracion handleLogout={handleLogout} user={user} />
            </ProtectedRoute>
          } />
          <Route path="producto/:id" element={<DetalleProducto />} />
          <Route path="*" element={<NotFound />} />
        </Route>  
      </Routes>
    </BrowserRouter>
  );
}
export default RouterApp;