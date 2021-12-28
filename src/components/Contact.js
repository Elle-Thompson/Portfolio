import {Link} from "react-router-dom"


const Contact = () => {

    return (
        <div className="wrapper">
<div className="home-link">
            <Link to="/">Home</Link> 
            </div>
            <div className="div-left">
        <h3> Elle Thompson | Full-Stack Developer  </h3>
      <img src="https://i.ibb.co/kM3Fb41/It-me.jpg" alt="It-me"/>
        </div>


        <div className="div-right"> <h2 id="heading">Contact Me</h2>
        
       
<form id="contactForm">
    <label>Full Name</label>
<input type="text" placeholder="Name"/>
<label>Email</label>
<input type="text" placeholder="Email"/>
<label>Message</label>
<textarea type="text" placeholder="Message here..."/>
    <button id="formButton">Submit</button>
</form>

        
         </div>

       






        </div>

    )
}

export default Contact;