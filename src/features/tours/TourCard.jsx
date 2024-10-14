/* eslint-disable react/prop-types */
import { formatDate } from "../../utils/helper";
import { HiArrowDownOnSquare } from "react-icons/hi2";
import { MdOutlineSecurityUpdate } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { useDeleteTour } from "./useDeleteTour";
import { useUpdateTour } from "./useUpdateTour";

const TourCard = ({ tour }) => {
  const {
    id,
    imageCover,
    name,
    duration,
    description,
    startLocation,
    locations,
    maxGroupSize,
    ratingsAverage,
    price,
  } = tour;
  const { deleteTour, isDeleting } = useDeleteTour();
  const { isTourUpdating } = useUpdateTour();

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the tour "${name}"?`
    );
    if (confirmDelete) {
      deleteTour(id);
    }
  };

  return (
    <div className="card">
      <div className="card__header">
        <div className="card__picture">
          <div className="card__picture-overlay"></div>
          <img
            src={`http://localhost:3000/img/tours/${imageCover}`}
            alt={tour.name}
            crossOrigin="anonymous"
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
          <span>{startLocation?.description}</span>
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
          <span>{locations?.length} stops</span>
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
        <Link
          to={`/tours/${id}`}
          className="btn btn--green btn--small"
          icon={<HiArrowDownOnSquare />}
        >
          Details
        </Link>
        <button
          className="btn btn--red btn--small"
          onClick={handleDelete}
          disabled={isDeleting}
        >
          {isDeleting ? "Deleting..." : "Delete Tour"}
          <MdDeleteForever />
        </button>
        <Link
          className="btn btn--orange btn--small"
          to={`/updateTour/${id}`}
          disabled={isTourUpdating}
        >
          {isTourUpdating ? "Updating..." : "Updating Tour"}
          <MdOutlineSecurityUpdate />
        </Link>
      </div>
    </div>
  );
};

export default TourCard;
