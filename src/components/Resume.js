import {Link} from "react-router-dom"



const Resume = () => {


    const  pdf = "https://drive.google.com/file/d/1CPSV2lVROiTaN5OcnSmzBN1rDnhBe7Nn/preview"
    
    return (
        <div className="wrapper">
            
            <div className="div-left">
        <h3> Elle Thompson | Full-Stack Developer  </h3>
      <img src="https://i.ibb.co/kM3Fb41/It-me.jpg" alt="It-me"/>
        </div>


        <div id="resume" className="div-right"> <h2 id="heading">Resume</h2>
        
        <iframe title="resume" src={pdf}  allow="autoplay"></iframe>
        {/* width="auto" height="480" */}
        
         </div>
         <footer id="footer">
       
            <div className="home-link">
            <Link to="/"><button button ID="HOME-BTTN">HOME</button></Link>
            </div>
            
             </footer>

        </div>
    )
}

export default Resume;