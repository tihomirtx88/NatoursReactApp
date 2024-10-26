/* eslint-disable react/prop-types */
import { useState } from "react";
import useUpdateOtherUser from "./useUpdateOtherUser";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Spinner from "../../components/Spinner";


export default function UpdateUserForm({userId}) {
  const { updateOtherUser, isUpdatingOtherUser } = useUpdateOtherUser();
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFileChange = (event) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const onSubmit = (data) => {
    const { name, email } = data;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);

    if (selectedFile) formData.append("photo", selectedFile);
  
    updateOtherUser({ formData, userId }, {
      onSettled: () => reset(),
      onSuccess: () => toast.success("User updated successfully!"),
      onError: (error) => toast.error("Update failed: " + error.message),
    });
  };

  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Update User Info</h2>

      <form className="form form-user-data" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__group">
          <label className="form__label" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form__input"
            {...register("name", { required: "Name is required" })}
            disabled={isUpdatingOtherUser}
          />
          {errors.name && (
            <p className="form__error">{errors.name.message}</p>
          )}
        </div>

        <div className="form__group">
          <label className="form__label" htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            className="form__input"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            disabled={isUpdatingOtherUser}
          />
          {errors.email && (
            <p className="form__error">{errors.email.message}</p>
          )}
        </div>

        {/* File input for uploading a profile photo */}
        <div className="form__group">
          <label className="form__label" htmlFor="photo">Profile Photo</label>
          <input
            type="file"
            id="photo"
            className="form__input"
            onChange={handleFileChange}
            disabled={isUpdatingOtherUser}
          />
        </div>

        <div className="form__group right">
          {isUpdatingOtherUser ? (
            <Spinner />
          ) : (
            <>
              <button className="btn btn--green" type="submit">
                Save Changes
              </button>
              <button
                className="btn btn--orange"
                type="reset"
                onClick={() => {
                  reset();
                  setSelectedFile(null);
                }}
                disabled={isUpdatingOtherUser}
              >
                Reset
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
