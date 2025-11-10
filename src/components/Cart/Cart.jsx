import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { SyncLoader } from "react-spinners";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, deleteProductById, totalPrice, deleteCart } =
    useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Componente de loading reutilizable
  const LoadingSpinner = () => (
    <div className="loading-overlay">
      <div className="loading-content">
        <SyncLoader color="rgb(37, 102, 114)" size={15} />
        <p>Cargando...</p>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="cart-container">
        <LoadingSpinner />
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-empty">
          <p>No hay productos en el carrito</p>
          <Link to="/" className="cart-empty-link">
            Ir a la tienda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <>
        <div className="cart-items">
          {cart.map((productCart) => (
            <div key={productCart.id} className="cart-item">
              <img src={productCart.image} className="cart-item-image" />
              <div className="cart-item-info">
                <p className="cart-item-name">{productCart.name}</p>
                <p className="cart-item-price">
                  Precio c/u: ${productCart.price}
                </p>
                <p className="cart-item-quantity">
                  Cantidad: {productCart.quantity}
                </p>
                <p className="cart-item-subtotal">
                  Subtotal: ${productCart.price * productCart.quantity}
                </p>
                <button
                  onClick={() => deleteProductById(productCart.id)}
                  className="cart-item-remove"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-total-section">
          <h2>
            Total: <span>${totalPrice()}</span>
          </h2>
        </div>
        <button onClick={deleteCart} className="cart-clear">
          Limpiar carrito
        </button>
      </>
    </div>
  );
};

export default Cart;
