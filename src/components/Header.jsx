import { Link } from "react-router-dom";
import "../styles/header.css";
const Header = () => {
  return (
    <header className="header">
      <h1>Tarea Nº7: Mini dashboard - Rutas públicas y protegidas</h1>
      <Link to="/login">
        Iniciar sesion
      </Link>  
    </header>
  );
};

export default Header;
