import ReturnToHome from "../components/ReturnToHome";
const Configuracion = ({ user, handleLogout }) => {
  return (
    <>
      <div>
        <h2>Configuración</h2>
        <p>Página de configuración. Usuario admitido: {user?.name}</p>
      </div>
      <button 
        onClick={handleLogout} 
        style={{ background: "red", color: "white", padding: "10px", marginTop: "20px" }}
      >
        Cerrar Sesión
      </button>
      <ReturnToHome />
    </>
  );
};

export default Configuracion;