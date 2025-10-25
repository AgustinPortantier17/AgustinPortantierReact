const getProducts = () => {
  return fetch("http......")
    .then((respuesta) => {
      return respuesta.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

const getProductById = (productId) => {
  return fetch("http......" + productId)
    .then((respuesta) => {
      return respuesta.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

const addProduct = (newProduct) => {
  return fetch("http......", {
    method: "POST",
    headers: {
      "Content-type": aplication / json,
    },
    body: JSON.stringify(newProduct),
  })
    .then((respuesta) => {
      return respuesta.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

export { getProducts, getProductById, addProduct };
