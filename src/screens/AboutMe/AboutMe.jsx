import React from "react";
import "./AboutMe.css";
import NavBar from "../../components/NavBar/NavBar";

const AboutMe = () => {
  return (
    <div className="AboutMe-page">
      <div className="div-right">
        <h2 id="heading">About Me</h2>
        <NavBar />
        <div id="pic1-img">  
       
        <img   src="https://i.ibb.co/kQGSTQ5/img-5162.jpg" alt="img-5162" border="0"/>
        </div>
       
        <div className="about-me-wrapper">
        <div id="pic2-img">  
       
       <img   src="https://i.ibb.co/kQGSTQ5/img-5162.jpg" alt="img-5162" border="0"/>
       </div>

        
          <div className="about-me">
            <p>
              <span className="secret"> H </span>i Friends! My name is Elle ( pronounced like the letter). I graduated from the software
              engineering immersive program at General Assembly in December 21',
              and now I'm looking for opportunities to grow as a software
              developer. I have a diverse background in behavioral psychology,
              aircraft maintenance, and customer service. All of these fields
              have taught me valuable skills that I'm now able to use as a
              developer. For example, my degree in psychology led me to work
              with early learners who happened to be on the autism spectrum.
              This taught me patience and how to communicate with a diverse
              group of individuals. My passion for helping people remains at the
              forefront of my mind as I begin my search for developer
              opportunities. I am a hands-on learner with an eye for detail. I
              hope to find new ways to utilize these skills in a manner that
              will help those who cannot help themselves.
            </p>
          </div>




          <div id="quote-words">
            <h4>Favorite Quote</h4>
            <p>
              “Listen to the mustn'ts, child. Listen to the don'ts. Listen to
              the shouldn'ts, the impossibles, the won'ts. Listen to the never
              haves, then listen close to me... Anything can happen, child.
              Anything can be.” ― Shel Silverstein
            </p>
          </div>

          <div className="hobbies">
            <h4>Favorite Hobbies</h4>
            <p>
              I love to try new things. These are a few of my current favorite
              hobbies:
            </p>
            <ol className="aboutMe-list">
              <li>Pottery</li>
              <li>Video games (MMORPG's especially)</li>
              <li>Reading (See book list)</li>
              <li>Painting/drawing</li>
            </ol>
            <p>
              I'm currently hoping to try skydiving and horseback riding this
              year.
            </p>
          </div>
          <div className="favorite-books-movies">
            <h4>Favorite Books</h4>
            <p>
              I love to read anything mystery, sci-fi, fantasy, or psychology
              related.
              <ol className="aboutMe-list">
                <li>The Davinci Code by Dan Brown</li>
                <li>The Eragon series by Christoper Paolini</li>
                <li>Emotional Intelligence by Daniel Goleman</li>
                <li>One, None, and A Hundred-Thousand by Luigi Pirandello</li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
