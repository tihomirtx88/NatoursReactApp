import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, token, logout, isLogoutLoading } = useAuth();

  return (
    <header className="header">
      <div className="header__logo-box">
        <Link to="/dashboard"><img src="/img/logo-white.png" alt="Logo" className="header__logo" /></Link>
        <div className="header__container">
           {token ? (  
           <>
            <button
              onClick={logout}
              className="header__container--logout btn btn--white btn--animated"
              disabled={isLogoutLoading}
            >
              {isLogoutLoading ? "Logging out..." : "Logout"}

            </button>
               <Link to="/profile" className="header__container--avatar-name">{user.name}</Link>
               <img
               crossOrigin="anonymous"
                src={`http://localhost:3000/img/users/${user.photo}`}
                alt="User photo"
                className="form__user-photo"
              />
           </>
          ) : ( 
            <>
              <Link
                to="/login"
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
            </>
          )}
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
