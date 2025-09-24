import logo from "../../assets/img/logo.png";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navBar">
      <img src={logo} className="logo" />

      <ul className="menu">
        <li>Cruceros</li>
        <li>Viajes</li>
        <li>Visitas</li>
      </ul>

      <CartWidget />
    </nav>
  );
};
export default NavBar;
