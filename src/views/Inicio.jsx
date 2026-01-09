import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "../styles/inicio.css";
const Inicio = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    const traerLosDatos = async () => {
      
      const respuestaDeLaApi = await fetch("https://fakestoreapi.com/products", { method: "GET" });
      const data = await respuestaDeLaApi.json();
      setProducts(data);
    };

    traerLosDatos();
  }, []);
  return (
    <>
      <div>
        <h2>Inicio</h2>
        <p>Página de inicio.</p>
      </div>
      <section className="products">
          <h3>Nuestros productos</h3>
          <div className="products-list">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt="" />
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <div className="buy">
                  <p>{product.price} usd</p>
                  <button>Comprar</button>
                  <Link to={`/producto/${product.id}`}>
                    <button>Ver página</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
    </>
  )
}

export default Inicio 