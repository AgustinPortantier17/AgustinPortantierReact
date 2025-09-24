import carrito from "../../assets/img/carrito.png";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div>
      <img className="carrito" src={carrito} />
    </div>
  );
};

export default CartWidget;
