import "./Header.css"

const Header = () => {

  // const Icon = document.getElementById('icon')
  // const Navbar = document.getElementById('Navbar')
  return (
    <div className="header_wrapper">
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