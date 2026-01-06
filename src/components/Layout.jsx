// components/DashboardLayout.jsx
import { Outlet, Link } from "react-router-dom";
import "../styles/layout.css";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
			<Header />
			<div className="layout">
					<nav className="sidebar">
						<h3>Menú lateral</h3>
						<ul>
						<li><Link to="/">Inicio</Link></li>
						<li><Link to="/nosotros">Nosotros</Link></li>
						<li><Link to="/contacto">Contacto</Link></li>
						<li><Link to="/configuración">Configuración</Link></li>
						</ul>
					</nav>

					<main className="outlet-content">
						<Outlet /> 
					</main>
			</div>
			<Footer />
    </> 
  );
};

export default Layout;