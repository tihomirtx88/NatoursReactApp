import { useEffect, useRef } from "react";
import ImageTourCard from "./ImageTourCard";
import LeadGuidesCard from "./LeadGuidesCard";
import ReviewCard from "./ReviewCard";
import { useTour } from "./useTour";
import { formatDate } from "../../utils/helper";

import mapboxgl from "mapbox-gl"; // Import the Mapbox GL library

// Mapbox access token
mapboxgl.accessToken =
  "pk.eyJ1IjoidGlob21pcnR4ODgiLCJhIjoiY2x6Zm56aHM2MG9scTJxczhncmdmYTdsdCJ9.j58GCkLB_4iTCvBIKINBeA";

// Default coordinates
const defaultCoordinates = [27.910543, 43.204666];

const TourDetails = () => {
  const { tour, error } = useTour();
  const mapContainerRef = useRef(null);

  console.log(tour);
  

  useEffect(() => {
    if (!tour || !tour.data || error) {
      return;
    }

    if (!mapContainerRef.current) {
      console.error("Map container ref is not available");
      return;
    }

    // Initialize map
    const map = new mapboxgl.Map({
      container: mapContainerRef.current, // Reference to the map container
      style: "mapbox://styles/tihomirtx88/clzfox4p200dc01prb4f10xij", // Style URL
      scrollZoom: false,
    });

    // Create a bounds object
    const bounds = new mapboxgl.LngLatBounds();

    // Access the tour data
    const { startLocation } = tour.data.data;

    // Ensure startLocation is an array with valid coordinate objects
    const locations = startLocation?.coordinates?.length ? [startLocation] : [];

    if (locations.length === 0) {
      console.warn("No valid locations found. Using default coordinates.");
      const el = document.createElement("div");
      el.className = "marker";
      new mapboxgl.Marker({ element: el, anchor: "bottom" })
        .setLngLat(defaultCoordinates)
        .addTo(map);
      bounds.extend(defaultCoordinates);
    } else {
      locations.forEach((loc) => {
        let coordinates = loc.coordinates;

        // Validate coordinates: check if it's an array of two numbers
        if (
          !coordinates ||
          !Array.isArray(coordinates) ||
          coordinates.length !== 2 ||
          typeof coordinates[0] !== "number" ||
          typeof coordinates[1] !== "number"
        ) {
          console.warn(
            "Invalid or missing coordinates. Using default coordinates:",
            loc
          );
          coordinates = defaultCoordinates; // Default coordinates
        } else {
          console.log("Location coordinates:", coordinates);
        }

        // Create marker element
        const el = document.createElement("div");
        el.className = "marker";

        // Add marker to map
        new mapboxgl.Marker({ element: el, anchor: "bottom" })
          .setLngLat(coordinates)
          .addTo(map);

        // Add popup
        new mapboxgl.Popup({ offset: 30 })
          .setLngLat(coordinates)
          .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
          .addTo(map);

        // Extend bounds
        bounds.extend(coordinates);
      });
    }

    // Fit map to bounds
    map.fitBounds(bounds, {
      padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100,
      },
      maxZoom: 12,
    });

    // Cleanup function to remove the map instance
    return () => {
      map.remove();
    };
  }, [tour, error]); // Re-run the effect whenever tour or error changes

  if (!tour || !tour.data) return <div>Loading...</div>;

  if (error) return <div>Error loading tour details: {error.message}</div>;

  // Access the tour data
  const {
    imageCover,
    images,
    reviews,
    startDates,
    description,
    name,
    duration,
    difficulty,
    startLocation,
    maxGroupSize,
    ratingsAverage,
    guides,
  } = tour.data.data;

  const splitDescription = description.split("\n");
  
  return (
    <>
      <section className="section-header">
        <div className="header__hero">
          <div className="header__hero-overlay"></div>
          <img
            src={`http://localhost:3000/img/tours/${imageCover}`}
            alt={`${name}`}
              crossOrigin="anonymous"
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
              <span className="heading-box__text">
                {startLocation.description}
              </span>
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
                <span className="overview-box__text">
                  {formatDate(startDates[0])}
                </span>
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
                <span className="overview-box__text">
                  {maxGroupSize} people
                </span>
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
                <LeadGuidesCard key={guide._id} guide={guide} />
              ))}
            </div>
          </div>
        </div>
        <div className="description-box">
          <h2 className="heading-secondary ma-bt-lg">{name}</h2>
          {splitDescription.map((desc) => (
            <p className="description__text" key={desc}>
              {desc}
            </p>
          ))}
        </div>
      </section>
      <section className="section-pictures">
        {images.map((img, index) => (
          <ImageTourCard key={index} img={img} index={index} />
        ))}
      </section>

      <section className="section-map">
        <div id="map" ref={mapContainerRef} />
      </section>

      <section className="section-reviews">
        <div className="reviews">
          {reviews.map((singleReview) => (
            <ReviewCard singleReview={singleReview} key={singleReview._id} />
          ))}
        </div>
      </section>

      <section className="section-cta">
        <div className="cta">
          <div className="cta__img cta__img--logo">
            <img src="/img/logo-white.png" alt="Natours logo" />
          </div>
          <img
            src={`/img/tours/${images[1]}`}
            alt="Tour Picture"
            className="cta__img cta__img--1"
          />
          <img
            src={`/img/tours/${images[2]}`}
            alt="Tour Picture"
            className="cta__img cta__img--2"
          />
          <div className="cta__content">
            <h2 className="heading-secondary">What are you waiting for?</h2>
            <p className="cta__text">
              {`${duration} days. 1 adventure. Infinite memories. Make it yours today!`}
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
