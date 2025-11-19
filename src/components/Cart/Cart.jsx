import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { SyncLoader } from "react-spinners";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "../CartItem/CartItem.css";
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
            <CartItem
              key={productCart.id}
              productCart={productCart}
              deleteProductById={deleteProductById}
            />
          ))}
        </div>
        <div className="cart-total-section">
          <h2>
            Total: <span>${totalPrice()}</span>
          </h2>
        </div>
        <Link to="/checkout" className="cart-continue">
          Continuar con mi compra
        </Link>
        <button onClick={deleteCart} className="cart-clear">
          Limpiar carrito
        </button>
      </>
    </div>
  );
};

export default Cart;
