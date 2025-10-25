import logo from "../../assets/img/logo.webp";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>

      <ul className="menu">
        <li>
          <Link to="/category/MTG">Magic: The Gathering</Link>
        </li>
        <li>
          <Link to="/category/YGO">Yu-Gi-Oh</Link>
        </li>
        <li>
          <Link to="/category/POKEMON">Pokemón</Link>
        </li>
        <li>
          <Link to="/category/One Piece">One Piece</Link>
        </li>
        <li>
          <Link to="/category/FAB">Flesh and Blood </Link>
        </li>
        <li>
          <Link to="/category/Accesorios">Accesorios</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};
export default NavBar;
