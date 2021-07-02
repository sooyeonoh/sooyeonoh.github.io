import React from 'react';
import Fade from "react-reveal/Fade";
import '../styles/about.css';

function About(props) {
    return (
        <div className="about-wrapper" id="about">
            <Fade bottom>
                <h3>ABOUT</h3>
                <h1><span>So...what makes me, me?</span></h1>
            </Fade>
            <div className="container content-wrapper">
                <Fade bottom cascade>
                    <div className="content-text">
                        <p>
                            I'm currently based in <span style={{fontWeight: "bold", color: "#dc3545"}}>Berkeley, CA</span> while I finish up my undergrad 
                            degree in Computer Science. Previously, I've lived in Texas (yeehaw! <span role="img" aria-label="Emoji">🤠</span>), 
                            Minnesota, and Seoul, South Korea.
                        </p>
                        <p>
                            During the day, you can spot me at a nearby cafe getting work done 
                            with an <span style={{fontWeight: "bold"}}>oat milk latte <span role="img" aria-label="Emoji">&nbsp; ☕ &nbsp;</span>
                            and lofi music<span role="img" aria-label="Emoji">&nbsp; 🎵 &nbsp;</span></span> 
                            I rewind by watching trashy reality TV, painting, or curating Pinterest boards. 
                        </p>
                        <div className="current-text">
                            <h2>Currently a...</h2>
                            <p>
                                <span role="img" aria-label="Emoji" style={{fontSize: "24px"}}>
                                    📍 &nbsp;
                                </span>
                                <span style={{fontWeight: "bold", color: "#007bff"}}>Product Engineering Intern,</span> Thermo Fisher Scientific
                            </p> 
                            <p>
                                <span role="img" aria-label="Emoji" style={{fontSize: "24px"}}>
                                    🎓 &nbsp;
                                </span>
                                <span style={{fontWeight: "bold", color: "#007bff"}}>Computer Science Fellow,</span> Edlyft
                            </p> 
                        </div>
                        <p style={{fontSize: "18px"}}>
                            Scroll down 
                                <span role="img" aria-label="Emoji" style={{fontSize: "24px"}}>
                                &nbsp; 👇🏻 &nbsp;
                                </span>
                            to see what I do!</p>
                        
                    </div>
                </Fade>
                <div className="dots-container">
                    <div className="dot image-container" >
                        <img src="/images/me.png" width="430" height="auto" alt="Me"/>
                    </div>
                    <span class="dot dot-yellow"></span>
                </div>
            </div>
        </div>
    );
}

export default About;