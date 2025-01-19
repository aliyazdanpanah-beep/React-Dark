import Header from "../../components/Header/Header"
import HeeaderText from "../../components/Header_Text/Header_Text"
import Navbar from "../../components/Navbar/Navbar"
import Photo from "./metion_tipe.jpg"
import "./FirstPage.css"

const FirstPage = () => {
  return (
    <div className="First_Page">
      <Navbar />
      <Header className="Header" />
      <HeeaderText style = {{backgroundImage:{Photo}}}/>
    </div>
)
}

export default FirstPage