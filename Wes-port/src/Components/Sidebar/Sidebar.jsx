import { useState } from "react"
import Links from "./Links/Links"
import {motion} from "framer-motion"
import "./sidebar.scss"
import TogBtn from "./ToggleButton/TogBtn"
//import { type } from "os"
const Sidebar = () => {

    const [open,setOpen] = useState(false)

    const variants = {
        open:{
            clipPath: "circle(1200px at 50px 50px)",
            transition:{
            delay:0,
            type: "spring",
            stiffness: 20,
            damping: 5,
        }
    },
        closed:{
            clipPath:"circle(30px at 50px 50px)",
            transition:{
            delay:0,
            type: "spring",
            stiffness: 400,
            damping: 60,
            }
        }
    } 

  return (
    <motion.div className="sidebar" animate={open ?"open" : "closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <TogBtn setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar
