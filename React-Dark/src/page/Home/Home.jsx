import FirstPage from "../FirstPage/FirstPage"
import FourdPage from "../FourdPage/FourdPage"
import SecendPage from "../SecendPage/SecndPage"
import TreedPage from "../TreedPage/TreedPage"
import "./Home.css"

const Home = () => {
return (
  <div className="Home_Section">
     <FirstPage />
     <SecendPage />
     <TreedPage />
     <FourdPage />
  </div>
)
}

export default Home