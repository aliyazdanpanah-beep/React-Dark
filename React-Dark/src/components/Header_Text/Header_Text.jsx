import "./Header_Text.css"

const HeeaderText = (props) => {
  return (
    <div className="HeaderText_Wrapper">
      <h2> {props.TextData.titel} </h2>

      <button className="Button1_Header"> {props.TextData.btnTitel} </button>
      <br />
      <button className="Button2_Header"> {props.TextData.btn2Titel} </button>
    </div>
  )
}

export default HeeaderText