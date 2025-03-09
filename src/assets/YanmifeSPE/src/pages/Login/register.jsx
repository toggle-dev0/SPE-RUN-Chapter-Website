import { registerHero } from "../../assets";
import { Link } from "react-router-dom";
import Heroimage from "./heroComponent";
import "./style.css";

const Register = () => {
  return (
    <div className="main">
      <div className="detail">
        <div className="detailSubContainer">
          <form action="">
            <h2 className="capitalize">member registration</h2>
            <p>
              Join a dynamic community of professionals dedicated to advancing
              energy solutions and industry innovation
            </p>
            <div className="inputContainerLogin">
              <div className="flex gap-10">
                <div className="flex-1">
                  <label htmlFor="firstName" className="capitalize">
                    first name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="userInput"
                    id="firstName"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="capitalize">
                    last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="userInput"
                    id="lastName"
                  />
                </div>
              </div>
            </div>
            <div className="inputContainerLogin">
              <div className="flex gap-10">
                <div className="flex-1">
                  <label htmlFor="email" className="capitalize">
                    email
                  </label>
                  <input
                    type="email"
                    className="userInput"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="speID" className="upperCase">
                    spe id
                  </label>
                  <input
                    type="text"
                    name="speID"
                    className="userInput"
                    id="speID"
                  />
                </div>
              </div>
            </div>
            <div className="inputContainerLogin">
              <label htmlFor="password" className="capitalize">
                password
              </label>
              <input
                type="password"
                className="userInput"
                name="password"
                id="password"
              />
            </div>
            <div className="inputContainerLogin others">
              <div className="rememeberContainer">
                <input
                  type="checkbox"
                  className="rememberInput"
                  name="termAgreement"
                  id="termAgreement"
                />
                <label htmlFor="termAgreement" className="capitalize">
                  i agree to the term and condition
                </label>
              </div>
            </div>
            <div className="inputContainerLogin">
              <input
                type="submit"
                className="submit capitalize"
                name="submit"
                value={"register"}
              />
            </div>
          </form>
          <div className="noAccount">
            Already have an account?{" "}
            <Link to={"/login"} className="capitalize">
              login
            </Link>
          </div>
        </div>
      </div>
      <Heroimage hero={registerHero} />
    </div>
  );
};

export default Register;
