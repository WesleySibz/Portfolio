import {motion} from "framer-motion"
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">

        <motion.span 
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:0.5}}
        transition={{duration:0.5}}
        >Wesley Sibanyoni</motion.span>

        <div className="social">
          <a href="Dribble"><img src=".\src\Components\assets\dribble.png" alt="Dribble" /></a>
          <a href="Github"><img src=".\src\Components\assets\github.png" alt="Github" /></a>
          <a href="LinkedIn"><img src=".\src\Components\assets\linkedin.png" alt="LinkedIn" /></a>
        </div>

      </div>
      
    </div>
  )
}

export default Navbar
