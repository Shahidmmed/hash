// src/components/SplashScreen.jsx
import "./SplashScreen.css";
import logo from "../assets/hashimlogo.png";
const SplashScreen = () => {
  return (
    <div className="splash-screen flex-col px-10">
      <img src={logo} alt="Logo" className="splash-logo h-96 w-fit" />
      <div className="container">
        <div className="progress progress-striped">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
