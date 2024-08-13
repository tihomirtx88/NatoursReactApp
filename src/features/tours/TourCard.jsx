/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import { formatDate } from "../../utils/helper";
import { HiArrowDownOnSquare } from "react-icons/hi2";

const TourCard = ({ tour }) => {
  const navigate = useNavigate();

  const { id, imageCover, name, duration, description, startLocation, locations, maxGroupSize, ratingsAverage, price } = tour;

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay"></div>
          <img
            src={`img/tours/${imageCover}`}
            alt={tour.name}
            className="card__picture-img"
          />
        </div>
        <h3 className="heading-tertirary-second">
          <span>{name}</span>
        </h3>
      </div>
      <div className="card__details">
        <h4 className="card__sub-heading">Easy {duration} tour</h4>
        <p className="card__text">{description}</p>
        <div className="card__data">
          <svg className="card__icon">
            <use href="img/icons.svg#icon-map-pin" />
          </svg>
          <span>{startLocation.description}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use href="img/icons.svg#icon-calendar" />
          </svg>
          <span>
            {tour.startDates.map((date, index) => (
              <p key={index}>{formatDate(date)}</p>
            ))}
          </span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use href="img/icons.svg#icon-flag" />
          </svg>
          <span>{locations.length} stops</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use href="img/icons.svg#icon-user" />
          </svg>
          <span>{maxGroupSize} people</span>
        </div>
      </div>
      <div className="card__footer">
        <p>
          <span className="card__footer-value">\${price}</span>
          <span className="card__footer-text">per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">{ratingsAverage}</span>
          <span className="card__footer-text">
            rating ({tour.ratingsQuantity})
          </span>
        </p>
        <a
          className="btn btn--green btn--small"
          icon={<HiArrowDownOnSquare />}
          onClick={() => navigate(`/dashboard/${id}`)}
        >
          Details
        </a>
      </div>
    </div>
  );
};

export default TourCard;
