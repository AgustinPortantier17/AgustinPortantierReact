import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db.js";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getProducts = async () => {
    try {
      const productRef = doc(db, "products", id);
      const dataDb = await getDoc(productRef);
      const data = { id: dataDb.id, ...dataDb.data() };
      setProduct(data);
    } catch (error) {
      console.log(error);
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
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
