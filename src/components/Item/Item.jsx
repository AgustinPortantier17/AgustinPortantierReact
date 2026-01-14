import "./Item.css";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

const Item = ({ product }) => {
  const { addProduct, cart } = useContext(CartContext);
  const [localQuantity, setLocalQuantity] = useState(0);
  const [isInCart, setIsInCart] = useState(false);

  // Verificar si el producto está en el carrito
  useEffect(() => {
    const productInCart = cart.find((item) => item.id === product.id);
    setIsInCart(!!productInCart);
    
    // Si está en el carrito, sincronizar la cantidad local con el carrito
    if (productInCart) {
      setLocalQuantity(productInCart.quantity);
    } else {
      setLocalQuantity(0);
    }
  }, [cart, product.id]);

  const handleIncrement = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInCart) {
      // Si ya está en el carrito, actualizar directamente
      if (localQuantity < product.stock) {
        const productToAdd = { ...product, quantity: 1 };
        addProduct(productToAdd);
      }
    } else {
      // Si no está en el carrito, solo actualizar estado local
      if (localQuantity < product.stock) {
        setLocalQuantity(localQuantity + 1);
      }
    }
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInCart) {
      // Si ya está en el carrito, actualizar directamente
      if (localQuantity > 0) {
        const productToAdd = { ...product, quantity: -1 };
        addProduct(productToAdd);
      }
    } else {
      // Si no está en el carrito, solo actualizar estado local
      if (localQuantity > 0) {
        setLocalQuantity(localQuantity - 1);
      }
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (localQuantity > 0) {
      const productToAdd = { ...product, quantity: localQuantity };
      addProduct(productToAdd);
      // No reseteamos localQuantity, el useEffect se encargará de sincronizarlo
    }
  };

  return (
    <Link to={"/detail/" + product.id} className="productItemLink">
      <li className="productItem">
        <div className="productImg">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="productInfo">
          <p className="productName">
            {product.name} ({product.set})
          </p>
          <p className="productDetail">
            {product.game} - {product.type}
          </p>
          <p className="productPrice">Precio: ${product.price}</p>
          <p className="productStock">Stock: {product.stock}</p>
          
          <div className="productActions" onClick={(e) => e.stopPropagation()}>
            <div className="quantityControls">
              <button 
                className="quantityBtn decrementBtn" 
                onClick={handleDecrement}
                disabled={localQuantity === 0}
              >
                -
              </button>
              <span className="quantityDisplay">{localQuantity}</span>
              <button 
                className="quantityBtn incrementBtn" 
                onClick={handleIncrement}
                disabled={localQuantity >= product.stock}
              >
                +
              </button>
            </div>
            
            {!isInCart ? (
              <button 
                className="addToCartBtn"
                onClick={handleAddToCart}
                disabled={localQuantity === 0}
              >
                Agregar
              </button>
            ) : (
              <div className="inCartIndicator">
                En el carrito
              </div>
            )}
          </div>
        </div>
      </li>
    </Link>
  );
};

export default Item;
