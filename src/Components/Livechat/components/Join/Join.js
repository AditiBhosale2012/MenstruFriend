import React, { useState } from "react";
import "./Join.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

let user ;
const setuser=()=>{
    user=document.getElementById("joininput").value;
    document.getElementById('joinInput').value = "";
}

function Join() {
  const [name, setname] = useState("");
  
  return (
    <div className="Joinpage">
      <div className="JoinContainer">
        <img src={logo} alt="logo" />
        <h1>DocChat</h1>
        <input  onChange={(e) => setname(e.target.value)} type="text" id="joininput" placeholder="Enter your name" />
        <Link onClick={(event) => !name ? event.preventDefault() : null} to="/chat">
          <button type="button" className="btn btn-outline-danger" onClick={setuser}>
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Join;
export {user}
