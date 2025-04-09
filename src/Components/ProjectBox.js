import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = { 
    
    RegretMailDesc : "Developed a 'Regret Mail Scheduler' web application using React, Axios, and Lottie for email scheduling with features like editing and cancellation within 10 minutes. Integrated backend API with CRUD operations to manage scheduled emails and display success/error messages." ,
    RegretMailGithub : "https://github.com/imanishita/Regret-Mail-Scheduler",
    RegretMailWebsite : "https://regret-mail-scheduler-git-main-manishita-biswas-projects.vercel.app/",
    
    MovieSearchPageDesc : "Developed an interactive movie search interface using the Fetch API to retrieve and display movie data.Implemented a responsive design with CSS for a seamless user experience.Utilized JavaScript for user input handling and asynchronous data fetching.",
    MovieSearchPageGithub : "https://github.com/imanishita/MovieSearchPage",
    MovieSearchPageWebsite : "https://imanishita.github.io/MovieSearchPage/",

    BankingSystemDesc : "This is a simple Bank Management System built using Java. It allows users to create accounts, deposit and withdraw money, check balances, and perform basic banking operations. This project demonstrates OOP concepts, file handling, and exception handling in Java.",
    BankingSystemGithub : "https://github.com/imanishita/Banking-System-Using-Java",
    BankingSystemWebsite : "",

    ExpensoDesc : "Designed and developed a fullstack app to track income and expenses with secure user login.Built REST APIs using Spring Boot and integrated them with a React frontend.",
    ExpensoGithub: "https://github.com/imanishita/Expenso",
    ExpensoWebsite :"https://expenso-cwjb.vercel.app/",
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