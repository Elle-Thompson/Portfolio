import { useEffect } from "react";
import { Link } from "react-router-dom";
const  {GoogleSpreadsheet} = require("google-spreadsheet");
const creds = require('../client_secret.json');
let doc = {}

const Contact = () => {
   
    const makeInitialCall = async () => {
        doc = new GoogleSpreadsheet('1O2vXcSv0JxPmREPaEFNP-Zn1AUH_Rs8-mz7TOasXKnE')
        await doc.useServiceAccountAuth(creds);
        await doc.loadInfo();
        let dataRows = await doc.sheetsByIndex[0].getRows();
        console.log(doc.sheetsByIndex[0])
        console.log(dataRows);
        console.log("test")
       
       }
       console.log("test")

       useEffect(()=> {
        makeInitialCall()
       
       },  [])


  return (
    <div className="wrapper">
      <div className="home-link">
        <Link to="/">Home</Link>
      </div>
      <div className="div-left">
        <h3> Elle Thompson | Full-Stack Developer </h3>
        <img src="https://i.ibb.co/kM3Fb41/It-me.jpg" alt="It-me" />
      </div>

      <div className="div-right">
        {" "}
        <h2 id="heading">Contact</h2>
        <form id="contactForm">
          <input
            className="name-input"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="email-input"
            type="text"
            name="email"
            placeholder="Email"
          />
          <textarea
            className="message-input"
            name="message"
            placeholder="Message here"
          ></textarea>
          <button type="submit" id="formButton">
            Submit
          </button>
        </form>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/ellethompson01/">
            {" "}
            <i class="fab fa-linkedin fa-3x"></i>{" "}
          </a>
          <a href="https://github.com/Elle-Thompson">
            {" "}
            <i class="fab fa-github fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
