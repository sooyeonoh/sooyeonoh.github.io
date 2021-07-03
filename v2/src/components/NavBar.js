import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import '../styles/main/navbar.css';

function NavBar(props) {

  function toggleNav() {
    var nav = document.getElementById('navlinks-wrapper');
    var background = document.getElementById('background');
    if (nav.style.top === "-100vh") {
      nav.style.top = "0";
      //background.style.display = 'block';
    } else {
      nav.style.top = "-100vh";
      //background.style.display = 'none';
    }
  }

    return (
        <nav className="container-fluid navbar-wrapper">

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
                  <button onClick={() => scrollTo("#resume")}><p>Resume</p></button>
                </li>
              </ul>
            </div>
            {/* <div id="background" style={{ backgroundColor: 'white' }}></div> */}
          </div>
        </nav>
    );
}

export default NavBar;
