import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
  });

  const { cart, totalPrice } = useContext(CartContext);

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
  };

  const uploadOrder = async (order) => {
    try {
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={sendOrder}>
        <input
          type="text"
          name="fullname"
          placeholder="Nombre completo"
          value={dataForm.fullname}
          onChange={handleChangeInput}
        />
        <input
          type="number"
          name="phone"
          placeholder="Teléfono"
          value={dataForm.phone}
          onChange={handleChangeInput}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={dataForm.email}
          onChange={handleChangeInput}
        />

        <button type="submit">Enviar Orden</button>
      </form>
    </div>
  );
};

export default Checkout;
