import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = { 
    
    RegretMailSenderDesc : "Developed a 'Regret Mail Scheduler' web application using React, Axios, and Lottie for email scheduling with features like editing and cancellation within 10 minutes. Integrated backend API with CRUD operations to manage scheduled emails and display success/error messages." ,
    RegretMailSenderGithub : "https://github.com/imanishita/Regret-Mail-Scheduler",
    RegretMailSenderWebsite : "https://regret-mail-scheduler-git-main-manishita-biswas-projects.vercel.app/",
    
    MovieSearchPageDesc : "Developed an interactive movie search interface using the Fetch API to retrieve and display movie data.Implemented a responsive design with CSS for a seamless user experience.Utilized JavaScript for user input handling and asynchronous data fetching.",
    MovieSearchPageGithub : "https://github.com/imanishita/MovieSearchPage",
    MovieSearchPageWebsite : "https://imanishita.github.io/MovieSearchPage/",

    BankingSystemDesc : "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
    BankingSystemGithub : "https://github.com/imanishita/Banking-System-Using-Java",
    BankingSystemWebsite : "",
};

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox