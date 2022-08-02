import React from 'react'
import video from "../../Assets/Video2.mp4"
import "./home.css"
import Navbar from "../Navbar/index"

function Homemain() {
  return (
    <div>
    <Navbar />
    <div className='main'>
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted />
        <div className="content">
            <h1>We believe In a World where Periods are Never a Problem</h1>
            <p>Making menstruation a normal fact of life by 2030</p>
        </div>
    </div>
    <div className='context'>
        <h2>Let's Break the stigma of menstruation</h2>
        <p>Days for Girls advances menstrual equity, health, dignity and opportunity for all. We transform periods into pathways.</p>
        {/* <div className='Info'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-sm-12'>
                    <img src="https://www.daysforgirls.org/wp-content/uploads/2020/10/icon1.svg" alt=""></img>
                    </div>
                </div>
            </div>

        </div> */}
    </div>
    </div>
  )
}

export default Homemain
