import logo from "../../assets/img/logo.webp";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/">
        <img src={logo} className="logo" alt="TCG Masters - Logo" />
      </Link>

      <ul className="menu">
        <li>
          <Link to="/category/MTG">Magic: The Gathering</Link>
        </li>
        <li>
          <Link to="/category/YGO">Yu-Gi-Oh</Link>
        </li>
        <li>
          <Link to="/category/PKM">Pokémon</Link>
        </li>
        <li>
          <Link to="/category/OPC">One Piece</Link>
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
