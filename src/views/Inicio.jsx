import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import "../styles/inicio.css";
const Inicio = () => {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const traerLosDatos = async () => {
      try {
        const respuestaDeLaApi = await fetch("https://fakestoreapi.com/products", { method: "GET" });
        const data = await respuestaDeLaApi.json();
        setProducts(data);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        // 2. Al terminar (sea éxito o error), apagamos el loading
        setLoading(false);
      }
    };

    traerLosDatos();
  }, []);

  return (
    <>
      <section className="products">
          <h2>Nuestros productos</h2>
          {loading ? (
            <div className="loading-container">
              <p>Cargando productos...</p> 
            </div>
          ) : (
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
          )}
        </section>
        
    </>
  )
}

export default Inicio 