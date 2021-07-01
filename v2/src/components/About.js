import React from 'react';
import Fade from "react-reveal/Fade";
import '../styles/about.css';

function About(props) {
    return (
        <div className="about-wrapper" id="about">
            <Fade bottom>
                <h1><span>So...what makes me, me?</span></h1>
            </Fade>
            <div className="container">
                <Fade bottom cascade>
                </Fade>
            </div>
        </div>
    );
}

export default About;