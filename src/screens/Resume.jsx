import Footer from "../components/footer";

const Resume = () => {
  const pdf =
    "https://drive.google.com/file/d/1CPSV2lVROiTaN5OcnSmzBN1rDnhBe7Nn/preview";

  return (
    <div className="wrapper">
      <div className="div-left">
        <h3> Elle Thompson | Full-Stack Developer </h3>
        <img src="https://i.ibb.co/kM3Fb41/It-me.jpg" alt="It-me" />
      </div>

      <div id="resume" className="div-right">
        {" "}
        <h2 id="heading">Resume</h2>
        <iframe title="resume" src={pdf} allow="autoplay"></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
