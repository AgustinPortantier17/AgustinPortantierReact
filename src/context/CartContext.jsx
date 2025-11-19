import { createContext, useState, useEffect } from "react";

//Creamos nuestro context
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const cartLocalStorage = JSON.parse(localStorage.getItem("cart-ecommerce"));
  const [cart, setCart] = useState(cartLocalStorage ? cartLocalStorage : []);

  useEffect(() => {
    localStorage.setItem("cart-ecommerce", JSON.stringify(cart));
  }, [cart]);

  const addProduct = (newProduct) => {
    const productExist = cart.find(
      (productCart) => productCart.id === newProduct.id
    );

    if (productExist) {
      const updatedCart = cart.map((productCart) => {
        if (productCart.id === newProduct.id) {
          return {
            ...productCart,
            quantity: productCart.quantity + newProduct.quantity,
          };
        }
        return productCart;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  const totalQuantity = () => {
    const quantity = cart.reduce(
      (total, productCart) => total + productCart.quantity,
      0
    );
    return quantity;
  };

  const totalPrice = () => {
    const total = cart.reduce(
      (total, productCart) => total + productCart.price * productCart.quantity,
      0
    );
    return total;
  };

  const deleteProductById = (productId) => {
    const productsFiltred = cart.filter(
      (productCart) => productCart.id !== productId
    );
    setCart(productsFiltred);
  };

  const deleteCart = () => {
    setCart([]);
  };

  console.log(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        totalQuantity,
        totalPrice,
        deleteProductById,
        deleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
