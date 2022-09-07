import React from 'react';
import Fade from "react-reveal/Fade";
import '../styles/main/about.css';

function About(props) {
    return (
        <div className="about-wrapper" id="about">
            <Fade bottom>
                <h3>ABOUT</h3>
                <h1><span>What makes me, me?</span></h1>
            </Fade>
            <div className="container content-wrapper">
                <Fade bottom cascade>
                    <div className="content-text">
                        <p>
                            Hey! My name is Sooyeon and I enjoy building exciting things, frontend or backend.
                            Currently, I'm based in the <span style={{fontWeight: "bold"}}>📍 Bay Area</span> while I 
                            complete my Bachelor's in CS 💻 at UC Berkeley.
                        </p>
                        <p>
                            During my time in college, I've had the privilege of working in diverse contexts. My experiences range from
                            <span style={{color: "#dc3545"}}> product engineering in biotech</span>, to 
                            <span style={{color: "#dc3545"}}> SWE in big tech</span>, to 
                            <span style={{color: "#dc3545"}}> mentoring CS students at an edtech startup</span>.
                        </p>
                        <p>
                            Oh - and for funsies, I'm a <span style={{fontWeight: "bold"}}>BIG foodie 🍜</span> and run a food page on Instagram.  
                            <a href='https://www.instagram.com/soosfoods/?hl=en'> Check it out here!</a> 
                        </p>
                        {/* <div className="current-text">
                            <h2>Most recently...</h2>
                            <p>
                                <span role="img" aria-label="Emoji" style={{fontSize: "24px"}}>
                                    📍 &nbsp;
                                </span>
                                <span style={{fontWeight: "bold", color: "#007bff"}}>Software Engineering Intern,</span> Thermo Fisher Scientific
                            </p> 
                            <p>
                                <span role="img" aria-label="Emoji" style={{fontSize: "24px"}}>
                                    🎓 &nbsp;
                                </span>
                                <span style={{fontWeight: "bold", color: "#007bff"}}>Computer Science Fellow,</span> Edlyft
                            </p> 
                        </div> */}
                        <h2>
                            Scroll down 
                                <span role="img" aria-label="Emoji" style={{fontSize: "24px"}}>
                                &nbsp; 👇🏻 &nbsp;
                                </span>
                            to see what I do!
                        </h2>
                        
                    </div>
                </Fade>
                <div className="dots-container">
                    <div className="dot image-container" >
                        <img src="/images/me.png" width="430" height="auto" alt="Me"/>
                    </div>
                    <div className="dot dot-yellow"></div>
                </div>
            </div>
        </div>
    );
}

export default About;