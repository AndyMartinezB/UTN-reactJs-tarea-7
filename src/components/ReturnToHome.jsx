import { useNavigate } from 'react-router-dom';

const ReturnToHome = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/inicio');
  };

  return (
    <button className="return-button" onClick={handleReturn}>
      Volver al Inicio
    </button>
  );
};

export default ReturnToHome;