import { useForm } from "react-hook-form";
import useCreateBooking from "./useCreateBooking";
import toast from "react-hot-toast";
import { useToursWithoutSorting } from "../tours/useToursWithoutSorting";
import { useAuth } from "../../context/AuthContext";

const Book = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { toursData } = useToursWithoutSorting();
  const readingData = toursData?.data?.tours || [];
  const { user } = useAuth();

   const { createBooking, isloadingCreateBooking } = useCreateBooking();

   const onSubmit = (data) => {

    const bookingData = {
      fullName: data.fullName,
      email: data.email,
      groupSize: data.groupSize,
      tour: data.tour,      
      user: user._id,       
      price: readingData.find(tour => tour.id === data.tour)?.price || 0, 
    };

    createBooking(bookingData, {
      onSuccess: () => {
        reset();
        toast.success("Booking successfully created!");
      },
      onError: (error) => {
        toast.error(`Error: ${error.message}`);
      },
    });
   };

  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">Start Booking Now</h2>
              </div>

              <div className="form__group">
                <input
                   type="text"
                   className="form__input"
                   placeholder="Full Name"
                   id="fullName"
                   {...register("fullName", { required: "Full Name is required" })}
                />
                <label htmlFor="name" className="form__label">
                  Full name
                </label>
                {errors.fullName && (
                  <p className="form__error">{errors.fullName.message}</p>
                )}
              </div>

              <div className="form__group">
                <input
                   type="email"
                   className="form__input"
                   placeholder="Email Address"
                   id="email"
                   {...register("email", {
                     required: "Email is required",
                     pattern: {
                       value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                       message: "Enter a valid email address",
                     },
                   })}
                />
                <label htmlFor="email" className="form__label">
                  Email address
                </label>
                {errors.email && (
                  <p className="form__error">{errors.email.message}</p>
                )}
              </div>

              <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input
                     type="radio"
                     className="form__radio-input"
                     id="small"
                     value="small"
                     {...register("groupSize", { required: true })}
                     defaultChecked
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
                    value="large"
                    {...register("groupSize", { required: true })}
                  />
                  <label htmlFor="large" className="form__radio-label">
                    Large tour group
                    <span className="form__radio-button" />
                  </label>
                </div>
              </div>

              <div className="form__group">
                <select
                  className="form__input"
                  {...register("tour", { required: "Please select a tour" })}
                >
                  <option value="">Select a tour</option>
                  {readingData.map((tour) => (
                    <option key={tour.id} value={tour.id}>
                      {tour.name} - ${tour.price}
                    </option>
                  ))}
                </select>
                {errors.tour && (
                  <p className="form__error">{errors.tour.message}</p>
                )}
              </div>

                {/* User ID (Readonly) */}
                <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  value={user._id}
                  readOnly
                />
                <label className="form__label">User ID</label>
              </div>

              <div className="form__group--button">
              <button type="submit" className="btn btn--green" disabled={isloadingCreateBooking}>
                  {isloadingCreateBooking ? "Booking..." : "Next step →"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
