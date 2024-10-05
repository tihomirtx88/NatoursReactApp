/* eslint-disable react/prop-types */
import { formatDate } from "../../utils/helper";
import { useBooking } from "./useBooking";

export default function BookingDetails() {
  const { booking } = useBooking();
  console.log(booking, "from booking");

  const readingData = booking?.data?.data || {};
  const { createdAt, fullName, groupSize, paid } = readingData;

  const { duration, name, price, startLocation, startDates, imageCover } =
    readingData?.tour || {};

  return (
    <>
      <section className="section-header">
        <div className="header__hero">
          <div className="header__hero-overlay"></div>
          <img
            src={`http://localhost:3000/img/tours/${imageCover}`}
            alt={name}
            crossOrigin="anonymous"
            className="header__hero-img"
          />
        </div>
        <div className="heading-box">
          <h1 className="heading-tertirary-second">
            <span>{`${fullName} Booking`}</span>
          </h1>
          <div className="heading-box__group">
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use href="/img/icons.svg#icon-calendar" />
              </svg>
              <span className="heading-box__text">
                Created date
                <br />
                {formatDate(createdAt)}
              </span>
            </div>
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use href="/img/icons.svg#icon-user" />
              </svg>
              <span className="heading-box__text">{groupSize} groupsize</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-description">
        <div className="overview-box">
          <div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Booking Summary</h2>
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  <use href="/img/icons.svg#icon-tag" />
                </svg>
                <span className="overview-box__label">Price</span>
                <span className="overview-box__text">${price}</span>
              </div>
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  <use href="/img/icons.svg#icon-check-circle" />
                </svg>
                <span className="overview-box__label">Payment Status</span>
                <span className="overview-box__text">
                  {paid ? "Paid" : "Pending"}
                </span>
              </div>
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  <use href="/img/icons.svg#icon-check-circle" />
                </svg>
                <span className="overview-box__label">Start location</span>
                <span className="overview-box__text">
                  {startLocation?.description}
                </span>
              </div>
            </div>

            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Traveler Details</h2>
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  <use href="/img/icons.svg#icon-user" />
                </svg>
                <span className="overview-box__label">Name</span>
                <span className="overview-box__text">
                  {booking?.data?.data?.user?.name}
                </span>
              </div>
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  <use href="/img/icons.svg#icon-mail" />
                </svg>
                <span className="overview-box__label">Email</span>
                <span className="overview-box__text">
                  {booking?.data?.data?.user?.email}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="description-box">
          <h2 className="heading-secondary ma-bt-lg">{name}</h2>
          <p className="description__text">
            {`This booking includes ${groupSize} group for the ${name} tour. Your adventure starts on:`}
            <br />
            {startDates && startDates.length > 0 ? (
              startDates.map((date, index) => (
                <span key={index} className="heading-box__text">
                  {formatDate(date)}
                  {index < startDates.length - 1 && " • "}{" "}
                  {/* Add bullet point between dates, but not after the last one */}
                </span>
              ))
            ) : (
              <span>No dates available</span>
            )}
          </p>
        </div>
      </section>

      <section className="section-cta">
        <div className="cta">
          <div className="cta__img cta__img--logo">
            <img src="/img/logo-white.png" alt="Natours logo" />
          </div>
          <div className="cta__content">
            <h2 className="heading-secondary">Prepare for your adventure!</h2>
            <p className="cta__text">
              {`${duration} days. 1 adventure. Infinite memories. Get ready!`}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
