import "./loader.css";
import { RunLogo, speLogo } from "../../assets";

const FirstLoader = () => {
  return (
    <div className="firstLoader">
      <div className="left">
        <div className="logos">
          <img src={speLogo} alt="" className="speLogo" />
          <img src={RunLogo} alt="" className="runLogo" />
        </div>
      </div>
      <div className="right">
        <div>
          society of petroleum engineers <br /> redeemer’s university chapter
        </div>
      </div>
    </div>
  );
};

export default FirstLoader;
