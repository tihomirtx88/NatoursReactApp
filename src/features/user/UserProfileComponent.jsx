import { useForm } from "react-hook-form";
import NavItem from "./NavItem";
import useUpdateUserData from "./useUpdateUserData";
import { useUser } from "./useUser";
import Spinner from "../../components/Spinner";
import useUpdatePassword from "../authentication/useUpdatePassword";

export default function UserProfileComponent() {
  const { updateUser, isUpdatingUser } = useUpdateUserData();
  const { updateUserPassword, isUpdatingUserPassword } = useUpdatePassword();
  const { currentUser } = useUser();

  const userData = currentUser?.data?.data || {};
  const { photo, role } = userData;

  // Form hook for account settings
  const {
    register: registerAccount,
    // getValues: getAccountValues,
    formState: { errors: accountErrors },
    handleSubmit: handleSubmitAccount,
    reset: resetAccount,
  } = useForm();

  // Form hook for password change
  const {
    register: registerPassword,
    getValues: getPasswordValues,
    formState: { errors: passwordErrors },
    handleSubmit: handleSubmitPassword,
    reset: resetPassword,
  } = useForm();

  function onSubmitAccount(data) {
    const { name, email } = data;

    updateUser(
      { name, email },
      {
        onSettled: () => resetAccount(),
        onSuccess: () => {
          console.log("Account updated successfully");
        },
      }
    );
  }

   // Submit handler for password change form
   function onSubmitPassword(data) {
    const { passwordCurrent, password, passwordConfirm } = data;

    updateUserPassword(
      { passwordCurrent, password, passwordConfirm },
      {
        onSettled: () => resetPassword(),
        onSuccess: () => {
          console.log("Password updated successfully");
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
        {/* Account Settings Form */}
        <div className="user-view__form-container">
          <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
          <form
            className="form form-user-data"
            onSubmit={handleSubmitAccount(onSubmitAccount)}
          >
            <div className="form__group">
              <label htmlFor="name" className="form__label">
                Name
              </label>
              <input
                id="name"
                type="text"
                disabled={isUpdatingUser}
                required
                className={`form__input ${
                  accountErrors.name ? "form__input--error" : ""
                }`}
                {...registerAccount("name", {
                  required: "This field is required",
                })}
              />
              {accountErrors.name && (
                <p className="form__error">{accountErrors.name.message}</p>
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
                required
                className={`form__input ${
                  accountErrors.email ? "form__input--error" : ""
                }`}
                {...registerAccount("email", {
                  required: "This field is required",
                })}
              />
              {accountErrors.email && (
                <p className="form__error">{accountErrors.email.message}</p>
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
                    onClick={resetAccount}
                  >
                    Reset
                  </button>
                </>
              )}
            </div>
          </form>
        </div>

        <div className="line"></div>

        {/* Password Change Form */}
        <div className="user-view__form-container">
          <h2 className="heading-secondary ma-bt-md">Password change</h2>
          <form
            className="form form-user-settings"
            onSubmit={handleSubmitPassword(onSubmitPassword)}
          >
            <div className="form__group">
              <label htmlFor="password-current" className="form__label">
                Current password
              </label>
              <input
                id="password-current"
                type="password"
                placeholder="••••••••"
                required
                className={`form__input ${
                  passwordErrors.passwordCurrent ? "form__input--error" : ""
                }`}
                {...registerPassword("passwordCurrent", {
                  required: "This field is required",
                })}
              />
              {passwordErrors.passwordCurrent && (
                <p className="form__error">
                  {passwordErrors.passwordCurrent.message}
                </p>
              )}
            </div>
            <div className="form__group">
              <label htmlFor="password" className="form__label">
                New password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                className={`form__input ${
                  passwordErrors.password ? "form__input--error" : ""
                }`}
                {...registerPassword("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password needs a minimum of 8 characters",
                  },
                })}
              />
              {passwordErrors.password && (
                <p className="form__error">{passwordErrors.password.message}</p>
              )}
            </div>
            <div className="form__group ma-bt-lg">
              <label htmlFor="password-confirm" className="form__label">
                Confirm password
              </label>
              <input
                id="password-confirm"
                type="password"
                placeholder="••••••••"
                required
                className={`form__input ${
                  passwordErrors.passwordConfirm ? "form__input--error" : ""
                }`}
                {...registerPassword("passwordConfirm", {
                  required: "This field is required",
                  validate: (value) =>
                    value === getPasswordValues("password") ||
                    "Passwords must match",
                })}
              />
              {passwordErrors.passwordConfirm && (
                <p className="form__error">
                  {passwordErrors.passwordConfirm.message}
                </p>
              )}
            </div>
            <div className="form__group right">
              {isUpdatingUserPassword ? (
                <Spinner />
              ) : (
                <button className="btn btn--small btn--green" type="submit">
                  Save password
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
