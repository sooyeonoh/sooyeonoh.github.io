import React from 'react';
import Fade from "react-reveal/Fade";
import { Button } from 'react-bootstrap';
import Skills from './Skills';
import '../styles/main/resume.css';

function Resume(props) {
    return (
        <div className="container resume-wrapper" id="resume">
            <Fade bottom>
                <h3>RESUME</h3>
                <h1>
                    <span>Here's my toolbelt.</span>
                    <ul id="legend-inline">
                        <li style={{ color: "#007bff"}}>Programming</li>
                        <li style={{ color: "#ffc107" }}>Web</li>
                        <li style={{ color: "#dc3545" }}>Design</li>
                    </ul>
                </h1>
            </Fade>
            <Fade bottom>
                <ul id="legend">
                    <li style={{ color: "#007bff"}}>Programming</li>
                    <li style={{ color: "#ffc107" }}>Web</li>
                    <li style={{ color: "#dc3545" }}>Design</li>
                </ul>
            </Fade>
            <Skills />
            <a className="center" href="/Resume.pdf" target="_blank" style={{textDecoration: 'none'}}>
                <Button className="button" variant="dark">
                    SEE RESUME
                </Button>
            </a>
        </div>
    );
}

export default Resume;