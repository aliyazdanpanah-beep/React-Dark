import Header from "../../components/Header/Header";
import API from "../../components/About/AboutAPI";
import { useEffect, useState } from "react";
import axios from "axios";
import "./About.css";

const About = () => {
  // let data = [
  //   {
  //     id: 1,
  //     user: "Ali",
  //     offic: "Google",
  //   },
  // ];

  const [api, setApi] = useState([]);

  useEffect(() => {
    // API call

    axios
      .get("http://localhost:8000/user")
      .then((res) => {
        setApi(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="About_Page">
      <Header />
      <div className="AboutPage_Mine">
        {api.map((data) => (
          <API text={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default About;
