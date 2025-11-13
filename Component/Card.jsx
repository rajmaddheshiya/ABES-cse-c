import React from 'react'
import './card.css'
function card() {
  return (
    <div id='r'>
      <img src="cartoon.png" alt="" /> 
      <h1>{props.name}</h1>
      <h3>{props.edu}</h3>
    </div>
  )
}

export default card