import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("../client_secret.json");
let doc = {}

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const makeInitialCall = async () => {
    doc = new GoogleSpreadsheet("1O2vXcSv0JxPmREPaEFNP-Zn1AUH_Rs8-mz7TOasXKnE");
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    let rows = await doc.sheetsByIndex[0].getRows();

    console.log(rows);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = async () => {
    let newRow = {
      Name: name,
      Email: email,
      Message: message
    };
    let sheet = await doc.sheetsByIndex[0];
    sheet.addRow(newRow);
  };

  useEffect(() => {
    makeInitialCall();
  }, []);

  return (
    <div className="wrapper">
    
      <div className="div-left">
        <h3> Elle Thompson | Full-Stack Developer </h3>
        <img src="https://i.ibb.co/kM3Fb41/It-me.jpg" alt="It-me" />
      </div>

      <div id="contact" className="div-right">
        {" "}
        <h2 id="heading">Contact Me</h2>
        <form id="contactForm">

        <input type="hidden" name="form-name" value="Contact" />

        
          <input
            onChange={handleNameChange}
            className="name-input"
            type="text"
            name="name"
            placeholder="Name"
            value={name}
          />
          <input
            onChange={handleEmailChange}
            className="email-input"
            type="text"
            name="email"
            placeholder="Email"
            value={email}
          />
          <textarea
            onChange={handleMessageChange}
            className="message-input"
            name="message"
            placeholder="Message here"
            value={message}
          ></textarea>
          <button onClick={handleSubmit} type="submit" id="formButton">
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
      <footer id="footer">
       
            <div className="home-link">
            <Link to="/"><button button ID="HOME-BTTN">HOME</button></Link>
            </div>
            
             </footer>
    </div>
  );
};

export default Contact;
