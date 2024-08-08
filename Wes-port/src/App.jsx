import "./app.scss"
import Navbar from "./Components/Navbar/Navbar";
//import Test from "../src/Test";

const App = () => {
  return <div>
    <section id="HomePage"><Navbar/></section>
    <section>Hero</section>
    <section>Features</section>
    <section>Call to Action</section>
    <section id="Projects">Projects</section>
    <section id="About">About</section>
    <section id="Contact">Contact</section>
    <section>footer</section>

    {/* {<Test/>
    <Test/>
    <Test/>} */}

  </div>;
}

export default App;