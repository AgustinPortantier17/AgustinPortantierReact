import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, addToCart }) => {
  const [count, setCount] = useState(1);

  const handleClickRestar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleClickAumentar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="item-detail-counter">
      <button 
        className="button-cantidad" 
        onClick={handleClickRestar}
        aria-label="Disminuir cantidad"
      >
        -
      </button>
      <span aria-label="Cantidad seleccionada">{count}</span>
      <button 
        className="button-cantidad" 
        onClick={handleClickAumentar}
        aria-label="Aumentar cantidad"
      >
        +
      </button>

      <button className="button-agregar" onClick={() => addToCart(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
