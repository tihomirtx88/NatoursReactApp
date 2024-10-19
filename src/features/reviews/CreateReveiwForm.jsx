export default function CreateReveiwForm(){
    return (
        <section className="reviews-form">
          <div className="row">
            <div className="reviews">
              <div className="reviews__form">
                <form 
                //   onSubmit={handleSubmit(onSubmit)} 
                  className="form">
                  <div className="u-margin-bottom-medium title-review-form">
                    <h2 className="heading-secondary">Submit a Review</h2>
                  </div>
    
                  {/* Review Text */}
                  <div className="form__group">
                    <textarea
                      className="form__input"
                      placeholder="Write your review"
                    //   {...register("review", { required: "Review text is required" })}
                    />
                    <label className="form__label">Review</label>
                    {/* {errors.review && <p className="form__error">{errors.review.message}</p>} */}
                  </div>
    
                  {/* Rating */}
                  <div className="form__group">
                    <select
                      className="form__input"
                    //   {...register("rating", { required: "Rating is required" })}
                    >
                      <option value="">Select rating</option>
                      <option value="1">1 - Poor</option>
                      <option value="2">2 - Fair</option>
                      <option value="3">3 - Good</option>
                      <option value="4">4 - Very Good</option>
                      <option value="5">5 - Excellent</option>
                    </select>
                    <label className="form__label">Rating</label>
                    {/* {errors.rating && <p className="form__error">{errors.rating.message}</p>} */}
                  </div>
    
                  {/* Tour Selection */}
                  <div className="form__group">
                    <label htmlFor="tour">Select Tour</label>
                    <select
                    //   {...register("tour", { required: "Tour selection is required" })}
                      className="form__input"
                    //   disabled={isLoadingTours}
                    >
                      <option value="">Select a tour</option>
                      {/* {toursArray.map((tour) => (
                        <option key={tour._id} value={tour._id}>
                          {tour.name}
                        </option>
                      ))} */}
                    </select>
                    {/* {errors.tour && <p className="form__error">{errors.tour.message}</p>} */}
                  </div>
    
                  {/* User Selection */}
                  <div className="form__group">
                    <label htmlFor="user">Select User</label>
                    <select
                    //   {...register("user", { required: "User selection is required" })}
                    //   className="form__input"
                    //   disabled={isLoadingUsers}
                    >
                      <option value="">Select a user</option>
                      {/* {usersArray.map((user) => (
                        <option key={user._id} value={user._id}>
                          {user.name}
                        </option>
                      ))} */}
                    </select>
                    {/* {errors.user && <p className="form__error">{errors.user.message}</p>} */}
                  </div>
    
                  {/* Submit Button */}
                  <div className="form__group--button">
                    <button type="submit" className="btn btn--green" 
                            // disabled={isLoadingCreateReview}
                    >
                      {/* {isLoadingCreateReview ? "Submitting..." : "Submit Review"} */}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
};