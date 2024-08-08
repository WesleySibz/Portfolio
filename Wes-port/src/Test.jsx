import {motion} from "framer-motion"
import { useState } from "react"
const Test = () => {


    const [open, setOpen] = useState(false)
    const variants ={
        visible:{opacity:1, x:1000, transition:{type:"spring", stiffness:100, damping:100}},
        hidden:{opacity:0},

    }



  return (
    <div className='course'>
      <motion.div className="box" 
        variants={variants}
        //initial="hidden"
        //animate="visible"
        transition={{duration:2}}
        animate={open ? "visible" : "hidden"}
        //whileInView={{opacity:1, scale:2}}
        //drag
        ></motion.div>
        <button onClick={()=>setOpen(prev=>!prev)}>Click</button>
    </div>
  )
}

export default Test
