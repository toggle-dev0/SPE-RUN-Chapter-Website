import "./style.css";
import { loginHero } from "../../assets";
import Heroimage from "./heroComponent";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="main">
      <Heroimage hero={loginHero} />
      <div className="detail">
        <div className="detailSubContainer">
          <form action="">
            <h2>Login to SPE Society</h2>
            <p> We're glad to see you again! Please log in to continue.</p>
            <div className="inputContainerLogin">
              <label htmlFor="email" className="capitalize">
                email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="userInput"
              />
            </div>
            <div className="inputContainerLogin">
              <label htmlFor="password" className=" capitalize">
                password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="userInput"
              />
            </div>
            <div className="inputContainerLogin others">
              <div className="rememeberContainer">
                <input
                  type="checkbox"
                  className="rememberInput"
                  name="rememeberMe"
                  id="rememember"
                />
                <label htmlFor="rememember">Rememember me</label>
              </div>
              <Link to={"/"} className="capitalize">
                forgotten password
              </Link>
            </div>
            <div className="inputContainerLogin">
              <input
                type="submit"
                id="submit"
                className="submit"
                name="submit"
                value={"Log in"}
              />
            </div>
          </form>
          <div className="noAccount">
            Don't have an account?{" "}
            <Link to={"/register"} className="capitalize">
              sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
