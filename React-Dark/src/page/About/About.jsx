import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import "./About.css";
import API from "../../components/About/AboutAPI";

const About = () => {
  const [titel, setTitel] = useState([""]);

  useEffect(() => {
    setTitel([
      axios.get("http://localhost:8000/About").then((result) => {
        setTitel(result.data);
      }),
    ]);
  }, []);
  return (
    <div className="About_Page">
      <Header />
      <div className="AboutPage_Mine">
        <API />

        {/* {titel.map((database) => (
          <API key={database.id} data={database} />
        ))} */}
      </div>
    </div>
  );
};

export default About;
