import React from 'react';
import { Link } from 'react-router-dom';
import scrollTo from 'gatsby-plugin-smoothscroll';
import '../styles/navbar.css';

function NavBar(props) {
    return (
        <nav className="navbar-wrapper">

          <div className="name" role="button" onClick={() => scrollTo("#home")}>
            Sooyeon Oh.
          </div>

          <div className="sidenav">
            <div className="vertical-line"></div>

            <ul className="links-wrapper">
              <li>
                <button onClick={() => scrollTo("#about")}><p>About</p></button>
              </li>
              
              <li>
                <button onClick={() => scrollTo("#work")}><p>Work</p></button>
              </li>
                
              <li>
                <button><Link to="/resume"><p>Resume</p></Link></button>
              </li>
          </ul>
          </div>

        </nav>
    );
}

export default NavBar;
