import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "Andy" && password === "UTNBA") {
      setError(false);
      setUser({ name: "Andy", role: "admin" });
      navigate("/configuracion"); 
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      
      <form onSubmit={handleSubmit} className="login-form">
        <input 
          className="input-login"
          type="text" 
          placeholder="Usuario (Andy)" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <input 
          className="input-login"
          type="password" 
          placeholder="Contraseña (UTNBA)" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button className="button-login" type="submit">Ingresar</button>
      </form>

      {error && <p className="error-message">Usuario y/o contraseña incorrectos</p>}
    </div>
  );
};

export default Login;