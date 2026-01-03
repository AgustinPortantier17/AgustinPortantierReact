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
      <button className="button-cantidad" onClick={handleClickRestar}>
        -
      </button>
      <span>{count}</span>
      <button className="button-cantidad" onClick={handleClickAumentar}>
        +
      </button>

      <button className="button-agregar" onClick={() => addToCart(count)}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemCount;
