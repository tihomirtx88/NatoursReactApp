const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img
          src="/img/logo-green-2x.png"
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
  );
};

export default Footer;
