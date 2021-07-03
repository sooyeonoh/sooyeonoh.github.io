import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data.js';

function Skills(props) {

    return (
        <div className="skills-wrapper">
            <Fade bottom cascade>
                <div className="skills-grid">
                    {(data.skills.programming).map((skill, index) => (
                    <div className="skill" key={index}>
                        <img src={skill.img} alt="css"></img>
                        <span className="dot dot-blue"></span>
                        <p>{skill.para}</p>
                    </div>
                    ))}
                    {(data.skills.webdev).map((skill, index) => (
                    <div className="skill" key={index}>
                        <img src={skill.img} alt="css"></img>
                        <span className="dot dot-yellow"></span>
                        <p>{skill.para}</p>
                    </div>
                    ))}
                    {(data.skills.design).map((skill, index) => (
                    <div className="skill" key={index}>
                        <img src={skill.img} alt="css"></img>
                        <span className="dot dot-red"></span>
                        <p>{skill.para}</p>
                    </div>
                    ))}
                </div>
            </Fade>
        </div>
    );
}

export default Skills;