import { useState } from "react";
import { useSignIn } from "./useSignIn";
import { Link } from "react-router-dom";
import SpinnerMini from "../../components/SpinnerMini";
import { useAuth } from "../../context/AuthContext";
import ForgotPasswordForm from "./ForgotPasswordForm";


const Login = () => {
  const [ email, setEmail ] = useState("baraban@abv.bg");
  const [ password, setPassword ] = useState("12345678");
  const [showForgotPassword, setShowForgotPassword] = useState(false); 

  const { loginData ,isLoadingLogin } = useSignIn();
  const { login } = useAuth();


  function handleSubmit(e) {
    e.preventDefault();


    if (!email || !password) return;

    loginData(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          login(email, password);
          setPassword("");
        },
      }
    );
  }

  return (
    <div className="login-form">
      <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
      {!showForgotPassword ? (
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Email address
            </label>
            <input
              id="email"
              type="email"
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
              {!isLoadingLogin ? "Log in" : <SpinnerMini />}
            </button>
          </div>

          <div className="form__group forgot-password-wrapper">
            <button
              type="button"
              className="form__group__navigation--link forgot-password-wrapper-link"
              onClick={() => setShowForgotPassword(true)} // Show forgot password form
            >
              Forgot Password?
            </button>
          </div>

          <div className="">
            <Link className="form__group__navigation--link " to="/register">
              If you dont have an account yet
            </Link>
          </div>
        </form>
      ) : (
        <ForgotPasswordForm onCancel={() => setShowForgotPassword(false)} />
      )}
    </div>
  );
};

export default Login;
