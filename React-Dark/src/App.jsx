import About from "./page/About/About";
import Home from "./page/Home/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="section">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
