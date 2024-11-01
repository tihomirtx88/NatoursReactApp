/* eslint-disable react/prop-types */

const ReviewCard = ({singleReview}) => {
 
  
  const {
    review = "No review provided",
    user = null, 
    raitng = 0
  } = singleReview || {};

  console.log(raitng, 'from review card');
  const { name = "Anonymous", photo = "default.png" } = user ?? {};
  return (
    <div className="reviews__card">
      <div className="reviews__avatar">
        <img
          src={`/img/users/${photo}`}
          alt={name}
          className="reviews__avatar-img"
        />
        <h6 className="reviews__user">{name}</h6>
      </div>
      <p className="reviews__text">
        {review}
      </p>
      <div className="reviews__rating">
        {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className={`reviews__star reviews__star--${raitng >= star ? 'active' : 'inactive'}`}>
              <use href="/img/icons.svg#icon-star" />
            </svg>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
