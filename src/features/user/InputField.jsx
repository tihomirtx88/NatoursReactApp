/* eslint-disable react/prop-types */

export default function InputField({ id, label, type, register, error, disabled = false, required = true }){
    return (
        <div className="form__group">
          <label htmlFor={id} className="form__label">
            {label}
          </label>
          <input
            id={id}
            type={type}
            disabled={disabled}
            required={required}
            className={`form__input ${error ? "form__input--error" : ""}`}
            {...register(id, { required: "This field is required" })}
          />
          {error && <p className="form__error">{error.message}</p>}
        </div>
      );
};