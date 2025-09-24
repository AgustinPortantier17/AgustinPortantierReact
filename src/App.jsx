import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import EjemploContador from "./components/Ejemplos/EjemploContador";
import "./App.css";

function App() {
  /*Acá va el código de la aplicación*/
  const saludo = "Hola Mundo";

  return (
    /*Aca va todo el html de la aplicación*/
    <>
      <div className="app">
        <NavBar />
        <ItemListContainer greeting={"Bienvenido a mi E-commerce"} />
        <h1>Agustin Portantier</h1>
        <h2>{saludo}</h2>
        <EjemploContador />
      </div>
    </>
  );
}

export default App;
