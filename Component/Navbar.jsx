import React from 'react'
import './navbar.css';
function Navbar() {
  return (
    <div id='navbar'>
      <nav>
        <a href="#">{props.content1}</a>
        <a href="#">{props.content2}</a>
        <a href="#">{props.content3}</a>
        {/* <input id="search" type="text" placeholder='search here'/> */}
      </nav>
    </div>
  )
}
export default Navbar