import MineLeft from "../../components/Mine/MineLeft"
import MineRight from "../../components/Mine/MineRight"
import { useEffect, useState } from "react"
import "./SeendPage.css"

const SecendPage = () => {
  return (
     <div className="SecendPage_Wrapper">
       <MineLeft  />
       <MineRight />
     </div>
  )
}

export default SecendPage