import Header from "../../components/Header/Header"
import HeeaderText from "../../components/Header_Text/Header_Text"
import Navbar from "../../components/Navbar/Navbar"
import Photo from "./metion_tipe.jpg"
import "./FirstPage.css"

const FirstPage = () => {

  const db = [
    {
      id: 1,
      titel: ""
    }
  ]
  
  return (
    <div className="First_Page">
      <Header className="Header" />
      <HeeaderText />
      {db.map((DataBase => (
        <Navbar data = {DataBase} key={DataBase.id} />
      )))}
    </div>
)
}

export default FirstPage