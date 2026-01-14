import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./FloatingCart.css";

const FloatingCart = () => {
  const { totalQuantity } = useContext(CartContext);
  const [isVisible, setIsVisible] = useState(false);
  const quantity = totalQuantity();

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar cuando el scroll es mayor a 200px (navbar fuera de vista)
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <Link to="/cart" className="floating-cart" aria-label="Ver carrito de compras">
      <div className="floating-cart-icon">
        <AiOutlineShoppingCart size={24} color="white" />
        {quantity > 0 && <span className="floating-cart-badge">{quantity}</span>}
      </div>
      <div className="floating-cart-text">
        <span className="floating-cart-label">Productos en carrito</span>
        <span className="floating-cart-count">{quantity > 0 ? quantity : 0}</span>
      </div>
    </Link>
  );
};

export default FloatingCart;
