import { useForm } from "react-hook-form";
import useRegister from "./useRegister";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";

const Register = () => {
  const { signUp, isRegisterLoading } = useRegister();

  const { register, getValues, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    const { name, email, password, passwordConfirm } = data;
    signUp(
      { name, email, password, passwordConfirm },
      {
        onSettled: () => reset(),
        onSuccess: () => {
          console.log("bravooooooooooo");
        },
      }
    );
  }

  return (
    <div className="login-form">
      <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__group">
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <input
            id="name"
            type="text"
            disabled={isRegisterLoading}
            required
            className={`form__input ${errors.name ? "form__input--error" : ""}`}
            {...register("name", {
              required: "This field is required",
            })}
          />
          {errors.name && <p className="form__error">{errors.name.message}</p>}
        </div>

        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Email address
          </label>
          <input
            id="email"
            type="email"
            disabled={isRegisterLoading}
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
            className={`form__input ${
              errors.email ? "form__input--error" : ""
            }`}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="form__error">{errors.email.message}</p>
          )}
        </div>

        {/* <div className="form__group">
          <label htmlFor="photo" className="form__label">
            Profile Photo (URL)
          </label>
          <input
            id="photo"
            type="file"
            // value={photo}
            // onChange={(e) => setPhoto(e.target.value)}
            className="form__input"
          />
        </div> */}

        {/* <div className="form__group">
          <label htmlFor="role" className="form__label">
            Role
          </label>
          <select
            id="role"
            // value={role}
            // onChange={(e) => setRole(e.target.value)}
            required
            className="form__input"
            {...register("role", { required: "This field is required" })}
          >
            <option value="user">User</option>
            <option value="guide">Guide</option>
            <option value="lead-guide">Lead Guide</option>
            <option value="admin">Admin</option>
          </select>
        </div> */}

        <div className="form__group">
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <input
            id="password"
            type="password"
            disabled={isRegisterLoading}
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            required
            minLength="8"
            className={`form__input ${
              errors.password ? "form__input--error" : ""
            }`}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="form__error">{errors.password.message}</p>
          )}
        </div>

        <div className="form__group">
          <label htmlFor="passwordConfirm" className="form__label">
            Confirm Password
          </label>
          <input
            id="passwordConfirm"
            type="password"
            // value={passwordConfirm}
            // onChange={(e) => setPasswordConfirm(e.target.value)}
            disabled={isRegisterLoading}
            required
            className={`form__input ${
              errors.passwordConfirm ? "form__input--error" : ""
            }`}
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Password must to match",
            })}
          />
          {errors.passwordConfirm && (
            <p className="form__error">{errors.passwordConfirm.message}</p>
          )}
        </div>

        {/* {error && <p className="form__error">{error}</p>} */}

        <div className="form__group--buttons">
          {isRegisterLoading ? (
            <Spinner /> // Show spinner when loading
          ) : (
            <>
              <button className="btn btn--green" type="submit">
                Register
              </button>
              <button
                className="btn btn--orange"
                type="reset"
                disabled={isRegisterLoading}
                onClick={reset}
              >
                Reset
              </button>
            </>
          )}
        </div>

        <div>
          <Link className="form__group__navigation--link" to="/login"> If you have account already</Link>
        </div>

        {/* <div className="form__group">
          <p>
            Already have an account? <Link to="/login">Log in here</Link>
          </p>
        </div> */}
      </form>
    </div>
  );
};

export default Register;
