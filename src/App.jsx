function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="css/icon-font.css" />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="shortcut icon" type="image/png" href="img/favicon.png" />
      <title>Natours | Exciting tours for adventurous people</title>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toogle"
        />
        <label htmlFor="navi-toogle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="#" className="navigation__link">
                <span>01</span>About natours
              </a>
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
      <header className="header">
        <div className="header__logo-box">
          <img src="img/logo-white.png" alt="Logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">
              Is where life is happens
            </span>
          </h1>
          <a href="#" className="btn btn--white btn--animated">
            Discover your tours
          </a>
        </div>
      </header>
      <main>
        <section className="section-about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Exitung tours for adventurous people
            </h2>
          </div>
          <div className="row">
            <div className="col-1-of-2">
              <h3 className="heading-tertirary u-margin-bottom-small">
                You are going to fall in love with nature
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                eos reprehenderit soluta, minima maxime velit cumque quas
                temporibus. Nobis quo, quod voluptas unde iste rerum autem
                deserunt nisi impedit accusantium.
              </p>
              <h3 className="heading-tertirary u-margin-bottom-small">
                Live adnventures like you never have before
              </h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                eos reprehenderit soluta, minima maxime velit cumque quas
                temporibus. Nobis quo, quod voluptas unde iste rerum autem
                deserunt nisi impedit accusantium.
              </p>
              <a href="#" className="btn-text">
                Learn more →
              </a>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  src="img/nat-1-large.jpg"
                  alt="Photo 1"
                  className="composition__photo composition__photo--p1"
                />
                <img
                  src="img/nat-2-large.jpg"
                  alt="Photo 2"
                  className="composition__photo composition__photo--p2"
                />
                <img
                  src="img/nat-3-large.jpg"
                  alt="Photo 3"
                  className="composition__photo composition__photo--p3"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section-features">
          <div className="row">
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-world" />
                <h1 className="heading-tertirary -margin-bottom-small">
                  Explore the world
                </h1>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  eos reprehenderit soluta
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-compass" />
                <h1 className="heading-tertirary -margin-bottom-small">
                  Meet nature
                </h1>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  eos reprehenderit soluta
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-map" />
                <h1 className="heading-tertirary -margin-bottom-small">
                  Find your way
                </h1>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  eos reprehenderit soluta
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="feature-box__icon icon-basic-heart" />
                <h1 className="heading-tertirary -margin-bottom-small">
                  Live a healter live
                </h1>
                <p className="feature-box__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  eos reprehenderit soluta
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section-tours" id="section-tours">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Most popular tours</h2>
          </div>
          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--1">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">
                      The Sea Explorer
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>3 days tour</li>
                      <li>Up to 30 people</li>
                      <li>2 tours guides</li>
                      <li>Sleep in cozy hotels</li>
                      <li>Dificulty: Easy</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$297</p>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--2">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">
                      The Forest Hicker
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>3 days tour</li>
                      <li>Up to 40 people</li>
                      <li>6 tours guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Dificulty: Medium</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$297</p>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card__picture--3">&nbsp;</div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">
                      The Snow Adventurer
                    </span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>5 days tour</li>
                      <li>Up to 15 people</li>
                      <li>3 tours guides</li>
                      <li>Sleep in provided tents</li>
                      <li>Dificulty: Hard</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">$876</p>
                    </div>
                    <a href="#popup" className="btn btn--white">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn btn--green">
              Discover All Tours
            </a>
          </div>
        </section>
        <section className="section-stories">
          <div className="bg-video">
            <video className="bg-video__content" autoPlay="" loop="" muted="">
              <source src="img/video.mp4" type="video/mp4" />
              <source src="img/video.webm" type="video/webm" />
            </video>
          </div>
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              We make people genuinely happy
            </h2>
          </div>
          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="./img/nat-8.jpg"
                  alt="Person on a tour"
                  className="story__img"
                />
                <figcaption className="story__caption">Mary Smith</figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertirary u-margin-bottom-small">
                  I had the best week ever with my family
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  eos reprehenderit soluta
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="story">
              <figure className="story__shape">
                <img
                  src="./img/nat-9.jpg"
                  alt="Person on a tour"
                  className="story__img"
                />
                <figcaption className="story__caption">
                  Andreas Smith
                </figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertirary u-margin-bottom-small">
                  WOW! My life is absoliutly diferent now
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  eos reprehenderit soluta
                </p>
              </div>
            </div>
          </div>
          <div className="u-center-text u-margin-top-huge">
            <a href="#" className="btn btn-text">
              Read All Stories
            </a>
          </div>
        </section>
        <section className="section-book">
          <div className="row">
            <div className="book">
              <div className="book__form">
                <form action="#" className="form">
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">Start Booking Now</h2>
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      className="form__input"
                      placeholder="Full Name"
                      required=""
                      id="name"
                    />
                    <label htmlFor="name" className="form__label">
                      Full name
                    </label>
                  </div>
                  <div className="form__group">
                    <input
                      type="email"
                      className="form__input"
                      placeholder="Email Address"
                      required=""
                      id="email"
                    />
                    <label htmlFor="email" className="form__label">
                      Email address
                    </label>
                  </div>
                  <div className="form__group u-margin-bottom-medium">
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="small"
                        name="size"
                      />
                      <label htmlFor="small" className="form__radio-label">
                        Small tour group
                        <span className="form__radio-button" />
                      </label>
                    </div>
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        className="form__radio-input"
                        id="large"
                        name="size"
                      />
                      <label htmlFor="large" className="form__radio-label">
                        Large tour group
                        <span className="form__radio-button" />
                      </label>
                    </div>
                  </div>
                  <div className="form__group--button">
                    <button className="btn btn--green">Next step →</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__logo-box">
          <img
            src="./img/logo-green-2x.png"
            alt="Full logo"
            className="footer__logo"
          />
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Company
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Contact us
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Carrers
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li className="footer__item">
                  <a href="#" className="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Build my{" "}
              <a href="#" className="footer__link">
                Portfolio
              </a>{" "}
              Copyright © by Tihomir Zhelyazkov
            </p>
          </div>
        </div>
      </footer>
      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__left">
            <img
              src="./img/nat-8.jpg"
              alt="Tour photo"
              className="popup__img"
            />
            <img
              src="./img/nat-9.jpg"
              alt="Tour photo"
              className="popup__img"
            />
          </div>
          <div className="popup__right">
            {/* For can be section-tours target affter close  */}
            <a href="#section-tours" className="popup__close">
              ×
            </a>
            <h2 className="heading-secondary u-margin-bottom-medium">
              start booking now
            </h2>
            <h3 className="heading-tertirary u-margin-bottom-small">
              Importnant – Please read these terms before booking
            </h3>
            <p className="popup__text">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
              The Extremes of Good and Evil by Cicero, written in 45 BC. This
              book is a treatise on the theory of ethics, very popular during
              the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor
              sit amet.., comes from a line in section 1.10.32. The standard
              chunk of Lorem Ipsum used since the 1500s is reproduced below for
              those interested. Sections 1.10.32 and 1.10.33 from de Finibus
              Bonorum et Malorum by Cicero are also reproduced in their exact
              original form, accompanied by En
            </p>
            <a href="#" className="btn btn-green" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
