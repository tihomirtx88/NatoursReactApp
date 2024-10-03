/* eslint-disable react/prop-types */

export default function BookingDetails({booking}) {
    // const { tour, user, price, createdAt } = booking;
    // console.log(tour);
    // console.log(user);
    
    
    
  return (
    <>
      <section className="section-header">
        <div className="header__hero">
          <div className="header__hero-overlay"></div>
          <img
            src={`http://localhost:3000/img/tours/${tour.imageCover}`}
            alt={tour.name}
            crossOrigin="anonymous"
            className="header__hero-img"
          />
        </div>
        <div className="heading-box">
          <h1 className="heading-tertirary-second">
            <span>{`${tour.name} Booking`}</span>
          </h1>
          <div className="heading-box__group">
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use href="/img/icons.svg#icon-calendar" />
              </svg>
              <span className="heading-box__text">{formatDate(startDate)}</span>
            </div>
            <div className="heading-box__detail">
              <svg className="heading-box__icon">
                <use href="/img/icons.svg#icon-user" />
              </svg>
              <span className="heading-box__text">
                {participants} participants
              </span>
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
                  <use href="/img/icons.svg#icon-credit-card" />
                </svg>
                <span className="overview-box__label">Booking ID</span>
                <span className="overview-box__text">{bookingId}</span>
              </div>
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
                <span className="overview-box__text">{paymentStatus}</span>
              </div>
            </div>

            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Traveler Details</h2>
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  <use href="/img/icons.svg#icon-user" />
                </svg>
                <span className="overview-box__label">Name</span>
                <span className="overview-box__text">{user.name}</span>
              </div>
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  <use href="/img/icons.svg#icon-mail" />
                </svg>
                <span className="overview-box__label">Email</span>
                <span className="overview-box__text">{user.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="description-box">
          <h2 className="heading-secondary ma-bt-lg">{tour.name}</h2>
          <p className="description__text">
            {`This booking includes ${participants} participants for the ${
              tour.name
            } tour. Your adventure starts on ${formatDate(startDate)}.`}
          </p>
        </div>
      </section>

      <section className="section-pictures">
        {tour.images.map((img, index) => (
          <img
            src={`http://localhost:3000/img/tours/${img}`}
            alt={`Tour Image ${index + 1}`}
            key={index}
            className="picture-box__img"
          />
        ))}
      </section>

      <section className="section-cta">
        <div className="cta">
          <div className="cta__img cta__img--logo">
            <img src="/img/logo-white.png" alt="Natours logo" />
          </div>
          <img
            src={`/img/tours/${tour.images[1]}`}
            alt="Tour Picture"
            className="cta__img cta__img--1"
          />
          <img
            src={`/img/tours/${tour.images[2]}`}
            alt="Tour Picture"
            className="cta__img cta__img--2"
          />
          <div className="cta__content">
            <h2 className="heading-secondary">Prepare for your adventure!</h2>
            <p className="cta__text">
              {`${tour.duration} days. 1 adventure. Infinite memories. Get ready!`}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
