import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="wrapper">
      <div className="home-link">
        <Link to="/">Home</Link>
      </div>

      <div className="div-left">
        <h3> Elle Thompson | Full-Stack Developer </h3>
        <img src="https://i.ibb.co/kM3Fb41/It-me.jpg" alt="It-me" />
      </div>

      <div id="skills" className="div-right">
        <h2 id="heading">Skills</h2>

        <div >
          {/* <h4>
            My current stack includes: </h4> */}
            <div id="skills-icons">
              
                  <div id="skills-div"><img src="https://img.icons8.com/ios-filled/50/000000/html.png"/> <p id="skills-text"> HTML </p>  </div>
                  <div id="skills-div"> <img src="https://img.icons8.com/plasticine/50/000000/react.png"/> <p id="skills-text">React </p> </div>
                  <div id="skills-div"> <img src="https://img.icons8.com/ios-filled/50/000000/javascript.png"/> <p id="skills-text">JavaScript </p> </div>
                  <div id="skills-div"> <img src="https://img.icons8.com/color/50/000000/css3.png"/> <p id="skills-text">CSS  </p></div>
                  <div id="skills-div"> <img src="https://img.icons8.com/color/50/000000/mongodb.png"/> <p id="skills-text">MongoDB </p></div>
                  <div id="skills-div"> <img src="https://img.icons8.com/fluency/50/000000/node-js.png"/> <p id="skills-text">Node.js  </p></div>
                  <div id="skills-div">  <img src="https://img.icons8.com/ios-filled/50/000000/github.png"/> <p id="skills-text">GitHub </p> </div>
                  <div id="skills-div"> <img src="https://img.icons8.com/color/50/000000/django.png"/> <p id="skills-text">Django  </p></div>
                  <div id="skills-div"> <img src="https://img.icons8.com/fluency/50/000000/python.png"/>  <p id="skills-text">Python </p> </div>
                  <div id="skills-div"> <img src="https://img.icons8.com/color/50/000000/postgreesql.png"/> <p id="skills-text">PostgreSQL </p> </div>
                     
            
            </div>
         
        </div>
      </div>
    </div>
  );
};

export default Skills;
