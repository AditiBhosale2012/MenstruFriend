import React from 'react'
import Navbar from '../Navbar'
import video from "../../Assets/Video2.mp4"
import Fotter from '../Footer/Fotter'
function Home() {
  return (
    <div className='home-app'>
        <Navbar />
        <div className='home-main'>
        <div className="overlay-home"></div>
        <video src={video} autoPlay loop muted />
        <div className="content-home">
            <h1>We believe In a World where Periods are Never a Problem</h1>
            <p>Making menstruation a normal fact of life by 2030</p>
        </div>
    </div>
    <div className='home-context'>
      <div className='heading-sub1'>
        <h2 className='heading1'>Let's Break the stigma of menstruation</h2>
        <p>Days for Girls advances menstrual equity, health, dignity and opportunity for all. We transform periods into pathways.</p>
        </div>
    <div className='Info'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-sm-12'>
                    <img src="https://www.daysforgirls.org/wp-content/uploads/2020/10/icon1.svg" alt=""></img>
                    <h3 className='heading2'>Health and Wellness</h3>
                    <p>Pads, tampons, period underwear, and cups let you go about your normal life during your period, without getting blood on your clothes or sheets. </p>
                  
                    </div>
                    <div className='col-md-4 col-sm-12'>
                    <img src="	https://www.daysforgirls.org/wp-content/uploads/2020/10/icon4.svg" alt=""></img>
                    <h3>Health Education</h3>
                    <p>Menstrual health is a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity, in relation to the menstrual cycle.</p>
                    
                    </div>
                    <div className='col-md-4 col-sm-12'>
                    <img src="	https://www.daysforgirls.org/wp-content/uploads/2020/10/icon3.svg" alt=""></img>
                    <h3>Social Responibility</h3>
                    <p>Common period taboos include the idea that women are impure, dirty, or sinful while they’re menstruating. Come on lets break this tabbos and make thi society a better place for women.</p>
                   
                    </div>
                </div>
            </div>
        </div>

        
    </div>
    <Fotter/>
</div>
  )
}

export default Home