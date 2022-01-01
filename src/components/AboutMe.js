import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="wrapper">
      <div className="home-link">
        <Link to="/">Home</Link>
      </div>

      <div className="div-left">
        <h3> Elle Thompson | Full-Stack Developer </h3>
        <img src="https://i.ibb.co/kM3Fb41/It-me.jpg" alt="It-me" />
      </div>
      <div id="about-me" className="div-right">
        {" "}
        <h2 id="heading">About Me</h2>
        
        <div className="about-me-wrapper">

        <div className="about-me">
            <p>
              Hi Friends! My name is Louis Thompson, but please just call me
              Elle. I recently graduated from the software engineering immersive
              at General Assembly, and now I'm looking for opportunities to grow
              as an engineer. I have a diverse background in behavioral
              psychology, aircraft maintenance, and customer service. All of
              these fields have taught me valuable skills that I'm now able to
              use as a developer. For example, my degree in psychology led me to
              work with early learners who happened to be on the autism
              spectrum. This taught me patience and how to communicate with a
              diverse group of individuals. My passion for helping people
              remains at the forefront of my mind as I begin my search for
              developer opportunities. I am a hands-on learner with an eye for
              detail. I hope to find new ways to utilize these skills in a
              manner that will help those who cannot help themselves.{" "}
            </p>{" "}
          </div>
        
          
          <div>    
          <img  className="pic1" src="https://i.ibb.co/JxPCb88/kuwait.jpg" alt="kuwait" />
          </div>
          <div className="pic1-words"> <p> Test words here   </p> </div>
          <div >  
          <img className="pic2" src="https://i.ibb.co/qgvdjvF/IMG-3221.jpg" alt="IMG-3221" />
          </div>
          <div className="pic2-words"> <p>Test words here</p></div>
          <div className="quote-words"> <p>“Listen to the mustn'ts, child. Listen to the don'ts. Listen to the shouldn'ts, the impossibles, the won'ts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.”

― Shel Silverstein</p></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
