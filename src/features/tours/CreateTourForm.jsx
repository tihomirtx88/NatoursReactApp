import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useCreateTour from "./useCreateTour";
import { useUsersWithoutPagination } from "../user/useUsersWithoutPagination";

const CreateTourForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { createTour, isloadingCreateTour } = useCreateTour();
  const { allUsers, isLoadingUsers } = useUsersWithoutPagination();
  const usersArray = allUsers?.data?.users || [];

  const [coverImage, setCoverImage] = useState(null); 
  const [tourImages, setTourImages] = useState([{ id: Date.now(), file: null }]); 
  
  const [locations, setLocations] = useState([]);
  const [availableGuides, setAvailableGuides] = useState([]);
   
   useEffect(() => {
    if (!isLoadingUsers && allUsers) {
      const filteredGuides = usersArray.filter(
        (user) => user.role === "guide" || user.role === "lead-guide"
      );
      setAvailableGuides(filteredGuides);
    }
  }, [allUsers, isLoadingUsers]);


  // Handle cover image file selection
  const handleCoverImageChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

   // Handle file change for each dynamic image input
   const handleTourImageChange = (index, e) => {
    const newTourImages = [...tourImages];
    newTourImages[index].file = e.target.files[0];
    setTourImages(newTourImages);
  };

  // Add a new file input for additional image
  const addTourImageField = () => {
    setTourImages([...tourImages, { id: Date.now(), file: null }]);
  };

  // Remove a specific file input
  const removeTourImageField = (index) => {
    setTourImages(tourImages.filter((_, i) => i !== index));
  };

  const handleAddLocation = () => {
    setLocations([...locations, { description: "", coordinates: [], address: "", day: "" }]);
  };

  // Update location fields
  const handleLocationChange = (index, field, value) => {
    const updatedLocations = locations.map((loc, locIndex) => {
      if (locIndex === index) {
        if (field === "coordinates") {
          const parsedCoordinates = value.split(",").map((coord) => parseFloat(coord.trim()));
          
          if (parsedCoordinates.length === 2 && !parsedCoordinates.some(isNaN)) {
            return { ...loc, [field]: parsedCoordinates };  
          } else {
            console.error("Invalid coordinates format");
            return { ...loc, [field]: [] };  
          }
        } else {
          return { ...loc, [field]: value };
        }
      }
      return loc;
    });
    setLocations(updatedLocations);
  };

   // Remove location
   const handleRemoveLocation = (index) => {
    const updatedLocations = locations.filter((_, locIndex) => locIndex !== index);
    setLocations(updatedLocations);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("slug", data.name.toLowerCase().replace(/ /g, "-"));
    formData.append("duration", data.duration);
    formData.append("maxGroupSize", data.maxGroupSize);
    formData.append("difficulty", data.difficulty);
    formData.append("price", data.price);
    formData.append("priceDiscount", data.priceDiscount || 0); // Optional
    formData.append("summary", data.summary);
    formData.append("description", data.description);
  
    if (coverImage) {
      formData.append("imageCover", coverImage);
    }
  
    // Add multiple images to the form data
     tourImages.forEach((img) => {
      if (img.file) {
        formData.append("images", img.file);
      }
    });
  
    // Handle start dates
    if (data.startDates) {
      const dateArray = data.startDates.split(",").map((date) => {
        const parsedDate = new Date(date.trim());
        if (!isNaN(parsedDate.getTime())) {
          return parsedDate.toISOString();
        } else {
          console.error(`Invalid date format: ${date}`);
          return null;
        }
      }).filter(Boolean); 
      formData.append("startDates", JSON.stringify(dateArray));
    }
  
    formData.append("secretTour", data.secretTour || false);
  
    // Handle nested startLocation object
    const startLocation = {
      description: data.startLocationDescription || "", 
      coordinates: data.coordinates
        ? data.coordinates.split(",").map(coord => parseFloat(coord.trim()))
        : [], 
      address: data.address || "" 
    };

    if (startLocation.coordinates.some(isNaN)) {
      throw new Error("Invalid coordinates format");
    }
  
    formData.append("startLocation", JSON.stringify(startLocation));
    
     // Add multiple locations
     const formattedLocations = locations.map((loc) => {
      const parsedCoordinates = loc.coordinates;
  
      if (parsedCoordinates.length === 2 && !parsedCoordinates.some(isNaN)) {
        return {
          description: loc.description,
          coordinates: parsedCoordinates,
          address: loc.address,
          day: parseInt(loc.day, 10)
        };
      } else {
        throw new Error("Invalid coordinates format in location");
      }
    });

    formData.append("locations", JSON.stringify(formattedLocations));

    // Add guides
    formData.append("guides", JSON.stringify(data.guides));
  
    // Call createTourApi with formData
    createTour(formData, {
      onSuccess: () => {
        reset();
        toast.success("Booking successfully created!");
      },
      onError: (error) => {
        toast.error(`Error: ${error.message}`);
      },
    })
      
  };

  return (
    <section className="section-tours">
      <div className="row">
        <div className="tours">
          <div className="tours__form">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="u-margin-bottom-medium title-tour-form">
                <h2 className="heading-secondary">Create New Tour</h2>
              </div>

              {/* Tour Name */}
              <div className="form__tour-group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Tour Name"
                  {...register("name", { required: "Tour name is required" })}
                />
                <label className="form__label">Tour Name</label>
                {errors.name && <p className="form__error">{errors.name.message}</p>}
              </div>

              {/* Duration */}
              <div className="form__tour-group">
                <input
                  type="number"
                  className="form__input"
                  placeholder="Duration (in days)"
                  {...register("duration", { required: "Duration is required" })}
                />
                <label className="form__label">Duration</label>
                {errors.duration && <p className="form__error">{errors.duration.message}</p>}
              </div>

              {/* Max Group Size */}
              <div className="form__tour-group">
                <input
                  type="number"
                  className="form__input"
                  placeholder="Max Group Size"
                  {...register("maxGroupSize", { required: "Max group size is required" })}
                />
                <label className="form__label">Max Group Size</label>
                {errors.maxGroupSize && <p className="form__error">{errors.maxGroupSize.message}</p>}
              </div>

              {/* Difficulty */}
              <div className="form__tour-group">
                <select
                  className="form__input"
                  {...register("difficulty", { required: "Difficulty is required" })}
                >
                  <option value="">Select difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="difficult">Difficult</option>
                </select>
                <label className="form__label">Difficulty</label>
                {errors.difficulty && <p className="form__error">{errors.difficulty.message}</p>}
              </div>

              {/* Price */}
              <div className="form__tour-group">
                <input
                  type="number"
                  className="form__input"
                  placeholder="Price"
                  {...register("price", { required: "Price is required" })}
                />
                <label className="form__label">Price</label>
                {errors.price && <p className="form__error">{errors.price.message}</p>}
              </div>

              {/* Price Discount */}
              <div className="form__tour-group">
                <input
                  type="number"
                  className="form__input"
                  placeholder="Price Discount"
                  {...register("priceDiscount")}
                />
                <label className="form__label">Price Discount</label>
              </div>

              {/* Summary */}
              <div className="form__tour-group">
                <textarea
                  className="form__input"
                  placeholder="Summary"
                  {...register("summary", { required: "Summary is required" })}
                />
                <label className="form__label">Summary</label>
                {errors.summary && <p className="form__error">{errors.summary.message}</p>}
              </div>

              {/* Description */}
              <div className="form__tour-group">
                <textarea
                  className="form__input"
                  placeholder="Description"
                  {...register("description", { required: "Description is required" })}
                />
                <label className="form__label">Description</label>
                {errors.description && <p className="form__error">{errors.description.message}</p>}
              </div>

              {/* Cover Image Upload */}
              <div className="form__tour-group">
                <input
                  type="file"
                  className="form__input"
                  multiple
                  onChange={handleCoverImageChange}
                  disabled={isloadingCreateTour}
                />
                <label className="form__label">Image Cover</label>
              </div>

              {/* Multiple Images Upload */}
              <div className="form__tour-group">
                <label className="form__label">Upload Additional Images</label>
                {tourImages.map((imageField, index) => (
                  <div key={imageField.id} className="tour-image-field">
                    <input
                      type="file"
                      className="form__input"
                      onChange={(e) => handleTourImageChange(index, e)}
                      disabled={isloadingCreateTour}
                    />
                    <button
                      type="button"
                      onClick={() => removeTourImageField(index)}
                      disabled={tourImages.length <= 1}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button type="button" onClick={addTourImageField}>
                  Add Image
                </button>
              </div>


              {/* Start Dates Field */}
              <div className="form__tour-group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Start Dates (comma separated)"
                  {...register("startDates")}
                />
                <label className="form__label">Start Dates</label>
              </div>

              {/* Location Coordinates */}
              <div className="form__tour-group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Coordinates (comma separated)"
                  {...register("coordinates")}
                />
                <label className="form__label">Location Coordinates</label>
                {errors.coordinates && <p className="form__error">{errors.coordinates.message}</p>}
              </div>

              {/* Location Address */}
              <div className="form__tour-group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Location Address"
                  {...register("address")}
                />
                <label className="form__label">Location Address</label>
                {errors.address && <p className="form__error">{errors.address.message}</p>}
              </div>

              {/* Location Description */}
              <div className="form__tour-group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Location Description"
                  {...register("startLocationDescription")}
                />
                <label className="form__label">Location Description</label>
                {errors.startLocationDescription && <p className="form__error">{errors.startLocationDescription.message}</p>}
              </div>

              {/* Secret Tour Checkbox */}
              <div className="form__tour-group u-margin-bottom-medium">
                <label className="form__label">Secret Tour</label>
                <input type="checkbox" {...register("secretTour")} />
              </div>

               {/*8 Locations */}
               <div className="form__tour-group">
                <h3>Add Tour Locations</h3>
                {locations.map((location, index) => (
                  <div key={index} className="location-input">
                    <input
                      type="text"
                      placeholder="Description"
                      value={location.description}
                      onChange={(e) => handleLocationChange(index, "description", e.target.value)}
                      className="form__input"
                    />
                  <input
                    type="text"
                    placeholder="Coordinates (comma separated)"
                    value={Array.isArray(location.coordinates) ? location.coordinates.join(',') : ''} // Safely handle non-array values
                    onChange={(e) => handleLocationChange(index, "coordinates", e.target.value)}
                    className="form__input"
                  />
                    <input
                      type="text"
                      placeholder="Address"
                      value={location.address}
                      onChange={(e) => handleLocationChange(index, "address", e.target.value)}
                      className="form__input"
                    />
                    <input
                      type="number"
                      placeholder="Day"
                      value={location.day}
                      onChange={(e) => handleLocationChange(index, "day", e.target.value)}
                      className="form__input"
                    />
                    <button type="button" onClick={() => handleRemoveLocation(index)}>Remove Location</button>
                  </div>
                ))}
                <button type="button" onClick={handleAddLocation}>Add Location</button>
              </div>
                 
              {/* Guides (filtered users) */}
              <div className="form__tour-group giudes-group">
                <label htmlFor="guides">Select Guides</label>
                <select
                  multiple
                  {...register("guides")}
                  className="form__input"
                >
                  {availableGuides.map((guide) => (
                    <option key={guide._id} value={guide._id}>
                      {guide.name} ({guide.role})
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <div className="form__tour-group--button">
                <button type="submit" className="btn btn--green" disabled={isloadingCreateTour}>
                  {isloadingCreateTour ? "Creating..." : "Create Tour"}
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