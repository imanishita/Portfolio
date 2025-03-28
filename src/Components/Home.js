import React from 'react';
import Lottie from  "lottie-react";
import homecoding from "../LottieFiles/homecoding.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { FaMugHot } from "react-icons/fa";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi!</h1>
          <h1>I'M <b>MANISHITA BISWAS</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={homecoding} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
          Hi, I'm Manishita Biswas, a tech enthusiast<br /><br />
          with a strong background in <b>Java,</b> HTML <b>CSS</b> <b>Javascript</b> Springboot<br />
            <b>MySQL</b><b> Power BI</b> and<b>Python</b> <br /><br />
            Just to let you know , I can't survive a day without a good cup of <b> tea!</b> <FaMugHot style={{ scale: "1.5", transform: "rotate(15deg)" }} />   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home