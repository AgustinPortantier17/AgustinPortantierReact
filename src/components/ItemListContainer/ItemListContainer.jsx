import { SyncLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import Anuncio from "../Anuncio/Anuncio.jsx";
import WelcomeBanner from "../WelcomeBanner/WelcomeBanner.jsx";
import ProductCarousel from "../ProductCarousel/ProductCarousel.jsx";
import db from "../../db/db.js";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("default");
  const { category } = useParams();

  const categoryNames = {
    "PKM": "Pokémon",
    "YGO": "Yu-Gi-Oh!",
    "MTG": "Magic: The Gathering",
    "FAB": "Flesh and Blood",
    "OPC": "One Piece"
  };

  const getCategoryName = (cat) => categoryNames[cat] || cat;

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
  };

  // Función para obtener productos aleatorios con stock
  const getRandomProducts = (categoryProducts, count = 12) => {
    const productsWithStock = categoryProducts.filter(p => p.stock > 0);
    const shuffled = [...productsWithStock].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

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
      console.error("Error al cargar productos:", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const sortedProducts = sortProducts(products, sortBy);

  // Separar productos por categoría para los carruseles (solo si NO hay categoría seleccionada)
  const productsByCategory = !category ? {
    PKM: getRandomProducts(products.filter(p => p.category === "PKM")),
    YGO: getRandomProducts(products.filter(p => p.category === "YGO")),
    MTG: getRandomProducts(products.filter(p => p.category === "MTG")),
    OPC: getRandomProducts(products.filter(p => p.category === "OPC")),
    FAB: getRandomProducts(products.filter(p => p.category === "FAB"))
  } : {};

  useEffect(() => {
    getProducts();
  }, [category]);

  return (
    <div className="main">
      {loading ? (
        <div className="loading-overlay">
          <div className="loading-content">
            <SyncLoader color="rgb(37, 102, 114)" size={15} />
            <p>Cargando productos...</p>
          </div>
        </div>
      ) : (
        <div className="products-container">
          {category ? (
            // Vista de categoría específica (lista completa con ordenamiento)
            <>
              <div className="filters-section">
                <h2>{`Productos de ${getCategoryName(category)}`}</h2>
                
                <div className="sort-controls">
                  <label htmlFor="sort-select">Ordenar por:</label>
                  <select 
                    id="sort-select"
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="sort-select"
                    aria-label="Ordenar productos por criterio"
                  >
                    <option value="default">Por defecto</option>
                    <option value="name-asc">Nombre (A-Z)</option>
                    <option value="name-desc">Nombre (Z-A)</option>
                    <option value="price-asc">Precio: Menor a Mayor</option>
                    <option value="price-desc">Precio: Mayor a Menor</option>
                    <option value="stock-desc">Mayor Stock</option>
                  </select>
                </div>
              </div>
              <ItemList products={sortedProducts} />
            </>
          ) : (
            // Vista de inicio con banner y carruseles
            <div className="home-view">
              <WelcomeBanner />
              
              {productsByCategory.PKM?.length > 0 && (
                <ProductCarousel 
                  title="Pokémon TCG" 
                  products={productsByCategory.PKM}
                  category="PKM" 
                />
              )}
              
              {productsByCategory.YGO?.length > 0 && (
                <ProductCarousel 
                  title="Yu-Gi-Oh!" 
                  products={productsByCategory.YGO}
                  category="YGO" 
                />
              )}
              
              {productsByCategory.MTG?.length > 0 && (
                <ProductCarousel 
                  title="Magic: The Gathering" 
                  products={productsByCategory.MTG}
                  category="MTG" 
                />
              )}
              
              {productsByCategory.OPC?.length > 0 && (
                <ProductCarousel 
                  title="One Piece Card Game" 
                  products={productsByCategory.OPC}
                  category="OPC" 
                />
              )}
              
              {productsByCategory.FAB?.length > 0 && (
                <ProductCarousel 
                  title="Flesh and Blood" 
                  products={productsByCategory.FAB}
                  category="FAB" 
                />
              )}
            </div>
          )}
        </div>
      )}
      <Anuncio />
    </div>
  );
};

export default ItemListContainer;