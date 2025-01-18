import { IoIosMenu } from "react-icons/io"
import "./Header.css"

const Header = () => {

  // const Icon = document.getElementById('icon')
  // const Navbar = document.getElementById('Navbar')

  const Icon = () => {
    const Navbar = document.getElementById('Navbar')

    if (Navbar.style.top == '-200px') {

      Navbar.style.top = '0'
      Navbar.style.transition = 'all ease-in 1s'
    }
    else {

      Navbar.style.top = '-200px'
      Navbar.style.transition = 'all ease-in 1s'
    }
  }

  return (
    <div className="header_wrapper">

      <div id="Navbar">
        <span>Home</span>
        <span>New</span>
        <span>Job</span>
      </div>

      <IoIosMenu onClick={Icon} id="icon" />
     
      <div className="header_part"> <span>DarkHome</span> </div>

      <div className="header_part">
        <span>Home</span>
        <span>About</span>
        <span>Product</span>
        <span>Cotact</span>
        <span>FAQ</span>
      </div>

    </div>
  )
}

export default Header