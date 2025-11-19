import "./FormCheckout.css";

const FormCheckout = ({ dataForm, handleChangeInput, sendOrder }) => {
  return (
    <form onSubmit={sendOrder}>
      <label>Nombre completo</label>
      <input
        type="text"
        name="fullname"
        placeholder="Juan Pérez"
        value={dataForm.fullname}
        onChange={handleChangeInput}
      />
      <label>Teléfono</label>
      <input
        type="number"
        name="phone"
        placeholder="1123456789"
        value={dataForm.phone}
        onChange={handleChangeInput}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="ejemplo@correo.com"
        value={dataForm.email}
        onChange={handleChangeInput}
      />

      <button type="submit">Enviar Orden</button>
    </form>
  );
};

export default FormCheckout;
