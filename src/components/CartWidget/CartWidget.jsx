import carrito from "../../assets/img/carrito.webp";
import "./CartWidget.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
// Simulamos un contador estático por ahora, luego
const contador = 0;

const CartWidget = () => {
  return (
    <div className="carritoDiv">
      <div className="logoCartDiv">
        <AiOutlineShoppingCart
          size={35}
          color="white"
          className="iconoCarrito"
        />
      </div>
      <div className="contador">
        <p>{contador}</p>
      </div>
    </div>
  );
};

export default CartWidget;
