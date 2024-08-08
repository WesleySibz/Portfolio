import {delay, motion} from "framer-motion"
import { useState } from "react"

//This code defines a functional React component named Test that uses the framer-motion library to animate a list of items.
const Test = () => {


    //const [open, setOpen] = useState(false)


    const variants ={
        visible:(i)=>({
            opacity:1, 
            x:100, 
            transition:{delay:i * 0.3},
        }),
            hidden:{opacity:0},
        };

    const items = ["item1", "item2","item3","item4"];


  return (
    <div className='course'>
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item)=>(
            <motion.li variants={variants} key={item}>{item}</motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default Test
