import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);

  // Generate an array of the last ten years
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleNavigate = () => {
    navigate(`/montly-plan/${selectedYear}`);
  };

  return (
    <header className="header">
      <div className="header__logo-box">
        <img src="/img/logo-white.png" alt="Logo" className="header__logo" />
        <div className="header__container">
          <a
            href="#"
            className="header__container--login btn btn--white btn--animated"
          >
            Login
          </a>
          <a
            href="#"
            className="header__container--register btn btn--white btn--animated"
          >
            Register
          </a>
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
        <div className="header__dropdown">
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="btn btn--white btn--animated"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <button
            onClick={handleNavigate}
            className="btn btn--white btn--animated"
          >
            Check Monthly Plan Tours
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
