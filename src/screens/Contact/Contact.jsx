import React, {useState} from 'react';
import './Contact.css'
import DivLeft from '../../components/DivLeft';
import Footer from "../../components/footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


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
    // let newRow = {
    //   Name: name,
    //   Email: email,
    //   Message: message,
    // };
  };

  return (
    <div className="wrapper contact-page">
      <DivLeft />

      <div id="contact" className="div-right">
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
          />
          <button onClick={handleSubmit} type="submit" id="formButton">
            Submit
          </button>
        </form>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/ellethompson01/">
            {" "}
            <i className="fab fa-linkedin fa-3x" />
          </a>

          <a href="https://github.com/Elle-Thompson">
            <i className="fab fa-github fa-3x" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
