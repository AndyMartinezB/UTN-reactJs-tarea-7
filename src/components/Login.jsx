import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/login');
  };

  return (
    <button className="login-button" onClick={handleReturn}>
      Iniciar sesión
    </button>
  );
};

export default Login;