import React from 'react';

function Nav({ thisPage, tabChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => tabChange('about')}
          className={thisPage === 'about' ? 'nav-link active' : 'nav-link'}
        >
          about
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => tabChange('portfolio')}
          className={thisPage === 'portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>

      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => tabChange('contact')}
          className={thisPage === 'contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => tabChange('resume')}
          className={thisPage === 'resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Nav;