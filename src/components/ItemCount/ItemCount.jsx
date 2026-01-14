import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import "./ItemCount.css";

const ItemCount = ({ stock, addToCart, product, isInCart }) => {
  const { addProduct, cart } = useContext(CartContext);
  const [count, setCount] = useState(0);

  // Sincronizar con el carrito
  useEffect(() => {
    if (isInCart) {
      const productInCart = cart.find((item) => item.id === product.id);
      if (productInCart) {
        setCount(productInCart.quantity);
      }
    } else {
      setCount(0);
    }
  }, [cart, product.id, isInCart]);

  const handleClickRestar = () => {
    if (isInCart) {
      // Si está en el carrito, actualizar directamente
      if (count > 0) {
        const productToAdd = { ...product, quantity: -1 };
        addProduct(productToAdd);
      }
    } else {
      // Si no está en el carrito, solo actualizar estado local
      if (count > 0) {
        setCount(count - 1);
      }
    }
  };

  const handleClickAumentar = () => {
    if (isInCart) {
      // Si está en el carrito, actualizar directamente
      if (count < stock) {
        const productToAdd = { ...product, quantity: 1 };
        addProduct(productToAdd);
      }
    } else {
      // Si no está en el carrito, solo actualizar estado local
      if (count < stock) {
        setCount(count + 1);
      }
    }
  };

  return (
    <div className="item-detail-counter">
      <button 
        className="button-cantidad" 
        onClick={handleClickRestar}
        disabled={count === 0}
        aria-label="Disminuir cantidad"
      >
        -
      </button>
      <span aria-label="Cantidad seleccionada">{count}</span>
      <button 
        className="button-cantidad" 
        onClick={handleClickAumentar}
        disabled={count >= stock}
        aria-label="Aumentar cantidad"
      >
        +
      </button>

      {!isInCart ? (
        <button 
          className="button-agregar" 
          onClick={() => addToCart(count)}
          disabled={count === 0}
        >
          Agregar al carrito
        </button>
      ) : (
        <div className="button-in-cart">
          En el carrito
        </div>
      )}
    </div>
  );
};

export default ItemCount;
