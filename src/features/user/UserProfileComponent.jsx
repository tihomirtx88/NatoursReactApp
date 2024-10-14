import { useForm } from "react-hook-form";
import NavItem from "./NavItem";
import useUpdateUserData from "./useUpdateUserData";
import { useUser } from "./useUser";
import Spinner from "../../components/Spinner";
import useUpdatePassword from "../authentication/useUpdatePassword";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import InputField from "./InputField";
import FileInput from "./FileInput";

export default function UserProfileComponent() {
  const { updateUser, isUpdatingUser } = useUpdateUserData();
  const { updateUserPassword, isUpdatingUserPassword } = useUpdatePassword();
  const { currentUser } = useUser();

  const userData = currentUser?.data?.data || {};
  const { photo, role } = userData;

  const [selectedFile, setSelectedFile] = useState(null);

  // Form hooks
  const {
    register: registerAccount,
    // getValues: getAccountValues,
    formState: { errors: accountErrors },
    handleSubmit: handleSubmitAccount,
    reset: resetAccount,
  } = useForm();

  const {
    register: registerPassword,
    getValues: getPasswordValues,
    formState: { errors: passwordErrors },
    handleSubmit: handleSubmitPassword,
    reset: resetPassword,
  } = useForm();

  const { handleSubmit: handleSubmitPhoto, reset: resetPhoto } = useForm();

  // Handle file input
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Scroll to top function
  useEffect(() => {
    if (isUpdatingUser || isUpdatingUserPassword)
      window.scrollTo({ top: 0, behavior: "smooth" });
  }, [isUpdatingUser, isUpdatingUserPassword]);

  function onSubmitAccount(data) {
    const { name, email } = data;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);

    if (selectedFile) {
      formData.append("photo", selectedFile);
    }

    updateUser(formData, {
      onSettled: () => resetAccount(),
      onSuccess: (response) => {
        if (response?.data) {
          toast.success("Account updated successfully!");
        } else {
          toast.error("No data returned from server");
        }
      },
      onError: (error) => {
        console.error("Update failed:", error);
      },
    });
  }

  // Submit handler for password change form
  function onSubmitPassword(data) {
    const { passwordCurrent, password, passwordConfirm } = data;

    updateUserPassword(
      { passwordCurrent, password, passwordConfirm },
      {
        onSettled: () => resetPassword(),
        onSuccess: () => {
          toast.success("Password updated successfully!");
        },
        onError: (error) => {
          toast.error("Password update failed: " + error.message);
        },
      }
    );
  }

  function onSubmitPhoto() {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("photo", selectedFile);

      updateUser(formData, {
        onSettled: () => {
          resetPhoto();
          setSelectedFile(null); // Clear the file input after upload
        },
        onSuccess: (response) => {
          if (response?.data) {
            toast.success("Photo updated successfully!");
          } else {
            toast.error("No data returned from server");
          }
        },
        onError: (error) => {
          toast.error("Photo update failed: " + error.message);
        },
      });
    }
  }

  return (
    <div className="user-view">
      <nav className="user-view__menu">
        <ul className="side-nav">
          {/* <NavItem icon="icon-briefcase" text="My bookings" href="/create/booking" /> */}
          <NavItem icon="icon-settings" text="Settings" />
          <NavItem icon="icon-briefcase" href="/myBookings" text="My bookings" />
          <NavItem icon="icon-briefcase" href="/myTours" text="My tours" />
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
            <InputField
              id="name"
              label="Name"
              type="text"
              register={registerAccount}
              error={accountErrors.name}
              disabled={isUpdatingUser}
            />
            <InputField
              id="email"
              label="Email address"
              type="email"
              register={registerAccount}
              error={accountErrors.email}
              disabled={isUpdatingUser}
            />
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

        {/* Photo Upload Form */}
        <div className="user-view__form-container">
          <h2 className="heading-secondary ma-bt-md">Update Profile Photo</h2>
          <form
            className="form form-photo-upload"
            onSubmit={handleSubmitPhoto(onSubmitPhoto)}
          >
            <FileInput
              photo={photo}
              handleFileChange={handleFileChange}
              isUpdatingUser={isUpdatingUser}
            />
            <div className="form__group right">
              {isUpdatingUser ? (
                <Spinner />
              ) : (
                <button className="btn btn--green" type="submit">
                  Upload Photo
                </button>
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
            <InputField
              id="passwordCurrent"
              label="Current password"
              type="password"
              register={registerPassword}
              error={passwordErrors.passwordCurrent}
            />
            <InputField
              id="password"
              label="New password"
              type="password"
              register={registerPassword}
              error={passwordErrors.password}
            />
            <InputField
              id="passwordConfirm"
              label="Confirm password"
              type="password"
              register={registerPassword}
              error={passwordErrors.passwordConfirm}
              validate={(value) =>
                value === getPasswordValues("password") ||
                "Passwords must match"
              }
            />
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
