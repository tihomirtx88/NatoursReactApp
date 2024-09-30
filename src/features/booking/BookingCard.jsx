/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { HiArrowDownOnSquare } from "react-icons/hi2";

export default function BookingCard({booking}){
    const { _id, tour, user, price, groupSize, paid, createdAt } = booking;

    return (
        <div className="card">
          <div className="card__header">
            <div className="card__picture">
              <div className="card__picture-overlay"></div>
              <img
                src={`http://localhost:3000/img/tours/${tour?.imageCover}`}
                alt={tour.name}
                crossOrigin="anonymous"
                className="card__picture-img"
              />
            </div>
            <h3 className="heading-tertirary-second">
              <span>{tour.name}</span>
            </h3>
          </div>
          <div className="card__details">
            <h4 className="card__sub-heading">Tour with {groupSize} group size</h4>
            <p className="card__text">
              <strong>User: </strong> {user.name} ({user.email})
            </p>
            <p className="card__text">
              <strong>Booking Date: </strong> {new Date(createdAt).toLocaleDateString()}
            </p>
            <div className="card__data">
              <svg className="card__icon">
                <use href="img/icons.svg#icon-map-pin" />
              </svg>
              <span>{tour?.startLocation?.description}</span>
            </div>
            <div className="card__data">
              <svg className="card__icon">
                <use href="img/icons.svg#icon-user" />
              </svg>
              <span>{tour?.maxGroupSize} people</span>
            </div>
            <div className="card__data">
              <svg className="card__icon">
                <use href="img/icons.svg#icon-dollar-sign" />
              </svg>
              <span>${price} per person</span>
            </div>
            <div className="card__data">
              <svg className="card__icon">
                <use href="img/icons.svg#icon-credit-card" />
              </svg>
              <span>{paid ? "Paid" : "Not Paid"}</span>
            </div>
          </div>
          <div className="card__footer">
            <p>
              <span className="card__footer-value">${price}</span>
              <span className="card__footer-text"> per person</span>
            </p>
            <Link
              to={`/bookings/${_id}`}
              className="btn btn--green btn--small"
              icon={<HiArrowDownOnSquare />}
            >
              Details
            </Link>
          </div>
        </div>
      );
};