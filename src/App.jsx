import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

function App() {
  /*Acá va el código de la aplicación*/
  const saludo = "Hola Mundo";

  return (
    /*Aca va todo el html de la aplicación*/
    <>
      <div className="app">
        <NavBar />
        <ItemListContainer
          greeting={
            "Bienvenido a mi E-commerce, dedicado a la venta de cartas TCG!"
          }
        />
      </div>
    </>
  );
}

export default App;
