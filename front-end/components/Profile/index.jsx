import "./style.css";
import DarkMode from "../DarkMode/index.jsx";

const Profile = () => {
  return (
    <div className="profile">
      <div className="home-2">
        <div className="home-3">
          <img src="/AnoopPortfolio.jpg" alt="" />
          <div className="gradient"></div>
          <h3>
            <span className="mern">MERN</span> Developer
          </h3>
          <h2>
            <span className="hai">Hi,</span>
            <br />
            I'm ANOOP VR
          </h2>
        </div>
        <div className="home-4">
          {/* <h3>MERN Stack Developer</h3> */}
          <p>
            MERN developer with experience in building dynamic, scalable web
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
