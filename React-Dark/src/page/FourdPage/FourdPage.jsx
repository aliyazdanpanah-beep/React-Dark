import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./FourdPage.css";

const FourdPage = () => {
  const [link, setLink] = useState("");

  useEffect(() => {
    setLink([axios.get("http://localhost:8000/links").then((result) => {
      const API =  setLink(result.data)
      console.log(API)
    })]);
  }, []);
  return (
    <div className="FourPage">
      <div className="Links_wrapper">
        <Link className="links">Link</Link>
        <br />
        <br />
        <br />
        <Link className="links">Link</Link>
        <br />
        <br />
        <br />
        <Link className="links">Link</Link>
        <br />
        <br />
        <br />
        <Link className="links">Link</Link>
      </div>
      <div className="Links_wrapper">
        <Link className="links">Link</Link>
        <br />
        <br />
        <br />
        <Link className="links">Link</Link>
        <br />
        <br />
        <br />
        <Link className="links">Link</Link>
        <br />
        <br />
        <br />
        <Link className="links">Link</Link>
      </div>
      <div className="Links_wrapper">
        <Link className="links">Link</Link>
        <br />
        <br />
        <br />
        <Link className="links">Link</Link>
        <br />
        <br />
        <br />
        <Link className="links">Link</Link>
        <br />
        <br />
        <br />
        <Link className="links">Link</Link>
      </div>
    </div>
  );
};
export default FourdPage;
