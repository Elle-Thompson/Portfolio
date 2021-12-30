import {Link} from "react-router-dom"

const Contact = () => {


 const submitForm = () => {
	fetch("https://api.apispreadsheets.com/data/53IM9m0KDOByMSym/", {
	method: "POST",
	body: JSON.stringify({"data": {"email":"","message":"","full_name":""}}),
}).then(res =>{
	if (res.status === 201){
		// SUCCESS
	}
	else{
		// ERROR
	}
})
}


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
<input className="name-input" type="text" name="full_name" placeholder="Name"/>
<input className="email-input" type="text" name="email" placeholder="Email"/>
<textarea className="message-input" name="message" placeholder="Message here"></textarea>
<button onClick={submitForm} id="formButton">Submit</button> 
{/* <button onClick={submitForm} id="formButton">Submit</button> */}
</form>


       
       <div className="contact-links">  
        <a href="https://www.linkedin.com/in/ellethompson01/"> <i class="fab fa-linkedin fa-3x"></i> </a>
       <a href="https://github.com/Elle-Thompson"> <i class="fab fa-github fa-3x"></i></a>

         </div>
         </div>

        </div>

    )
}

export default Contact;

