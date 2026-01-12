import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  const cuantity = totalQuantity();

  return (
    <Link to="/cart" className="carritoDiv" aria-label="Ver carrito de compras">
      <div className="logoCartDiv">
        <AiOutlineShoppingCart
          size={35}
          color="white"
          className="iconoCarrito"
        />
      </div>
      <div className="contador">
        <p>{cuantity !== 0 && cuantity}</p>
      </div>
    </Link>
  );
};

export default CartWidget;
