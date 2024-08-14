import './hero.scss';
import {motion} from 'framer-motion';


const textVariants={
    initial: {
        x:-500,
        opacity: 0,
    },
    animate: {
        x:0,
        opacity: 1,
        transistion:{
            duration: 2,
            staggerChildren: 0.1,
        }
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
        animate="animate">

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
            </motion.div>
            <motion.img variants={textVariants} src=".\src\Components\assets\linkedin.png" alt="" />

            <div className='slindingTxtContainer'>
                Coder Editor Trader Influencer 
            </div>
        </motion.div>
        
        <div className='img-container'>
            <img src='.\src\Components\assets\cvphoto.png' alt=''/>
        </div>
        </div>

        
    </div>
  )
}

export default Hero
