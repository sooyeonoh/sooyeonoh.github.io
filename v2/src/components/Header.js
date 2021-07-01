import React from 'react';
import '../styles/header.css';
import Button from 'react-bootstrap/Button';

function Header(props) {
    return (
      <div className="section" id="home">
        <span class="dot dot-yellow"></span>
        <span class="dot dot-blue"></span>
          <div className="container header-wrapper">
              <h2>
                Hi, I'm Sooyeon
                <span role="img" aria-label="Emoji">
                  👋
                </span>
              </h2>
              <div className="heading-wrapper">
                <h1>I want to make things</h1>
                <h1>that make a difference.</h1>
              </div>
              <p className="description">I'm a current junior at UC Berkeley studying Computer Science. 
                  I'm passionate about tech, design, and everything in between.</p>
              <Button className="button" variant="outline-danger" href="https://www.linkedin.com/in/sooyeonoh/">
                CONNECT WITH ME
              </Button>
          </div>
      </div>
    );
}

export default Header;