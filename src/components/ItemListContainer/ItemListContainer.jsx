import getProducts from "../../data/products.js";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import Anuncio from "../Anuncio/Anuncio.jsx";
import "./itemListContainer.css";
import { addProduct } from "../../data/fetchApi.js";
import { SyncLoader } from "react-spinners";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((data) => {
        if (category) {
          const productsFilter = data.filter(
            (product) => product.category === category
          );
          setProducts(productsFilter);
        } else {
          setProducts(data);
        }
      })

      .finally(() => {
        setLoading(false);
      });
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
