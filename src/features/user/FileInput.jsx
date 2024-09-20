/* eslint-disable react/prop-types */

export default function FileInput({ photo, handleFileChange, isUpdatingUser }) {
  return (
    <div className="form__group form__photo-upload">
      <img
        src={`http://localhost:3000/img/users/${photo}`}
        alt="User photo"
        crossOrigin="anonymous"
        className="form__user-photo"
      />
      <input
        id="photo"
        type="file"
        className="btn-text"
        onChange={handleFileChange}
        disabled={isUpdatingUser}
      />
      <label htmlFor="photo" className="btn-text">
        Choose new photo
      </label>
    </div>
  );
}
