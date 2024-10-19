import { useForm } from "react-hook-form";
import useCreateReveiw from "./useCreateReveiw";
import { useToursWithoutSorting } from "../tours/useToursWithoutSorting";
// import { useUsers } from "../user/useUsers";
import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useRef, useState } from "react";

export default function CreateReveiwForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { createReview, isloadingCreateReview } = useCreateReveiw();
  const { isLoading, toursData } = useToursWithoutSorting();
//   const { allUsers } = useUsers();
  const [selectedTour, setSelectedTour] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { user } = useAuth();

  const toursArray = toursData?.data?.tours || [];
//   const usersArray = allUsers?.data?.users || [];

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleTourSelect = (tour) => {
    setSelectedTour(tour);
    setDropdownOpen(false); // Close the dropdown after selecting
  };

//   console.log(toursArray, "tours from reviews");
//   console.log(usersArray, "users from reviews");
//   console.log(user, "user from reveiw");

  const onSubmit = (data) => {
    if (!selectedTour) {
        toast.error("Please select a tour.");
        return;

    }
    const reviewData = {
      review: data.review,
      rating: data.rating, // Ensure the key is 'rating'
      tour: selectedTour._id,
      user: user._id,
    };

    createReview({reviewData, tourId: selectedTour.id }, {
      onSuccess: () => {
        reset();
        toast.success("Review successfully created!");
      },
      onError: (error) => {
        toast.error(`Error: ${error.message}`);
      },
    });
  };

  return (
    <section className="reviews-form">
      <div className="row">
        <div className="reviews">
          <div className="reviews__form">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="u-margin-bottom-medium title-review-form">
                <h2 className="heading-secondary">Submit a Review</h2>
              </div>

              {/* Review Text */}
              <div className="form__group">
                <textarea
                  className="form__input"
                  placeholder="Write your review"
                  {...register("review", {
                    required: "Review text is required",
                  })}
                />
                <label className="form__label">Review</label>
                {errors.review && (
                  <p className="form__error">{errors.review.message}</p>
                )}
              </div>

              {/* Rating */}
              <div className="form__group">
                <select
                  className="form__input"
                  {...register("raitng", { required: "Rating is required" })}
                >
                  <option value="">Select rating</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Fair</option>
                  <option value="3">3 - Good</option>
                  <option value="4">4 - Very Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
                <label className="form__label">Rating</label>
                {errors.rating && (
                  <p className="form__error">{errors.rating.message}</p>
                )}
              </div>

              {/* Tour Selection */}

              {/* Custom Tour Dropdown */}
              <div className="custom-dropdown" ref={dropdownRef}>
                <div className="dropdown-trigger">
                  <button type="button" onClick={toggleDropdown}  disabled={isLoading}>
                    {selectedTour ? selectedTour.name : "Select a tour"}
                  </button>
                </div>
                {dropdownOpen && (
                  <ul className={`dropdown-list ${dropdownOpen ? 'active' : ''}`}>
                    {toursArray.map((tour) => (
                      <li
                        key={tour._id}
                        onClick={() => handleTourSelect(tour)}
                        className="dropdown-item"
                      >
                        <img
                          src={`http://localhost:3000/img/tours/${tour.imageCover}`}
                          alt={tour.name}
                          className="dropdown-item-img"
                          crossOrigin="anonymous"
                        />
                        <span>{tour.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {errors.tour && (
                  <p className="form__error">{errors.tour.message}</p>
                )}
              </div>

              {/* User Selection */}
              <div className="form__group">
                <input
                  type="hidden"
                  value={user._id}
                  {...register("user", { required: "User ID is required" })}
                  className="form__input"
                  readOnly
                />
                {errors.user && (
                  <p className="form__error">{errors.user.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="form__group--button">
                <button
                  type="submit"
                  className="btn btn--green"
                  disabled={isloadingCreateReview}
                >
                  {isloadingCreateReview ? "Submitting..." : "Submit Review"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
