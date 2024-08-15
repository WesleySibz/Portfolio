import { useState } from "react"
import Links from "./Links/Links"
import {motion} from "framer-motion"
import "./sidebar.scss"
import ToggleButton from "./ToggleButton/ToggleButton"
//import { type } from "os"

const variants = {
    open:{
        clipPath: "circle(1500px at 50px 50px)",
        transition:{
        delay:0,
        type: "spring",
        stiffness: 20,
        damping: 5,
    }
},
    closed:{
        clipPath:"circle( 30px at 50px 50px)",
        transition:{
        delay:0,
        type: "spring",
        stiffness: 200,
        damping: 60,
        }
    }
} 

const Sidebar = () => {

    const [open,setOpen] = useState(false)

  return (
    <motion.div className="sidebar" animate={open ?"open" : "closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
