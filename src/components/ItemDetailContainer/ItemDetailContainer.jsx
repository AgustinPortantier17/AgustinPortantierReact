import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams, Link } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const { id } = useParams();

  const getProducts = async () => {
    try {
      const productRef = doc(db, "products", id);
      const dataDb = await getDoc(productRef);

      if (dataDb.exists()) {
        const data = { id: dataDb.id, ...dataDb.data() };
        setProduct(data);
        setNotFound(false);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.log(error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading-overlay">
          <div className="loading-content">
            <SyncLoader color="rgb(37, 102, 114)" size={15} />
            <p>Cargando...</p>
          </div>
        </div>
      ) : notFound ? (
        <div className="product-not-found">
          <div className="not-found-content">
            <h2>Producto no encontrado</h2>
            <p>Lo sentimos, el producto que buscas no existe.</p>
            <Link to="/" className="back-to-store-button">
              Volver a la tienda
            </Link>
          </div>
        </div>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
