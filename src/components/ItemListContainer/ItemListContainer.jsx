import { SyncLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import Anuncio from "../Anuncio/Anuncio.jsx";
import db from "../../db/db.js";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("default");
  const { category } = useParams();

  const sortProducts = (productsToSort, sortType) => {
    const sorted = [...productsToSort];

    switch (sortType) {
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "stock-desc":
      return sorted.sort((a, b) => b.stock - a.stock);
    default:
      return sorted;
  }
  }

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

  const sortedProducts = sortProducts(products, sortBy);


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
      <div className="products-container">
        <div className="filters-section">
          <h2>{category ? `Productos de ${category}` : "Todos los productos"}</h2>
          
          <div className="sort-controls">
            <label htmlFor="sort-select">Ordenar por:</label>
            <select 
              id="sort-select"
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="default">Defecto</option>
              <option value="name-asc">Nombre (A-Z)</option>
              <option value="name-desc">Nombre (Z-A)</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
              <option value="stock-desc">Mayor Stock</option>
            </select>
          </div>
        </div>
        <ItemList products={sortedProducts} />
      </div>
    )}
    <Anuncio />
  </div>
);
};

export default ItemListContainer;
