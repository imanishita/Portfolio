import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Animation from '../LottieFiles/Animation.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
          Hi, my name is Manishita Biswas. I'm a passionate technology enthusiast with a love for felines. Born in the picturesque town of Siliguri, nestled at the foothills of Darjeeling, I later moved to Kolkata, the cultural capital of India. I completed my B.Sc. in Physics from Gokhale Memorial Girls' College under the University of Calcutta and am currently pursuing a B.Tech in Electronics and Communication Engineering from Rajabazar Science College.

Beyond academics, I have a keen interest in painting and photography, which allow me to express my creativity. My curiosity drives me to explore new technologies, and I aspire to make meaningful contributions in the field of innovation and development.


          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Animation} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='Java' />
        <Skills skill='HTML' />
        <Skills skill='CSS' />
        <Skills skill='Javascript' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Python' />
        <Skills skill='Springboot' />
        <Skills skill='MySQL' />
        <Skills skill='Figma' />
        <Skills skill='React' />
        
        
      </div>
    </>
  )
}

export default About