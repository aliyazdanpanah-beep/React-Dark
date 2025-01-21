import { IoIosMenu } from "react-icons/io";
import "./Navbar.css";

const Navbar = (props) => {
  const Icon = () => {
    const Navbar = document.getElementById("Navbar");
    const icon = document.getElementById("icon")

    if (Navbar.style.top == "-100vh") {
      Navbar.style.top = "0";
      icon.style.color = "#fff"
      icon.style.transition = "all ease-in 0.3s"
      Navbar.style.transition = "all ease-in 1s";
    } else {
      Navbar.style.top = "-100vh";
      icon.style.color = "#000"
      icon.style.transition = "all ease-in 1s"
      Navbar.style.transition = "all ease-in 1s";
    }
  };

  // const data = props.data
  // console.log(props.data.titel)

  return (
    <div className="Navbar_wrapper">
      <div id="Navbar">
        <span> {props.data.home} </span>
        <span> {props.data.job} </span>
        <span> {props.data.new} </span>
      </div>
      <IoIosMenu onClick={Icon} id="icon" />
    </div>
  );
};

export default Navbar;
