import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import Anuncio from "../Anuncio/Anuncio.jsx";
import "./itemListContainer.css";
import { SyncLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config.js";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();
  const { category } = useParams();
  const productsRef = collection(db, "products");

  const getProducts = async () => {
    try {
      const dataDb = await getDocs(productsRef);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
    } catch (error) {}
  };

  return (
    <div className="main">
      {loading ? (
        <div className="loading-overlay">
          <div className="loading-content">
            <SyncLoader color="rgb(37, 102, 114)" size={15} />
            <p>Cargando...</p>
          </div>
        </div>
      ) : (
        <ItemList products={products} />
      )}
      <Anuncio />
    </div>
  );
};

export default ItemListContainer;
