import React, { useState } from "react";
import "./Join.css";
import logo from "../../images/womenchat.jpg";
import { Link } from "react-router-dom";
import Navbar from "../../../Navbar";
import Fotter from "../../../Footer/Fotter";

let user ;
const setuser=()=>{
    user=document.getElementById("joininput").value;
    document.getElementById('joinInput').value = "";
}

function Join() {
  const [name, setname] = useState("");
  
  return (
    <div>
      <Navbar />
    <div className="Joinpage">
      <div className="JoinContainer">
        <div className="join-heading">
        <img src={logo} alt="logo" />
        <h1>MenstruChat</h1>
        </div>
        <input  onChange={(e) => setname(e.target.value)} type="text" id="joininput" placeholder="Enter your name" />
        <Link onClick={(event) => !name ? event.preventDefault() : null} to="/chat">
          <button type="button" className="btn btn-outline-danger" onClick={setuser}>
            Join Now
          </button>
        </Link>
      </div>
    </div>
    <Fotter/>
    </div>
  );
}

export default Join;
export {user}
