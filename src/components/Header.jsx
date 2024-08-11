const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src="img/logo-white.png" alt="Logo" className="header__logo" />
        <div className="header__container">
          <a href="#" className="header__container--login">Login</a>
          <a href="#" className="header__container--register">Register</a>

      </div>
      </div>
    
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">Is where life is happens</span>
        </h1>
        <a href="#" className="btn btn--white btn--animated">
          Discover all tours
        </a>
      </div>
    </header>
  );
};

export default Header;
