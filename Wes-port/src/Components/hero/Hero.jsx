import './hero.scss';
import {motion} from 'framer-motion';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">

        <div className='text-container'>
            <h2>Wesley Shane</h2>
            <h1> Don't nothing come to a sleeper but a dream</h1>

            <div className="buttons">
            <motion.button 
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}>
                See Latest Project
            </motion.button>
            <motion.button
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}>
                Contact Me
            </motion.button>
            </div>
            <img src=".\src\Components\assets\linkedin.png" alt="" />
        </div>
        
        <div className='img-container'>
            <img src='.\src\Components\assets\cvphoto.png' alt=''/>
        </div>
        </div>

        
    </div>
  )
}

export default Hero
