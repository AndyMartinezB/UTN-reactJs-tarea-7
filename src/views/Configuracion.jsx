import ReturnToHome from "../components/ReturnToHome";
import "../styles/configuracion.css";

const Configuracion = ({ user, handleLogout }) => {
  return (
    <div className="config-container">
      
      <div className="config-info">
        <h2>Configuración</h2>
        <p>Usuario admitido: <strong>{user?.name}</strong></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis earum corrupti animi laboriosam fuga quam architecto omnis quos? Voluptatum assumenda accusantium nesciunt. Quia inventore dolorem sit possimus, architecto et.</p>
      </div>
      <button className="button-logout" onClick={handleLogout}>
        Cerrar Sesión
      </button>
      <div style={{ marginTop: '20px' }}>
        <ReturnToHome />
      </div>

    </div>
  );
};

export default Configuracion;