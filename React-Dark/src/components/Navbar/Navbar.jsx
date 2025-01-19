import { IoIosMenu } from "react-icons/io";
import "./Navbar.css";

const Navbar = () => {
  const Icon = () => {
    const Navbar = document.getElementById("Navbar");

    if (Navbar.style.top == "-200px") {
      Navbar.style.top = "0";
      Navbar.style.transition = "all ease-in 1s";
    } else {
      Navbar.style.top = "-200px";
      Navbar.style.transition = "all ease-in 1s";
    }
  };

  return (
    <div className="Navbar_wrapper">
      <IoIosMenu onClick={Icon} id="icon" />
    </div>
  );
};

export default Navbar;
