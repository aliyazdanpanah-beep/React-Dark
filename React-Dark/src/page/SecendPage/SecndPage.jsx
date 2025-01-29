import MineLeft from "../../components/Mine/MineLeft";
import MineRight from "../../components/Mine/MineRight";
import { useEffect, useState } from "react";
import axios from "axios";
import "./SeendPage.css";

const SecendPage = () => {
  const [left, setLeft] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/secendPage").then((res) => {
      setLeft(res.data.data);
    });
  }, []);

  return (
    <div className="SecendPage_Wrapper">
      {left.map((DB) => (
        <MineLeft data = {DB} key={DB.id} />
      ))}

      {left.map((result) => (
        <MineRight data = {result} key={result.id} />
      ))}
    </div>
  );
};

export default SecendPage;
