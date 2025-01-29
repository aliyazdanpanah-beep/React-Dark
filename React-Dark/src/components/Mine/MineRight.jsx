import "./MineRight.css"

const MineRight = (props) => {
  return (
    <div className="MineRight_Wrapper">
      <button className="MineRight_BTN">Uncover the Extraordinary</button>

      <h1> {props.data.treedH1} </h1>

      <p> {props.data.secendP} </p>

      <p> {props.data.treedP} </p>
      
    </div>
  )
}

export default MineRight