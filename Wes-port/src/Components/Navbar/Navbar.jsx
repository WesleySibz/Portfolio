import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">

        <span>Wesley Sibanyoni</span>

        <div className="social">
          <a href="Dribble"><img src=".\src\Components\assets\dribble.png" alt="Dribble" /></a>
          <a href="Github"><img src=".\src\Components\assets\github.png" alt="Github" /></a>
          <a href="LinkedIn"><img src=".\src\Components\assets\linkedin.png" alt="LinkedIn" /></a>
        </div>

      </div>
      
    </div>
  )
}

export default Navbar
