import { useState, useEffect } from "react";
import getProducts from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => {
        const dataProduct = data.find((product) => product.id === parseInt(id));
        setProduct(dataProduct);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="loading-overlay">
          <div className="loading-content">
            <SyncLoader color="rgb(37, 102, 114)" size={15} />
            <p>Cargando...</p>
          </div>
        </div>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
