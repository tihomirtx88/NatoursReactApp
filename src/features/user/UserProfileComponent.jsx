import { useForm } from "react-hook-form";
import NavItem from "./NavItem";
import useUpdateUserData from "./useUpdateUserData";
import { useUser } from "./useUser";
import Spinner from "../../components/Spinner";

export default function UserProfileComponent() {
  const { updateUser, isUpdatingUser } = useUpdateUserData();
  const { currentUser } = useUser();

  const userData = currentUser?.data?.data || {};
  const { photo, role } = userData;

  const { register, getValues, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    const { name, email } = data;

    updateUser(
      { name, email },
      {
        onSettled: () => reset(),
        onSuccess: () => {
          console.log("Update User");
        },
      }
    );
  }

  return (
    <div className="user-view">
      <nav className="user-view__menu">
        <ul className="side-nav">
          <NavItem icon="icon-settings" text="Settings" />
          <NavItem icon="icon-briefcase" text="My bookings" />
          <NavItem icon="icon-star" text="My reviews" />
          <NavItem icon="icon-credit-card" text="Billing" />
        </ul>
        {role === "admin" ? (
          <div className="admin-nav">
            <h5 className="admin-nav__heading">Admin</h5>
            <ul className="side-nav">
              <NavItem icon="icon-map" text="Manage tours" />
              <NavItem icon="icon-users" text="Manage users" />
              <NavItem icon="icon-star" text="Manage reviews" />
              <NavItem icon="icon-briefcase" text="Manage bookings" />
            </ul>
          </div>
        ) : null}
      </nav>
      <div className="user-view__content">
        <div className="user-view__form-container">
          <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
          <form
            className="form form-user-data"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form__group">
              <label htmlFor="name" className="form__label">
                Name
              </label>
              <input
                id="name"
                type="text"
                disabled={isUpdatingUser}
                required={true}
                className={`form__input ${
                  errors.name ? "form__input--error" : ""
                }`}
                {...register("name", {
                  required: "This field is required",
                })}
              />
              {errors.name && (
                <p className="form__error">{errors.name.message}</p>
              )}
            </div>
            <div className="form__group ma-bt-md">
              <label htmlFor="email" className="form__label">
                Email address
              </label>
              <input
                id="email"
                type="email"
                disabled={isUpdatingUser}
                required={true}
                className={`form__input ${
                  errors.email ? "form__input--error" : ""
                }`}
                {...register("email", {
                  required: "This field is required",
                })}
              />
              {errors.email && (
                <p className="form__error">{errors.email.message}</p>
              )}
            </div>
            <div className="form__group form__photo-upload">
              <img
                src={`img/users/${photo}`}
                alt="User photo"
                className="form__user-photo"
              />
              <a href="" className="btn-text">
                Choose new photo
              </a>
            </div>
            <div className="form__group right">
              {isUpdatingUser ? (
                <Spinner />
              ) : (
                <>
                  <button className="btn btn--green" type="submit">
                    Save settings
                  </button>
                  <button
                    className="btn btn--orange"
                    type="reset"
                    disabled={isUpdatingUser}
                    onClick={reset}
                  >
                    Reset
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
        <div className="line"></div>
        <div className="user-view__form-container">
          <h2 className="heading-secondary ma-bt-md">Password change</h2>
          <form className="form form-user-settings">
            <div className="form__group">
              <label htmlFor="password-current" className="form__label">
                Current password
              </label>
              <input
                id="password-current"
                type="password"
                placeholder="••••••••"
                required={true}
                className="form__input"
              />
            </div>
            <div className="form__group">
              <label htmlFor="password" className="form__label">
                New password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                required={true}
                className="form__input"
              />
            </div>
            <div className="form__group ma-bt-lg">
              <label htmlFor="password-confirm" className="form__label">
                Confirm password
              </label>
              <input
                id="password-confirm"
                type="password"
                placeholder="••••••••"
                required={true}
                className="form__input"
              />
            </div>
            <div className="form__group right">
              <button className="btn btn--small btn--green">
                Save password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
