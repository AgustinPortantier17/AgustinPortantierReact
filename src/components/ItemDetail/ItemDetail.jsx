import "./ItemDetail.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount.jsx";

const ItemDetail = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  const [viewItemCount, setViewItemCount] = useState(true);

  const addToCart = (count) => {
    setViewItemCount(false);
    const newProduct = { ...product, quantity: count };
    addProduct(newProduct);
  };

  return (
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
        {viewItemCount ? (
          <ItemCount stock={product.stock} addToCart={addToCart} />
        ) : (
          <button className="go-to-cart-button">Ir al Carrito</button>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
