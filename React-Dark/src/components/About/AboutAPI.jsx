import { useEffect, useState } from "react";
import Axios from "axios";

const API = (props) => {
  // console.log(props.text.user)
  return (
    <div>
      <h1> {props.text.offic} </h1>
    </div>
  );
};

export default API;
