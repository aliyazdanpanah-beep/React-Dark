import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  // const Icon = document.getElementById('icon')
  // const Navbar = document.getElementById('Navbar')
  return (
    <div className="header_wrapper">
      <div className="header_part">
        <Link className=" Links" to={"/"}> {props.Data.home} </Link>
      </div>

      <div className="header_part">
        <Link className=" Links" to={"/about"}> {props.Data.about} </Link>
        <span> {props.Data.product} </span>
        <span> {props.Data.cotact} </span>
        <span> {props.Data.faq} </span>
      </div>
    </div>
  );
};

export default Header;
