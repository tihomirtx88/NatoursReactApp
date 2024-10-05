const CreateTourForm = () => {
  return (
    <section className="section-tours">
      <div className="row">
        <div className="tours">
          <div className="tours__form">
            <form className="form">
              <div className="u-margin-bottom-medium title-tour-form">
                <h2 className="heading-secondary ">Create New Tour</h2>
              </div>

              {/* Name Field */}
              <div className="form__tour-group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Tour Name"
                />
                <label className="form__label">Tour Name</label>
              </div>

              {/* Duration Field */}
              <div className="form__tour-group">
                <input
                  type="number"
                  className="form__input"
                  placeholder="Duration (in days)"
                />
                <label className="form__label">Duration</label>
              </div>

              {/* Max Group Size Field */}
              <div className="form__tour-group">
                <input
                  type="number"
                  className="form__input"
                  placeholder="Max Group Size"
                />
                <label className="form__label">Max Group Size</label>
              </div>

              {/* Difficulty Field */}
              <div className="form__tour-group">
                <select className="form__input">
                  <option value="">Select difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="difficult">Difficult</option>
                </select>
                <label className="form__label">Difficulty</label>
              </div>

              {/* Price Field */}
              <div className="form__tour-group">
                <input
                  type="number"
                  className="form__input"
                  placeholder="Price"
                />
                <label className="form__label">Price</label>
              </div>

              {/* Price Discount Field */}
              <div className="form__tour-group">
                <input
                  type="number"
                  className="form__input"
                  placeholder="Price Discount"
                />
                <label className="form__label">Price Discount</label>
              </div>

              {/* Summary Field */}
              <div className="form__tour-group">
                <textarea className="form__input" placeholder="Summary" />
                <label className="form__label">Summary</label>
              </div>

              {/* Description Field */}
              <div className="form__tour-group">
                <textarea className="form__input" placeholder="Description" />
                <label className="form__label">Description</label>
              </div>

              {/* Image Cover Field */}
              <div className="form__tour-group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Cover Image URL"
                />
                <label className="form__label">Cover Image</label>
              </div>

              {/* Images Field */}
              <div className="form__tour-group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Images (comma separated)"
                />
                <label className="form__label">Images</label>
              </div>

              {/* Start Dates Field */}
              <div className="form__tour-group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Start Dates (comma separated)"
                />
                <label className="form__label">Start Dates</label>
              </div>

              {/* Location Fields */}
              <div className="form__tour-group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Coordinates (comma separated)"
                />
                <label className="form__label">Location Coordinates</label>
              </div>

              <div className="form__tour-group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Location Address"
                />
                <label className="form__label">Location Address</label>
              </div>

              <div className="form__tour-group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Location Description"
                />
                <label className="form__label">Location Description</label>
              </div>

              {/* Secret Tour Checkbox */}
              <div className="form__tour-group u-margin-bottom-medium">
                <label className="form__label">Secret Tour</label>
                <input type="checkbox" />
              </div>

              <div className="form__tour-group--button">
                <button type="submit" className="btn btn--green">
                  Create Tour
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateTourForm;
