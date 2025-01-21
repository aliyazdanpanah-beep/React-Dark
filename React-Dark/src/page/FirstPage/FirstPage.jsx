import Header from "../../components/Header/Header";
import HeeaderText from "../../components/Header_Text/Header_Text";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import "./FirstPage.css";

const FirstPage = () => {

  const [navbar, setNavbar] = useState([])
  const [text, setText] = useState()


  useEffect(() => {

    // API call

    setNavbar(
      [
        {
          id: 1,
          home: "Home",
          job: "Job",
          new: "New"
        }
      ]
    )

    setText(
      <h1>Ali</h1> 
    )

  }, []);

  return (
    <div className="First_Page">
      <Header className="Header" />
      <HeeaderText />
      {navbar.map((DataBase) => (
        <Navbar data={DataBase} key={DataBase.id} />
      ))}
    </div>
  );
};

export default FirstPage;
