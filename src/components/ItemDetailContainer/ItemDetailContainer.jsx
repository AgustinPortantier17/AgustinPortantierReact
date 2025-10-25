import { useState, useEffect } from "react";
import getProducts from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProducts().then((data) => {
      const dataProduct = data.find((product) => product.id === parseInt(id));
      setProduct(dataProduct);
    });
  }, []);

  console.log(product);
  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
