import carrito from "../../assets/img/carrito.webp";
import "./CartWidget.css";

// Simulamos un contador estático por ahora, luego
const contador = 0;

const CartWidget = () => {
  return (
    <div className="carritoDiv">
      <div className="logoCartDiv">
        <img className="carrito" src={carrito} />
      </div>
      <div className="contador">
        <p>{contador}</p>
      </div>
    </div>
  );
};

export default CartWidget;
