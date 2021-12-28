import {Link} from "react-router-dom"



const Resume = () => {


    const  pdf = "https://drive.google.com/file/d/1jWQHpiCnBexcR8CJMw18d_yRxkK9X1XC/preview"
    return (
        <div className="wrapper">
            <div className="home-link">
            <Link to="/">Home</Link> 
            </div>
            <div className="div-left">
        <h3> Elle Thompson | Full-Stack Developer  </h3>
      <img src="https://i.ibb.co/kM3Fb41/It-me.jpg" alt="It-me"/>
        </div>


        <div id="resume" className="div-right"> <h2 id="heading">Resume</h2>
        
        <iframe src={pdf} width="640" height="480" allow="autoplay" title="resume"></iframe>
        
        
         </div>

        </div>
    )
}

export default Resume;