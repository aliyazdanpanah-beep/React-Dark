import MineLeft from "../../components/Mine/MineLeft"
import MineRight from "../../components/Mine/MineRight"
import { useEffect, useState } from "react"
import "./SeendPage.css"

const db = [
  {
    id: 1,
    titel: "Sgin in"
  }
]

const SecendPage = () => {
  return (
     <div className="SecendPage_Wrapper">
       <MineLeft  />
       <MineRight />
       {db.map((buttun => {}))}
     </div>
  )
}

export default SecendPage