import React from 'react';
import ProjectBox from './ProjectBox';
import RegretMail from '../images/RegretMail.png';
import MovieSearchPage from '../images/MovieSearchPage.png';
import BankingSystem from '../images/BankingSystem.png';
import Expenso from '../images/Expenso.png';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={RegretMail} projectName="RegretMail" />
        <ProjectBox projectPhoto={Expenso} projectName="Expenso" />
        <ProjectBox projectPhoto={MovieSearchPage} projectName="MovieSearchPage" />
        <ProjectBox projectPhoto={BankingSystem} projectName="BankingSystem" />
        
      </div>

    </div>
  )
}

export default Projects