import React from 'react';

function Nav() {
    return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="" width="112" height="28"/>
    </a>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true">About</span>
        <span aria-hidden="true">Projects</span>
        <span aria-hidden="true">Contact</span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          About Me
        </a>
  
        <a class="navbar-item">
          Portfolio
        </a>

        <a class="navbar-item">
          Contact
        </a>

        <a class="navbar-item">
          Resume
        </a>

        <a class="navbar-item">
          Report an issue
        </a>
      </div>
      </div>
  </nav>    
   )
   }
  
  export default Nav;
