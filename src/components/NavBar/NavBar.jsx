import logo from "../../assets/img/logo.webp";
import "./navBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navBar">
      <a href="">
        <img src={logo} className="logo" />
      </a>

      <ul className="menu">
        <li>
          <a href="">Magic: The Gathering </a>
        </li>
        <li>
          <a href="">Yu-Gi-Oh</a>
        </li>
        <li>
          <a href="">Pokemon</a>
        </li>
        <li>
          <a href="">One Piece</a>
        </li>
        <li>
          <a href="">Flesh And Blood</a>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
};
export default NavBar;
