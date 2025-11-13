import React from 'react'
import './card.css'


function card(props) {
  return (
    <div id="r">
      <h2>Burger</h2>
        <img src="https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg" alt="" />
        <h3>99</h3>
        <br />
        <br />
        <button>Order Now</button>
    </div>
  )
}

export default card