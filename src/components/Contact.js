import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/elltee/google_sheets/skjrnQcUqQjsmuGi?Id=contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([[name, email, message]]),
        }
      );
      await response.json();
      setData({ ...data, name: "", email: "", message: "" });
    } catch (err) {
      console.log(err);
    }
  };

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
        <h2 id="heading">Contact Me</h2>
        <form onSubmit={handleSubmit} id="contactForm">
          <input
            onChange={handleChange}
            className="name-input"
            type="text"
            value={name}
            name="name"
            placeholder="Name"
          />
          <input
            onChange={handleChange}
            className="email-input"
            type="text"
            value={email}
            name="email"
            placeholder="Email"
          />
          <textarea
            onChange={handleChange}
            className="message-input"
            value={message}
            name="message"
            placeholder="Message here"
          ></textarea>
          <button id="formButton">Submit</button>
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
