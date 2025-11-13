import React from 'react';
import './nav.css';

function Nav() {
  return (
    <div id="nav">
      <div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png"
        alt="Logo"
        id="N"
      />
      Book App
      </div>
      <div id="links">
      <a href="#" id='bar'>Home</a>
      <a href="#" id='bar'>About</a>
      <a href="#" id='bar'>Contact us</a>
    </div>
    </div>
  );
}

export default Nav;
