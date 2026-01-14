import "./ItemDetail.css";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { IoArrowBackOutline } from "react-icons/io5";

const ItemDetail = ({ product }) => {
  const { addProduct, cart } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);
  const navigate = useNavigate();

  // Verificar si el producto está en el carrito
  useEffect(() => {
    const productInCart = cart.find((item) => item.id === product.id);
    setIsInCart(!!productInCart);
  }, [cart, product.id]);

  const addToCart = (count) => {
    const newProduct = { ...product, quantity: count };
    addProduct(newProduct);
  };

  return (
    <div className="item-detail-wrapper">
      <button className="back-button" onClick={() => navigate(-1)} aria-label="Volver atrás">
        <IoArrowBackOutline size={24} />
        <span>Volver</span>
      </button>
      <div className="item-detail-container">
      <img
        src={product.image}
        alt={product.name}
        className="item-detail-image"
      />
      <div className="item-detail-info">
        <h1 className="item-detail-title">{product.name}</h1>
        <h2 className="item-detail-game">
          {product.game} - {product.type}
        </h2>
        <p className="item-detail-set">Set: {product.set}</p>
        <p className="item-detail-description">{product.description}</p>
        <h3 className="item-detail-price">Precio: ${product.price}</h3>
        <ItemCount 
          stock={product.stock} 
          addToCart={addToCart} 
          product={product}
          isInCart={isInCart}
        />
        {isInCart && (
          <Link to="/cart" className="go-to-cart-button">
            Ir al Carrito
          </Link>
        )}
      </div>
    </div>
    </div>
  );
};

export default ItemDetail;
