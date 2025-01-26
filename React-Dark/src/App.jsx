import FirstPage from "./page/FirstPage/FirstPage";
import SecendPage from "./page/SecendPage/SecndPage";
import TreedPage from "./page/TreedPage/TreedPage";
import { BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <div className="section">
      <FirstPage />
      <SecendPage />
      <TreedPage />
    </div>
  );
};

export default App;
