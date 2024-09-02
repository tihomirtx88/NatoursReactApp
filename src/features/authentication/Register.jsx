const Register = () => {
  return (
    <div className="login-form">
      <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
      <form className="form">
        <div className="form__group">
          <label htmlFor="name" className="form__label">
            Name
          </label>
          <input
            id="name"
            type="text"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            required
            className="form__input"
          />
        </div>

        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="username"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
            className="form__input"
          />
        </div>

        <div className="form__group">
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
        </div>

        <div className="form__group">
          <label htmlFor="role" className="form__label">
            Role
          </label>
          <select
            id="role"
            // value={role}
            // onChange={(e) => setRole(e.target.value)}
            required
            className="form__input"
          >
            <option value="user">User</option>
            <option value="guide">Guide</option>
            <option value="lead-guide">Lead Guide</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="form__group">
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="new-password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            required
            minLength="8"
            className="form__input"
          />
        </div>

        <div className="form__group ma-bt-md">
          <label htmlFor="passwordConfirm" className="form__label">
            Confirm Password
          </label>
          <input
            id="passwordConfirm"
            type="password"
            // value={passwordConfirm}
            // onChange={(e) => setPasswordConfirm(e.target.value)}
            required
            className="form__input"
          />
        </div>

        {/* {error && <p className="form__error">{error}</p>} */}

        <div className="form__group">
          <button className="btn btn--green" type="submit">
            Register
          </button>
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
