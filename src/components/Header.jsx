import { Link } from "react-router-dom";

const Header = () => {


  return (
    <header className="header">
      <div className="header__logo-box">
        <img src="/img/logo-white.png" alt="Logo" className="header__logo" />
        <div className="header__container">
          <Link
            to={"/login"}
            className="header__container--login btn btn--white btn--animated"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="header__container--register btn btn--white btn--animated"
          >
            Register
          </Link>
        </div>
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">Is where life happens</span>
        </h1>
        <Link to="/tours" className="btn btn--white btn--animated">
          Discover all tours
        </Link>
       
      </div>
    </header>
  );
};

export default Header;
