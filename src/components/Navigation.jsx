import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


const Navigation = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [isChecked, setIsChecked] = useState(false); // State for the checkbox

  // Generate an array of the last ten years
  const years = Array.from({ length: 10 }, (_, i) => currentYear - i);

  const handleYearChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    setTimeout(() => {
      navigate(`/montly-plan/${year}`);
      setIsChecked(false); // Uncheck the navigation checkbox to close the menu
    }, 0);
  };

  const handleNavigate = () => {
    
    setIsChecked(false);   // Uncheck the navigation checkbox
    setTimeout(() => {
      navigate(`/montly-plan/${selectedYear}`);
    }, 0);
  };

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
        checked={isChecked} // Set the checkbox state
        onChange={() => setIsChecked(!isChecked)} // Toggle checkbox state
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link onClick={handleNavigate} className="navigation__link">
              <span>01</span>Check Monthly Plan Tours
            </Link>
            <select
              value={selectedYear}
              onChange={handleYearChange}
              className="navigation__select"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>02</span>Your benefits
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>03</span>Popular tours
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>04</span>Stories
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>05</span>Book now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
