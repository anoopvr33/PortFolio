import { useCallback, useEffect, useState } from "react";
// import Education from "../Education/index.jsx";
import Education from "../../components/Education";
import About from "../../components/About";
import Message from "../../components/Message";
import Project from "../../components/Project";
import Profile from "../../components/Profile";
// import "../Education/style.css";
import "./style.css";

const Home = () => {
  const [social, setSocial] = useState(false);
  const [loop, setLoop] = useState(false);

  const GetList = useCallback(() => {
    setSocial((prev) => !prev);
    console.log("haaa");
  }, []);

  useEffect(() => {
    console.log("rendering");
    const Interval = setInterval(() => {
      setLoop((prev) => !prev);
    }, 1000);

    return () => {
      clearInterval(Interval);
    };
  }, []);

  return (
    <div className="home">
      <div className="section-container">
        {/* /////////////////////////////////////////// profile  //////// */}
        <section id="sec1" className="section-1">
          <Profile></Profile>
        </section>
        {/* /////////////////////////////////////////// project  //////// */}

        <section id="sec2" className="section-2">
          <Project></Project>
        </section>

        {/* /////////////////////////////////////////// education  //////// */}

        <section id="sec3" className="section-3">
          <Education></Education>{" "}
        </section>
        {/* /////////////////////////////////////////// about  //////// */}

        <section id="sec4" className="section-4">
          <About></About>
        </section>
        {/* /////////////////////////////////////////// message  //////// */}

        <section id="sec5" className="section-5">
          <Message></Message>
        </section>
      </div>
      <div className="menu-bar">
        <span className={`${loop ? "list-1" : "list-2"}`}>
          <i onClick={GetList} className="fa-solid fa-list "></i>{" "}
        </span>

        <div className={`${social ? "menu-bar-social" : "box"}`}>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-whatsapp"></i>
        </div>
      </div>
      <div className="contact-bar">
        <a href="#sec1">
          <i className="fa-solid fa-house"></i>
        </a>
        <a href="#sec2">
          <i className="fa-solid fa-gears"></i>
        </a>
        <a href="#sec3">
          <i className="fa-solid fa-user-graduate"></i>
        </a>

        <a href="#sec4">
          <i className="fa-solid fa-align-center"></i>
        </a>
        <a href="#sec5">
          <i className="fa-solid fa-comment"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
