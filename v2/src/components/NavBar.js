import React from 'react';
import { NavLink } from 'react-router-dom';
import scrollTo from 'gatsby-plugin-smoothscroll';
import '../styles/navbar.css';

function NavBar(props) {

    return (
        <nav className="navbar-wrapper">

          <div className="name" role="button" onClick={() => scrollTo("#home")}>
            Sooyeon Oh.
          </div>
          <span id="nav-dot"></span>
          <div className="sidenav">
            <ul className="links-wrapper">
              <div className="vertical-line"></div>

              <li>
              <button onClick={() => scrollTo("#about")}><p>About</p></button>
              </li>
              
              <li>
                <button onClick={() => scrollTo("#work")}><p>Work</p></button>
              </li>
                
              <li>
                <button onClick={() => scrollTo("#resume")}><p>Resume</p></button>
              </li>
          </ul>
          </div>

        </nav>
    );
}

export default NavBar;
