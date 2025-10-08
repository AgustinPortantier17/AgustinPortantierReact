const Item = ({ product }) => {
  return (
    <div>
      <p>{product.name}</p>
      <p>Tipo: {product.type}</p>
      <p>Juego: {product.game}</p>
      <p>Descrpción: {product.description}</p>
      <p>Stock: {product.stock}</p>
      <p>Set: {product.set}</p>
      <p>Precio: {product.price}</p>
      <p>{product.image}</p>
    </div>
  );
};

export default Item;
