import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { DiNodejs, DiJavascript1, DiMysql } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";

const Skills = ({ skill }) => {
    const icon = {
        'Java': <FaJava />,
        'HTML': <FaHtml5 />,
        'CSS': <FaCss3Alt />,
        'Javascript': <DiJavascript1 />,
        'Git': <FaGitAlt />,
        'Github': <FaGithub />,
        'Python': <FaPython />,
        'Springboot': <SiSpringboot />,
        'MySQL': <DiMysql />,
        'Figma': <FaFigma />,
        'React': <FaReact />
    };

    return (
        <div title={skill} className='SkillBox'>
            {icon[skill] || <span>❓</span>}
        </div>
    );
};

export default Skills;