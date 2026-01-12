import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import "./App.css";

function App() {
  return (
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
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={
                <div className="not-found-page">
                  <h1>404 - Página no encontrada</h1>
                  <p>La página que buscas no existe.</p>
                </div>
              } />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
