import './hero.scss'
import { motion} from 'framer-motion';



const textVariants={
    initial: {
        x:-500,
        opacity: 0,
    },
    animate: {
        x:0,
        opacity: 1,
        transistion:{
            duration: 3,
            staggerChildren: 0.1,
            ease:"easeIn"
        }
    },
    scrollButton:{
        opacity:0.1,
        y:30,
        transition:{
            duration: 2,
            repeat: Infinity,
            ease:"easeInOut"
        } 

    }
}

const slideVariants={
    initial: {
        x:"60%"
    },
    animate: {
        x:"-110%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 30,
            ease: "linear"
        },
    },
}


const Hero = () => {

  return (
    <div className='hero'>
        <div className="wrapper">

            <motion.div 
            className='text-container' 
            variants={textVariants} 
            initial="initial" 
            animate="animate"
            >

                <motion.h2 variants={textVariants}>Wesley Shane</motion.h2>
                <motion.h1 variants={textVariants}> Dont nothing come to a sleeper but a dream</motion.h1>

                <motion.div className="buttons" variants={textVariants}>

                    <motion.button 
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    variants={textVariants}>
                        See Latest Project
                    </motion.button>

                    <motion.button
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.95}}
                    variants={textVariants}>
                        Contact Me
                    </motion.button>

                    <motion.img variants={textVariants} animate="scrollButton" src=".\src\Components\assets\linkedin.png" alt="" />

                </motion.div>
                
               

            </motion.div>

            <div className="container">
            <motion.div 
                className='slindingTxtContainer' 
                variants={slideVariants} 
                initial="initial" 
                animate="animate">
                    Developer Editor Trader Data analist
                </motion.div>
            </div>
                
            
            <div className='img-container'>
                <img src='.\src\Components\assets\cvphoto.png' alt=''/>
            </div>
        </div>
    </div>
  )
}
export default Hero
