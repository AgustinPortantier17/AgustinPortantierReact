import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
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
        <p className="productPrice">Precio: {product.price}</p>
        <p className="productStock">Stock: {product.stock}</p>
        <Link to={"/detail/" + product.id} className="productDescripción">
          Mas Información
        </Link>
      </div>
    </li>
  );
};

export default Item;
