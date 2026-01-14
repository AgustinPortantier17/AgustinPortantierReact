import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ productCart, deleteProductById }) => {
  const { addProduct } = useContext(CartContext);

  const handleIncrement = () => {
    if (productCart.quantity < productCart.stock) {
      const productToAdd = { ...productCart, quantity: 1 };
      addProduct(productToAdd);
    }
  };

  const handleDecrement = () => {
    if (productCart.quantity > 1) {
      const productToAdd = { ...productCart, quantity: -1 };
      addProduct(productToAdd);
    }
  };

  return (
    <div className="cart-item">
      <img src={productCart.image} className="cart-item-image" alt={productCart.name} />
      <div className="cart-item-info">
        <p className="cart-item-name">{productCart.name}</p>
        <p className="cart-item-price">Precio c/u: ${productCart.price}</p>
        
        <div className="cart-item-quantity-control">
          <button 
            className="cart-quantity-btn" 
            onClick={handleDecrement}
            disabled={productCart.quantity <= 1}
            aria-label="Disminuir cantidad"
          >
            -
          </button>
          <span className="cart-quantity-display">
            {productCart.quantity}
          </span>
          <button 
            className="cart-quantity-btn" 
            onClick={handleIncrement}
            disabled={productCart.quantity >= productCart.stock}
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>

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
  );
};

export default CartItem;
