/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Popup = () => {
  return (
    <div className="popup" id="popup">
    <div className="popup__content">
      <div className="popup__left">
        <img src="./img/nat-8.jpg" alt="Tour photo" className="popup__img" />
        <img src="./img/nat-9.jpg" alt="Tour photo" className="popup__img" />
      </div>
      <div className="popup__right">
        <button className="popup__close" >
          ×
        </button>
        <h2 className="heading-secondary u-margin-bottom-medium">
          Start booking now
        </h2>
        <h3 className="heading-tertirary u-margin-bottom-small">
          Important – Please read these terms before booking
        </h3>
        <p className="popup__text">
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          It has roots in a piece of classical Latin literature from 45 BC,
          making it over 2000 years old. Richard McClintock, a Latin professor
          at Hampden-Sydney College in Virginia, looked up one of the more
          obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of
          Good and Evil by Cicero, written in 45 BC. This book is a treatise
          on the theory of ethics, very popular during the Renaissance. The
          first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from
          a line in section 1.10.32. The standard chunk of Lorem Ipsum used
          since the 1500s is reproduced below for those interested. Sections
          1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are
          also reproduced in their exact original form, accompanied by En
        </p>
        {/* Use a Link or button for navigation */}
        <Link to="#" className="btn btn-green">
          Book now
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Popup;
