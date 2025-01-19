import photo from "../../assets/Image/Liberey.jpg"
import "./MainLeft.css"

const MineLeft = () => {
  return (
     <div className="MineLeft_Wrapper">
       <h1>Immerse Yourself in the Allure of Darkness: Unveil the Secrets of Our Captivating Homepage</h1>

       <img className="image" src= {photo} />

       <h1 className="MineLeft_h1">Embrace the Allure</h1>

       <p>Unveil the Beauty of the Dark: Discover the Captivating Secrets of Our Homepage</p>
     </div>
  )
}

export default MineLeft