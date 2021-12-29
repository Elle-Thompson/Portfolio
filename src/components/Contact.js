import {Link} from "react-router-dom"

const Contact = () => {



	function subForm  ()  {

   
    fetch("https://api.apispreadsheets.com/data/ho0MbvJimDpFWFGO/", {
        method: "POST",
        body: JSON.stringify({"data": {"full_name":"","email":"","message":""}}),
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
    <label>Full Name</label>
<input type="text" name="full_name" placeholder="Name"/>
<label>Email</label>
<input type="text" name="email" placeholder="Email"/>
<label>Message</label>
<textarea type="text" name="message" placeholder="Message here..."/>
    <button onclick={subForm} id="formButton">Submit</button>
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