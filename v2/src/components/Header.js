import React from 'react';
import '../styles/main/header.css';
import Button from 'react-bootstrap/Button';
import Fade from "react-reveal/Fade";

function Header(props) {
    return (
      <div id="home" style={{width: '100vw'}}>
        <span class="dot dot-yellow"></span>
        <span class="dot dot-blue"></span>
        <Fade bottom>
          <div className="container-fluid header-wrapper">
              <h2>
                Hi, I'm Sooyeon
                <span role="img" aria-label="Emoji">
                  &nbsp; 👋
                </span>
              </h2>
              <div className="heading-wrapper">
                <h1>I want to make things</h1>
                <h1>that make a difference.</h1>
              </div>
              <p className="description">I'm a junior at UC Berkeley studying Computer Science. 
                  I'm passionate about tech, design, and everything in between.</p>
              <a href="https://www.linkedin.com/in/sooyeonoh/" target="_blank" rel="noreferrer">
                <Button className="button" variant="outline-danger">
                  CONNECT WITH ME
                </Button>
              </a>
            </div>
          </Fade>
      </div>
    );
}

export default Header;