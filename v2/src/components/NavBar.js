import React, { useState } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import '../styles/main/navbar.css';

function NavBar(props) {

  window.onscroll = () => scrollFunction();

  const [lastScrollTop, setLastScroll] = useState(window.pageYOffset || document.documentElement.scrollTop);

  function scrollFunction() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    var nav = document.getElementById("navbar-wrapper");
    if (st > lastScrollTop) {
      nav.style.top = "-13vh";
    } else {
      nav.style.top = "0";
    }
    setLastScroll(st <= 0 ? window.pageYOffset || document.documentElement.scrollTop : st)
  }

  function toggleNav() {
    console.log("clicked");
    var links = document.getElementById('navlinks-wrapper');
    var background = document.getElementById("navlinks-background");
    if (links.style.top === "-100vh") {
      background.style.top = "0";
      links.style.top = "0";
    } else {
      background.style.top = "-280px";
      links.style.top = "-100vh";
    }
  }

    return (
        <nav id="navbar-wrapper" className="container-fluid">
          <div id="navbar-name" role="button" onClick={() => scrollTo("#home")}>
            Sooyeon Oh.
          </div>
          
          <div id="sidenav">
            <div id="toggle-menu" onClick={toggleNav}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </div>
            <div id="navlinks-wrapper">
              <ul id="navlinks">
                <li>
                <div className="vertical-line"></div>
                  </li>

                <li>
                <button onClick={() => scrollTo("#about")}><p>About</p></button>
                </li>

                <li>
                <button onClick={() => scrollTo("#work")}><p>Work</p></button>
                </li>
                
                <li>
                  <button onClick={() => scrollTo("#projects")}><p>Projects</p></button>
                </li>
                  
                <li>
                  <button onClick={() => scrollTo("#resume")}><p>Resume</p></button>
                </li>
              </ul>
            </div>
          </div>
          <div id='navlinks-background'>
          </div>
        </nav>
    );
}

export default NavBar;
