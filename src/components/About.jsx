const About = () => {
  return (
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eos
            reprehenderit soluta, minima maxime velit cumque quas temporibus.
            Nobis quo, quod voluptas unde iste rerum autem deserunt nisi impedit
            accusantium.
          </p>
          <h3 className="heading-tertirary u-margin-bottom-small">
            Live adnventures like you never have before
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eos
            reprehenderit soluta, minima maxime velit cumque quas temporibus.
            Nobis quo, quod voluptas unde iste rerum autem deserunt nisi impedit
            accusantium.
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
  );
};

export default About;
