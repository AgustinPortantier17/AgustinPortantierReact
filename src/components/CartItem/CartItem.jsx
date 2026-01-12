const CartItem = ({ productCart, deleteProductById }) => {
  return (
    <div className="cart-item">
      <img src={productCart.image} className="cart-item-image" alt={productCart.name} />
      <div className="cart-item-info">
        <p className="cart-item-name">{productCart.name}</p>
        <p className="cart-item-price">Precio c/u: ${productCart.price}</p>
        <p className="cart-item-quantity">Cantidad: {productCart.quantity}</p>
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
