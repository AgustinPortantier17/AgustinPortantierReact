import { SyncLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import Anuncio from "../Anuncio/Anuncio.jsx";
import db from "../../db/db.js";
import "./itemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const productsRef = collection(db, "products");

  const getProducts = async () => {
    setLoading(true);
    try {
      const productsRef = collection(db, "products");
      let productsQuery = productsRef;

      if (category) {
        productsQuery = query(productsRef, where("category", "==", category));
      }

      const dataDb = await getDocs(productsQuery);
      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      setProducts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  useEffect(() => {
    getProducts();
  }, [category]);

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
