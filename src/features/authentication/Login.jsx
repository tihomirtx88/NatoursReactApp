import { useState } from "react";
import { useSignIn } from "./useSignIn";
import { Link } from "react-router-dom";
import SpinnerMini from "../../components/SpinnerMini";

const Login = () => {
  const [ email, setEmail ] = useState("superadmin@abv.bg");
  const [ password, setPassword ] = useState("test1234");

  const { isLoadingLogin, loginData } = useSignIn();

  function handleSubmit(e) {
    e.preventDefault();


    if (!email || !password) return;

    loginData(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <div className="login-form">
      <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Email address
          </label>
          <input
            id="email"
            type="email"
            // This makes this form better for password managers
            autoComplete="username"
            value={email}
            disabled={isLoadingLogin}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
            className="form__input"
          />
        </div>
        <div className="form__group ma-bt-md">
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoadingLogin}
            required={true}
            className="form__input"
          />
        </div>
        <div className="form__group">
          <button className="btn btn--green" disabled={isLoadingLogin}>
            {!isLoadingLogin ? "Log in" : < SpinnerMini/>}
          </button>
        </div>
        <div>
          <Link className="form__group__navigation--link" to="/dashboard"> If you dont have account yet</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
