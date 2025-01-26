import Header from "../../components/Header/Header";
import HeeaderText from "../../components/Header_Text/Header_Text";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import "./FirstPage.css";

const FirstPage = () => {
  const [navbar, setNavbar] = useState([]);

  useEffect(() => {
    // API call

    setNavbar([
      axios.get("http://localhost:8000/navbar").then((res) => {
        setNavbar(res.data.data);
      }),
    ]);
  }, []);

  return (
    <div className="First_Page" key={FirstPage.id}>
      <Header className="Header" />

      <HeeaderText />

      {navbar.map((DataBase) => (
        <Navbar data={DataBase} key={DataBase.id} />
      ))}
    </div>
  );
};

export default FirstPage;
