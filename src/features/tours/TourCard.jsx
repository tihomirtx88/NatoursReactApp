import {formatDate} from '../../utils/helper';

const TourCard = ({tour}) => {
  console.log(tour, 'from tour');
  
  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay"></div>
          <img
            src={`img/tours/${tour.imageCover}`}
            alt={tour.name}
            className="card__picture-img"
          />
        </div>
        <h3 className="heading-tertirary-second">
          <span>{tour.name}</span>
        </h3>
      </div>
      <div className="card__details">
        <h4 className="card__sub-heading">Easy {tour.duration} tour</h4>
        <p className="card__text">
          {tour.description}
        </p>
        <div className="card__data">
          <svg className="card__icon">
            <use href="img/icons.svg#icon-map-pin" />
          </svg>
          <span>{tour.startLocation.description}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use href="img/icons.svg#icon-calendar" />
          </svg>
          <span>{tour.startDates.map((date, index) => (
            <p key={index}>{formatDate(date)}</p>
          ))}</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use href="img/icons.svg#icon-flag" />
          </svg>
          <span>{tour.locations.length} stops</span>
        </div>
        <div className="card__data">
          <svg className="card__icon">
            <use href="img/icons.svg#icon-user" />
          </svg>
          <span>{tour.maxGroupSize} people</span>
        </div>
      </div>
      <div className="card__footer">
        <p>
          <span className="card__footer-value">\${tour.price}</span>
          <span className="card__footer-text">per person</span>
        </p>
        <p className="card__ratings">
          <span className="card__footer-value">{tour.ratingsAverage}</span>
          <span className="card__footer-text">rating ({tour.ratingsQuantity})</span>
        </p>
        <a href="#" className="btn btn--green btn--small">
          Details
        </a>
      </div>
    </div>
  );
};

export default TourCard;
