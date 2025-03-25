import { registerHero } from "../../assets";
import { Link } from "react-router-dom";
import Heroimage from "./heroComponent";
import "./style.css";
import supabase from "../../lib/supabase";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const speID = e.target.speID.value;

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}`,
        data: {
          full_name: firstName + " " + lastName,
          display_name: firstName + " " + lastName,
          speID,
        },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      console.log("Registration successful");
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <div className="detail">
        <div className="detailSubContainer">
          <form onSubmit={handleSubmit}>
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
                    className={`userInput ${loading ? "loading" : ""}`}
                    id="firstName"
                    disabled={loading}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="lastName" className="capitalize">
                    last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className={`userInput ${loading ? "loading" : ""}`}
                    id="lastName"
                    disabled={loading}
                    required
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
                    required
                    className={`userInput ${loading ? "loading" : ""}`}
                    name="email"
                    id="email"
                    disabled={loading}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="speID" className="upperCase">
                    spe id
                  </label>
                  <input
                    type="text"
                    name="speID"
                    required
                    className={`userInput ${loading ? "loading" : ""}`}
                    id="speID"
                    disabled={loading}
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
                required
                className={`userInput ${loading ? "loading" : ""}`}
                name="password"
                id="password"
                disabled={loading}
              />
            </div>
            <div className="inputContainerLogin others">
              <div className="rememeberContainer">
                <input
                  type="checkbox"
                  required
                  className={`rememberInput ${loading ? "loading" : ""}`}
                  name="termAgreement"
                  id="termAgreement"
                  disabled={loading}
                />
                <label htmlFor="termAgreement" className="capitalize">
                  i agree to the term and condition
                </label>
              </div>
            </div>
            <div className="inputContainerLogin">
              <input
                type="submit"
                className={`submit capitalize ${loading ? "loading" : ""}`}
                name="submit"
                value={"register"}
                disabled={loading}
              />
            </div>
            {error && <p>{error}</p>}
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
