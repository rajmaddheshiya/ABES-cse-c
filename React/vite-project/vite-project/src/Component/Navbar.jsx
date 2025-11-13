import React from 'react'
import './navbar.css'

function navbar(props) {
  return (
    <div id="n">
        <nav>
            <img src="cartoon.png" alt="logo" />
            <a href="#">{props.content1}</a>
            <a href="#">{props.content2}</a>
            <a href="#">{props.content3}</a>
        </nav>
    </div>
  )
}

export default navbar