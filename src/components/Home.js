import {Link} from "react-router-dom"



const Home = () => {

    return (
        <div className="home">
     <div className="div-left">
        <h3> Elle Thompson | Full-Stack Developer  </h3>
      <img id="primary-picture" src="https://i.ibb.co/kM3Fb41/It-me.jpg" alt="It-me"/>
        </div>


      <div className="div-right">
        
       
          
        <div className="buttons">
          <header> <h2>Hey There! I'm Elle. </h2>

           <span className="span1">Software Developer</span>   </header>
         
          
         <Link to="/AboutMe"> <button> ABOUT ME </button> </Link>     
         <Link to="/Projects"> <button>PROJECTS</button> </Link>
         <Link to="/Skills"> <button>SKILLS</button> </Link>
         <Link to="/Resume"> <button>RESUME</button> </Link>
         <Link to="/Contact"> <button>CONTACT ME</button> </Link>

        <div className="links">  
        <a href="https://www.linkedin.com/in/ellethompson01/"> <i class="fab fa-linkedin fa-3x"></i> </a>
       <a href="https://github.com/Elle-Thompson"> <i class="fab fa-github fa-3x"></i></a>

       {/* <Link to="/Contact"><i id="plane" class="fas fa-paper-plane fa-3x"></i></Link> */}
         </div>

        </div>

        

      </div>
        </div>
    )
}

export default Home;