import photo from "../../assets/Image/Liberey.jpg"
import "./MainLeft.css"

const MineLeft = (props) => {
  return (
     <div className="MineLeft_Wrapper">
       <h1> {props.data.firstH1} </h1>

       <img className="image" src= {photo} />

       <h1 className="MineLeft_h1"> {props.data.secendH1} </h1>

       <p> {props.data.firstP} </p>
     </div>
  )
}

export default MineLeft