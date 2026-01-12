import "./FormCheckout.css";

const FormCheckout = ({ dataForm, handleChangeInput, sendOrder }) => {
  return (
    <form onSubmit={sendOrder}>
      <label htmlFor="fullname">Nombre completo</label>
      <input
        type="text"
        id="fullname"
        name="fullname"
        placeholder="Juan Pérez"
        value={dataForm.fullname}
        onChange={handleChangeInput}
        required
      />
      <label htmlFor="phone">Teléfono</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="1123456789"
        value={dataForm.phone}
        onChange={handleChangeInput}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="ejemplo@correo.com"
        value={dataForm.email}
        onChange={handleChangeInput}
        required
      />

      <button type="submit">Enviar orden</button>
    </form>
  );
};

export default FormCheckout;
