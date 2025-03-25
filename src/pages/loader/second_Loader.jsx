import "./loader.css";
import { Hero, RunLogo, speLogo } from "../../assets";
import { Link } from "react-router-dom";

const SecondLoader = () => {
  return (
    <div className="secondLoader">
      <div className="top">
        <div className="logos">
          <img src={speLogo} alt="" className="speLogo" />
          <img src={RunLogo} alt="" className="runLogo" />
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="left">
            <img src={Hero} alt="" className="hero" />
          </div>
          <div className="right">
            <h2>welcome!</h2>
            <Link to={"/login"} className="btn">
              <div>learn more</div>
              <svg
                width="40"
                height="25"
                viewBox="0 0 105 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M103.537 22.2644C104.59 21.2107 104.59 19.5022 103.537 18.4484L86.3646 1.27655C85.3109 0.222794 83.6024 0.222794 82.5487 1.27655C81.4949 2.3303 81.4949 4.03877 82.5487 5.09253L97.8126 20.3564L82.5487 35.6204C81.4949 36.6741 81.4949 38.3826 82.5487 39.4363C83.6024 40.4901 85.3109 40.4901 86.3646 39.4363L103.537 22.2644ZM0.600586 23.0547L101.629 23.0547L101.629 17.6581L0.600586 17.6581L0.600586 23.0547Z"
                  fill="#02264E"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondLoader;
