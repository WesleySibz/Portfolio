import "./navbar.scss"

import React from 'react'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="wraapper">
        <span>Wesley Sibanyoni</span>
        <div className="social">
          <a href=""><img src=".\assets\dribble.png" alt="Dribble" /></a>
          <a href=""><img src=".\assets\github.png" alt="Github" /></a>
          <a href=""><img src=".\assets\linkedin.png" alt="LinkedIn" /></a>
        </div>
      </div>
      
    </div>
  )
}

export default Navbar
