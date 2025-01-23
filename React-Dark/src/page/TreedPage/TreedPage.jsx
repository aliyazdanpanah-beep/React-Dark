import { useEffect, useState } from "react";
import axios from "axios";
import "./TreedPage.css";
import Text from "../../components/TreedPage/TreedPageText";

const TreedPage = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    setApi([
      {
        id: 1,
        titel: "ALI",
      },
    ]);
  }, []);

  return (
    <div>
      <Text />
    </div>
  );
};

export default TreedPage;
