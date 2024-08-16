import {motion} from "framer-motion"
import "./navbar.scss"
import Sidebar from "../Sidebar/Sidebar"

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">

        <motion.span 
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale:0.5}}
        transition={{duration:0.5}}
        >Wesley Sibanyoni</motion.span>

        <div className="social">
          <a href="Dribble"><motion.img 
          animate={{opacity:1, duration:0.5}}
          transition={{duration:0.5}}
          src=".\src\Components\assets\dribble.png" alt="Dribble" /></a>
          <a href="Github"><img src=".\src\Components\assets\github.png" alt="Github" /></a>
          <a href="LinkedIn"><img src=".\src\Components\assets\linkedin.png" alt="LinkedIn" /></a>
        </div>

      </div>
      
    </div>
  )
}

export default Navbar
