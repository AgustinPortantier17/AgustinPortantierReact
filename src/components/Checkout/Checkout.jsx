import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db.js";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const sendOrder = (event) => {
    event.preventDefault();

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      total: totalPrice(),
    };

    uploadOrder(order);
  };

  const uploadOrder = async (order) => {
    try {
      const ordersRef = collection(db, "orders");
      const response = await addDoc(ordersRef, order);
      setOrderId(response.id);
      setPurchasedProducts([...cart]);
      deleteCart();
    } catch (error) {
      console.log("Error al subir la orden: ", error);
    }
  };

  return (
    <div className="checkout-container">
      {orderId ? (
        <div className="checkout-success">
          <div className="success-icon">✓</div>
          <h2>¡Compra realizada con éxito!</h2>
          <p className="success-message">
            Gracias por tu compra, {dataForm.fullname}
          </p>
          <div className="order-details">
            <p className="order-label">Número de orden:</p>
            <p className="order-id">{orderId}</p>
          </div>
          <div className="order-summary">
            <h3>Resumen de tu compra:</h3>
            <div className="purchased-items">
              {purchasedProducts.map((product) => (
                <div key={product.id} className="purchased-item">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="purchased-item-image"
                  />
                  <div className="purchased-item-info">
                    <p className="purchased-item-name">{product.name}</p>
                    <p className="purchased-item-details">
                      Cantidad: {product.quantity} x ${product.price}
                    </p>
                  </div>
                  <p className="purchased-item-subtotal">
                    ${product.price * product.quantity}
                  </p>
                </div>
              ))}
            </div>
            <div className="order-total">
              <p>
                Total pagado:{" "}
                <span className="total-amount">
                  $
                  {purchasedProducts.reduce(
                    (acc, product) => acc + product.price * product.quantity,
                    0
                  )}
                </span>
              </p>
            </div>
          </div>
          <div className="order-info">
            <p>Se ha enviado un correo de confirmación a:</p>
            <p className="email-confirmation">{dataForm.email}</p>
          </div>
          <Link to="/" className="back-to-store">
            Volver a la tienda
          </Link>
        </div>
      ) : (
        <FormCheckout
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          sendOrder={sendOrder}
        />
      )}
    </div>
  );
};

export default Checkout;
