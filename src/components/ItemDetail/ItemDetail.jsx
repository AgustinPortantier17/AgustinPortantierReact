import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail-container">
      <img
        src={product.image}
        alt={product.name}
        className="item-detail-image"
      />
      <div className="item-detail-info">
        <h1 className="item-detail-title">{product.name}</h1>
        <h2 className="item-detail-game">
          {product.game} - {product.type}
        </h2>
        <p className="item-detail-set">Set: {product.set}</p>
        <p className="item-detail-description">{product.description}</p>
        <h3 className="item-detail-price">Precio: {product.price}</h3>
        <div className="item-detail-counter">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
