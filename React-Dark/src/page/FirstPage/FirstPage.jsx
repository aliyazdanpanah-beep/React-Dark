import Header from "../../components/Header/Header";
import HeeaderText from "../../components/Header_Text/Header_Text";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import "./FirstPage.css";

const FirstPage = () => {
  const [navbar, setNavbar] = useState([]);
  const [headerText, setHeaderText] = useState([]);
  const [header, setHeader] = useState([])

  useEffect(() => {
    // API call

    axios.get("http://localhost:8000/navbar").then((res) => {
      setNavbar(res.data.data);
      // console.log(res.data.data)
    });

    axios.get("http://localhost:8000/headerText").then((result) => {
      setHeaderText(result.data.data);
      // console.log(result.data.data)
    });

    axios.get("http://localhost:8000/header").then((Header) => {
      setHeader(Header.data.data)
    })
  }, []);

  return (
    <div className="First_Page">
      {/* <Header className="Header" /> */}

      {/* <HeeaderText /> */}

      {header.map((Hed) => (
        <Header Data = {Hed} key={Hed.id} />
      ))}

      {navbar.map((DataBase) => (
        <Navbar data={DataBase} key={DataBase.id} />
      ))}

      {headerText.map((HeaderDate) => (
        <HeeaderText TextData = {HeaderDate} key={HeaderDate.id} />
      ))}
    </div>
  );
};

export default FirstPage;
