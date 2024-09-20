/* eslint-disable react/prop-types */
const ImageTourCard = ({index, img}) => {
  return (
    <div className="picture-box">
      <img
        src={`http://localhost:3000/img/tours/${img}`}
        alt={`${img} ${index + 1}` }
          crossOrigin="anonymous"
        className={`picture-box__img picture-box__img--${index + 1}`}
      />
    </div>
  );
};

export default ImageTourCard;
