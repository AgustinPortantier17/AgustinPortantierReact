import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart.jsx";
import "./App.css";

function App() {
  /*Acá va el código de la aplicación*/

  return (
    /*Aca va todo el html de la aplicación*/
    <>
      <div className="app">
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer
                    greeting={
                      "Bienvenido a mi E-commerce, dedicado a la venta de cartas TCG!"
                    }
                  />
                }
              />
              <Route
                path="/category/:category"
                element={
                  <ItemListContainer
                    greeting={
                      "Bienvenido a mi E-commerce, dedicado a la venta de cartas TCG!"
                    }
                  />
                }
              />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
