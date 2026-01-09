import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", maxWidth: "300px", margin: "auto", gap: "10px" }}>
        
        <input 
          type="text" 
          placeholder="Usuario (Andy)" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <input 
          type="password" 
          placeholder="Contraseña (UTNBA)" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button type="submit">Ingresar</button>
      </form>

      {error && <p style={{ color: "red" }}>Credenciales incorrectas</p>}
    </div>
  );
};

export default Login;