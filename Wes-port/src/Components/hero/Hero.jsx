import './hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">

        <div className='text-container'>
            <h2>Wesley Shane</h2>
            <h1>Don't nothing come to a sleeper but a dream</h1>

            <div className="buttons">
            <button>See Latest Project</button>
            <button>Contact Me</button>
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
