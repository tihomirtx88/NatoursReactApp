/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import useForgetPassword from "./useForgetPassword";
import SpinnerMini from "../../components/SpinnerMini";

export default function ForgotPasswordForm({onCancel}) {
  const { forgotPassword, isforgotPasswordLoading } = useForgetPassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    forgotPassword({ email: data.email });
  };

  return (
    <div className="forgot-password-form">
      <h2 className="heading-secondary ma-bt-lg">Forgot Password?</h2>
      <form className="forgot-password-form__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="forgot-password-form__group">
          <label htmlFor="email" className="forgot-password-form__label dark-label">
            Enter your email address
          </label>
          <input
            id="email"
            type="email"
            className="forgot-password-form__input"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email",
              },
            })}
            disabled={isforgotPasswordLoading}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
        <div className="forgot-password-form__group forgot-password-form__group--buttons">
          <button className="btn btn--green" disabled={isforgotPasswordLoading}>
            {!isforgotPasswordLoading ? "Send Reset Link" : <SpinnerMini />}
          </button>
          <button
            type="button"
            className="btn btn--red"
            onClick={onCancel}
            disabled={isforgotPasswordLoading}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
