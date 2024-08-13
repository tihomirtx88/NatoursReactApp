import LeadGuidesCard from "../features/tours/LeadGuidesCard";
import { useTour } from "../features/tours/useTour";
import { formatDate } from "../utils/helper";

const TourDetails = () => {
    const { tour, error } = useTour();

    // Handle loading state
    if (!tour || !tour.data) return <div>Loading...</div>;
  
    // Handle error state
    if (error) return <div>Error loading tour details: {error.message}</div>;
  
    // Access the tour data
    const { id, imageCover, startDates, description, name, duration, difficulty, startLocation, maxGroupSize, ratingsAverage, guides } = tour.data.data;
    console.log(tour);

    const splitDescription = description.split('\n')
    
    
    
    return (
      <>
        <section className="section-header">
          <div className="header__hero">
            <div className="header__hero-overlay"></div>
            <img
              src={`img/tours/${imageCover}`}
              alt={`${name}`} 
              className="header__hero-img"
            />
          </div>
          <div className="heading-box">
            <h1 className="heading-tertirary-second">
              <span>{`${name} tour`}</span>
            </h1>
            <div className="heading-box__group">
              <div className="heading-box__detail">
                <svg className="heading-box__icon">
                  <use href="/img/icons.svg#icon-clock" />
                </svg>
                <span className="heading-box__text">{duration} days</span>
              </div>
              <div className="heading-box__detail">
                <svg className="heading-box__icon">
                  <use href="/img/icons.svg#icon-map-pin" />
                </svg>
                <span className="heading-box__text">{startLocation.description}</span>
              </div>
            </div>
          </div>
        </section>
        <section className="section-description">
          <div className="overview-box">
            <div>
              <div className="overview-box__group">
                <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    <use href="/img/icons.svg#icon-calendar" />
                  </svg>
                  <span className="overview-box__label">Next date</span>
                  <span className="overview-box__text">{formatDate(startDates[0])}</span>
                </div>
                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    <use href="/img/icons.svg#icon-trending-up" />
                  </svg>
                  <span className="overview-box__label">Difficulty</span>
                  <span className="overview-box__text">{difficulty}</span>
                </div>
                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    <use href="/img/icons.svg#icon-user" />
                  </svg>
                  <span className="overview-box__label">Participants</span>
                  <span className="overview-box__text">{maxGroupSize} people</span>
                </div>
                <div className="overview-box__detail">
                  <svg className="overview-box__icon">
                    <use href="/img/icons.svg#icon-star" />
                  </svg>
                  <span className="overview-box__label">Rating</span>
                  <span className="overview-box__text">{ratingsAverage} / 5</span>
                </div>
              </div>
              <div className="overview-box__group">
                <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
                 {guides.map((guide) => (
                  <LeadGuidesCard key={guide._id} guide={guide}/>
                 ))}
  
              </div>
            </div>
          </div>
          <div className="description-box">
            <h2 className="heading-secondary ma-bt-lg">
              {name}
            </h2>
             {splitDescription.map((desc) => (
               <p className="description__text" key={desc}>{desc}</p>
             ))}
          </div>
        </section>
        <section className="section-pictures">
          <div className="picture-box">
            <img
              src="/img/tour-5-1.jpg"
              alt="The Park Camper Tour 1"
              className="picture-box__img picture-box__img--1"
            />
          </div>
          <div className="picture-box">
            <img
              src="/img/tour-5-2.jpg"
              alt="The Park Camper Tour 1"
              className="picture-box__img picture-box__img--2"
            />
          </div>
          <div className="picture-box">
            <img
              src="/img/tour-5-3.jpg"
              alt="The Park Camper Tour 1"
              className="picture-box__img picture-box__img--3"
            />
          </div>
        </section>
        <section className="section-map">
          <div id="map" />
        </section>
        <section className="section-reviews">
          <div className="reviews">
            <div className="reviews__card">
              <div className="reviews__avatar">
                <img
                  src="/img/users/user-7.jpg"
                  alt="Jim Brown"
                  className="reviews__avatar-img"
                />
                <h6 className="reviews__user">Jim Brown</h6>
              </div>
              <p className="reviews__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                dignissimos sint quo commodi corrupti accusantium veniam saepe
                numquam.
              </p>
              <div className="reviews__rating">
                <svg className="reviews__star reviews__star--active">
                  <use href="/img/icons.svg#icon-star" />
                </svg>
                <svg className="reviews__star reviews__star--active">
                  <use href="/img/icons.svg#icon-star" />
                </svg>
                <svg className="reviews__star reviews__star--active">
                  <use href="/img/icons.svg#icon-star" />
                </svg>
                <svg className="reviews__star reviews__star--active">
                  <use href="/img/icons.svg#icon-star" />
                </svg>
                <svg className="reviews__star reviews__star--active">
                  <use href="/img/icons.svg#icon-star" />
                </svg>
              </div>
            </div>
          </div>
        </section>
        <section className="section-cta">
          <div className="cta">
            <div className="cta__img cta__img--logo">
              <img src="/img/logo-white.png" alt="Natours logo" />
            </div>
            <img
              src="/img/tour-5-2.jpg"
              alt=""
              className="cta__img cta__img--1"
            />
            <img
              src="/img/tour-5-1.jpg"
              alt=""
              className="cta__img cta__img--2"
            />
            <div className="cta__content">
              <h2 className="heading-secondary">What are you waiting for?</h2>
              <p className="cta__text">
                10 days. 1 adventure. Infinite memories. Make it yours today!
              </p>
              <button className="btn btn--green span-all-rows">
                Book tour now!
              </button>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default TourDetails;