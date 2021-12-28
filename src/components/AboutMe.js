import {Link} from "react-router-dom"


const AboutMe = () => {

    return (
        <div className="wrapper">
            <div className="home-link">
            <Link to="/">Home</Link> 
            </div>

            <div className="div-left">
        <h3> Elle Thompson | Full-Stack Developer  </h3>
      <img src="https://i.ibb.co/kM3Fb41/It-me.jpg" alt="It-me"/>
        </div>

        <div id="about-me" className="div-right">  <h2 id="heading">About Me</h2>  </div>

        </div>
    )
}

export default AboutMe;