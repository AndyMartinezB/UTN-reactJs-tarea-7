import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/detalleProducto.css";
import ReturnToHome from "../components/ReturnToHome";

const DetalleProducto = () => {
  
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchSingleProduct = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProducto(data);
    };
    
    fetchSingleProduct();
  }, [id]);

  if (!producto) return <h2>Cargando producto...</h2>;

  return (
    <div className="detalle-container">
      <h2>{producto.title}</h2>
      <img className="detalle-imagen" src={producto.image} alt={producto.title}/>
      <p>{producto.description}</p>
      <h3>Precio: ${producto.price}</h3>
      <p>Categoría: {producto.category}</p>
      <ReturnToHome />
    </div>
  );
};

export default DetalleProducto;