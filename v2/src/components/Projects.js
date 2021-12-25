import React from 'react';
import Fade from "react-reveal/Fade";
import Card from './Card';
import { Button } from 'react-bootstrap';
import '../styles/main/projects.css';
import data from '../data.js';

function Projects(props) {
    return (
        <div className="container project-wrapper" id="projects">

            <div className="code-wrapper">
                <Fade bottom>
                    <h3>PROJECTS</h3>
                    <h1><span id="code-title">I code...</span></h1>
                </Fade>
                
                <Fade bottom cascade>
                    <div className="grid">
                    {(data.codeprojects).map((item, index) => (
                        <Card
                            key={index}
                            heading={item.title}
                            paragraph={item.para}
                            imgSrc={item.imageSrc}
                            projectLink={item.url}
                            color={item.color}
                            font={item.fontColor}
                            button={
                                <a href={item.url} target="_blank" rel="noreferrer">
                                    <Button style={{ width: '150px'}} className="card-btn" variant={item.buttonColor} >
                                        EXPLORE
                                    </Button>
                                </a>}
                            className="project code-card"
                        />
                    ))}
                    </div>
                </Fade>
            </div>
            
            <div className="design-wrapper">
                <Fade bottom>
                    <h1><span id="design-title">...and design.</span></h1>
                </Fade>
                
                <Fade bottom cascade>
                    <div className="grid">
                    {(data.designprojects).map((item, index) => (
                        <Card
                            key={index}
                            heading={item.title}
                            paragraph={item.para}
                            imgSrc={item.imageSrc}
                            projectLink={item.url}
                            color={item.color}
                            font={item.fontColor}
                            button= {item.explore && 
                                <a href={item.url} target="_blank" rel="noreferrer">
                                    <Button style={{ width: '150px'}} className="card-btn" variant={item.buttonColor} >
                                        EXPLORE
                                    </Button>
                                </a>
                            }
                            className="project design-card"
                        />
                    ))}
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Projects;