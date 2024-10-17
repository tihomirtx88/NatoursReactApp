import { useReviews } from "./useReviews";

const Stories = () => {
  const { reviewsData } = useReviews();
  const reviews = reviewsData?.data?.reviews || [];
  
  
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
        {reviews.length > 0 ? (
          reviews.slice(0, 4).map((review) => (
            <div key={review._id} className="story">
              <figure className="story__shape">
                <img
                crossOrigin="anonymous"
                  src={`http://localhost:3000/img/users/${review.user.photo}`}  // Use the user's photo dynamically
                  alt={`Photo of ${review.user.name}`}
                  className="story__img"
                />
                <figcaption className="story__caption">
                  {review.user.name} 
                </figcaption>
              </figure>
              <div className="story__text">
                <h3 className="heading-tertirary u-margin-bottom-small">
                  {review.review.slice(0, 40)}... 
                </h3>
                <p>{review.review}</p> 
              </div>
            </div>
          ))
        ) : (
          <p>No reviews available at the moment.</p>
        )}
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