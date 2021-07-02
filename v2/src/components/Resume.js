import React from 'react';
import Fade from "react-reveal/Fade";
import { Button } from 'react-bootstrap';
import Skills from './Skills';
import '../styles/resume.css';

function Resume(props) {
    return (
        <div className="container resume-wrapper" id="resume">
            <Fade bottom>
                <h3>RESUME</h3>
                <h1><span>Here's my toolbelt.</span></h1>
            </Fade>
            <Fade bottom>
                <ul className="legend">
                    <li style={{ color: "#007bff"}}>Programming</li>
                    <li style={{ color: "#ffc107" }}>Web</li>
                    <li style={{ color: "#dc3545" }}>Design</li>
                </ul>
            </Fade>
            <Skills />
            <a className="center" href="RESUME.pdf" target="_blank" style={{textDecoration: 'none'}}>
                <Button className="button" variant="dark">
                    SEE RESUME
                </Button>
            </a>
        </div>
    );
}

export default Resume;