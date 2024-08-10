const Stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay="" loop="" muted="">
          <source src="img/video.mp4" type="video/mp4" />
          <source src="img/video.webm" type="video/webm" />
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eos
              reprehenderit soluta
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
            <figcaption className="story__caption">Andreas Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertirary u-margin-bottom-small">
              WOW! My life is absoliutly diferent now
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eos
              reprehenderit soluta
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
  );
};

export default Stories;
