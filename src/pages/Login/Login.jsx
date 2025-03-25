import "./style.css";
import { loginHero } from "../../assets";
import Heroimage from "./heroComponent";
import { Link } from "react-router-dom";
import supabase from "../../lib/supabase";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    event.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      console.log("Login successful");
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <Heroimage hero={loginHero} />
      <div className="detail">
        <div className="detailSubContainer">
          <form onSubmit={handleSubmit}>
            <h2>Login to SPE Society</h2>
            <p> We&apos;re glad to see you again! Please log in to continue.</p>
            <div className="inputContainerLogin">
              <label htmlFor="email" className="capitalize">
                email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                disabled={loading}
                className={`userInput ${loading ? "loading" : ""}`}
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
                disabled={loading}
                className={`userInput ${loading ? "loading" : ""}`}
              />
            </div>
            <div className="inputContainerLogin others">
              <div className="rememeberContainer">
                <input
                  type="checkbox"
                  className={`rememberInput ${loading ? "loading" : ""}`}
                  name="rememeberMe"
                  disabled={loading}
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
                disabled={loading}
                className={`submit ${loading ? "loading" : ""}`}
                name="submit"
                value={"Log in"}
              />
            </div>
            {error && <p>{error}</p>}
          </form>
          <div className="noAccount">
            Don&apos;t have an account?{" "}
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
