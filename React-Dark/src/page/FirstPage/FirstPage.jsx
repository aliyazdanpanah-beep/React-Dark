import Header from "../../components/Header/Header";
import HeeaderText from "../../components/Header_Text/Header_Text";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import "./FirstPage.css";

const FirstPage = () => {
  const [navbar, setNavbar] = useState([]);
  const [firstpage, setFirstPage] = useState([]);

  useEffect(() => {
    // API call

    setNavbar([
      // {
      //   id: 1,
      //   home: "Home",
      //   job: "Job",
      //   new: "New"
      // }

      axios.get("http://localhost:8000/navbar").then((res) => {
        setNavbar(res.data.data);

        // axios.get("http://localhost:8000/firstpage").then((firstpage) => {

        // })
      }),
    ]);

    // setFirstPage([
    //   axios.get("http://localhost:8000/firstpage").then((firstpage) => {
    //     setFirstPage(firstpage.data.data)
    //   })
    // ])
  }, []);

  useEffect(() => {
    setFirstPage([
      axios.get("http://localhost:8000/firstpage").then((result) => {
        setFirstPage(result.data.data);
      }),
    ]);
  }, []);

  return (
    <div className="First_Page">
      <Header className="Header" />

      {firstpage.map((text) => {
        <HeeaderText text={text} key={text.id} />;
      })}

      {navbar.map((DataBase) => (
        <Navbar data={DataBase} key={DataBase.id} />
      ))}
    </div>
  );
};

export default FirstPage;
