import { Link } from "react-router-dom";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  // const Icon = document.getElementById('icon')
  // const Navbar = document.getElementById('Navbar')
  return (
    <div className="header_wrapper">
      <div className="header_part">
        <Link className=" Links" to={"/"}>Home</Link>
      </div>

      <div className="header_part">
        <Link className=" Links" to={"/about"}>About</Link>
        <span>Game</span>
        <span>Cotact</span>
        <span>FAQ</span>
      </div>
    </div>
  );
};

export default Header;
