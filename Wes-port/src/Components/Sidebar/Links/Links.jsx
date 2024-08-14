import {motion} from 'framer-motion';


const variants = {
  open:{
  transition: {
    staggerChildren:1,
    staggerDirection:1
  },
},
  closed:{
  transition: {
    staggerChildren:0.05,
    staggerDirection:-1,
  },
},
};

const itemVariants = {
  open:{
  y: 0,
  opacity:1,
  transition:{duration:1, delay:0.4},
},
  closed:{
  y:150,
  opacity:0,
  transition:{duration:0.2},
},
};

const Links = () => {

    const items =["HomePage","Projects","About","Contact"];

  return (
    <motion.div className="links" variants={variants}>
        {items.map(item=>(
            <motion.a 
            href={`#${item}`} 
            key={item} 
            variants={itemVariants} 
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            >
              {item}
            </motion.a>
          ))}
    </motion.div>
  )
}

export default Links
