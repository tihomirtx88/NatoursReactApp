/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useUpdateTour } from "./useUpdateTour";
import { useUsers } from "../user/useUsers";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useTour } from "./useTour";

export default function UpdateTourForm() {
    const { error, tour, isLoadingtour } = useTour(); // Using useTour hook to fetch tour data
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  console.log(tour, 'from update componet');
  

  const { updateTour, isTourUpdating } = useUpdateTour();
  const { allUsers, isLoadingUsers } = useUsers();
  const usersArray = allUsers?.data?.users || [];

  const [coverImage, setCoverImage] = useState(null);
  const [tourImages, setTourImages] = useState([]);
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

  // Populate form fields with existing tour data when available
  useEffect(() => {
    if (tour && tour?.data?.data) {
      const {
        name,
        duration,
        maxGroupSize,
        difficulty,
        price,
        priceDiscount,
        summary,
        description,
        startDates,
        startLocation,
        secretTour,
        guides,
        locations: tourLocations,
      } = tour.data.data;
  
      reset({
        name,
        duration,
        maxGroupSize,
        difficulty,
        price,
        priceDiscount,
        summary,
        description,
        startDates: startDates?.join(", ") || "",
        coordinates: startLocation?.coordinates?.join(", ") || "",
        address: startLocation?.address || "",
        startLocationDescription: startLocation?.description || "",
        secretTour,
        guides: guides?.map((guide) => guide._id) || [],
      });
  
      setLocations(tourLocations || []);
    }
  }, [tour, reset]);

  // Handle cover image file selection
  const handleCoverImageChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  // Handle multiple tour images selection
  const handleTourImagesChange = (e) => {
    setTourImages([...e.target.files]);
  };

  // Add a new location
  const handleAddLocation = () => {
    setLocations([
      ...locations,
      { description: "", coordinates: [], address: "", day: "" },
    ]);
  };

  // Update location fields
  const handleLocationChange = (index, field, value) => {
    const updatedLocations = locations.map((loc, locIndex) => {
      if (locIndex === index) {
        if (field === "coordinates") {
          const parsedCoordinates = value
            .split(",")
            .map((coord) => parseFloat(coord.trim()));

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

  // Remove a location
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
    formData.append("priceDiscount", data.priceDiscount || 0);
    formData.append("summary", data.summary);
    formData.append("description", data.description);

    if (coverImage) {
      formData.append("imageCover", coverImage);
    }

    // Add multiple images to the form data
    tourImages.forEach((image) => {
      formData.append("images", image);
    });

    // Handle start dates
    if (data.startDates) {
      const dateArray = data.startDates
        .split(",")
        .map((date) => {
          const parsedDate = new Date(date.trim());
          if (!isNaN(parsedDate.getTime())) {
            return parsedDate.toISOString();
          } else {
            console.error(`Invalid date format: ${date}`);
            return null;
          }
        })
        .filter(Boolean);
      formData.append("startDates", JSON.stringify(dateArray));
    }

    formData.append("secretTour", data.secretTour || false);

    // Handle nested startLocation object
    const startLocation = {
      description: data.startLocationDescription || "",
      coordinates: data.coordinates
        ? data.coordinates.split(",").map((coord) => parseFloat(coord.trim()))
        : [],
      address: data.address || "",
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
          day: parseInt(loc.day, 10),
        };
      } else {
        throw new Error("Invalid coordinates format in location");
      }
    });

    formData.append("locations", JSON.stringify(formattedLocations));

    // Add guides
    formData.append("guides", JSON.stringify(data.guides));

    // Call updateTourApi with formData
    updateTour(formData, {
      onSuccess: () => {
        reset();
        toast.success("Tour successfully updated!");
      },
      onError: (error) => {
        toast.error(`Error: ${error.message}`);
      },
    });
  };

  if (isLoadingtour) return <p>Loading tour data...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <section className="section-tours">
      <div className="row">
        <div className="tours">
          <div className="tours__form">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
              <div className="u-margin-bottom-medium title-tour-form">
                <h2 className="heading-secondary">Update Tour</h2>
              </div>

              {/* Tour Name */}
              <div className="form__tour-group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Tour Name"
                  defaultValue={tour.data?.name} // Set default value from tour data
                  {...register("name", { required: "Tour name is required" })}
                />
                <label className="form__label">Tour Name</label>
                {errors.name && (
                  <p className="form__error">{errors.name.message}</p>
                )}
              </div>

              {/* Duration */}
              <div className="form__tour-group">
                <input
                  type="number"
                  className="form__input"
                  placeholder="Duration (in days)"
                  defaultValue={tour.data?.duration} // Set default value from tour data
                  {...register("duration", {
                    required: "Duration is required",
                  })}
                />
                <label className="form__label">Duration</label>
                {errors.duration && (
                  <p className="form__error">{errors.duration.message}</p>
                )}
              </div>

              {/* Max Group Size */}
              <div className="form__tour-group">
                <input
                  type="number"
                  className="form__input"
                  placeholder="Max Group Size"
                  defaultValue={tour.data?.maxGroupSize} // Set default value from tour data
                  {...register("maxGroupSize", {
                    required: "Max group size is required",
                  })}
                />
                <label className="form__label">Max Group Size</label>
                {errors.maxGroupSize && (
                  <p className="form__error">{errors.maxGroupSize.message}</p>
                )}
              </div>

              {/* Difficulty */}
              <div className="form__tour-group">
                <select
                  className="form__select"
                  defaultValue={tour.data?.difficulty} // Set default value from tour data
                  {...register("difficulty", {
                    required: "Difficulty is required",
                  })}
                >
                  <option value="">Select Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="difficult">Difficult</option>
                </select>
                <label className="form__label">Difficulty</label>
                {errors.difficulty && (
                  <p className="form__error">{errors.difficulty.message}</p>
                )}
              </div>

              {/* Price */}
              <div className="form__tour-group">
                <input
                  type="number"
                  className="form__input"
                  placeholder="Price"
                  defaultValue={tour.data?.price} // Set default value from tour data
                  {...register("price", { required: "Price is required" })}
                />
                <label className="form__label">Price</label>
                {errors.price && (
                  <p className="form__error">{errors.price.message}</p>
                )}
              </div>

              {/* Price Discount */}
              <div className="form__tour-group">
                <input
                  type="number"
                  className="form__input"
                  placeholder="Price Discount"
                  defaultValue={tour.data?.priceDiscount || 0} // Set default value from tour data
                  {...register("priceDiscount")}
                />
                <label className="form__label">Price Discount</label>
              </div>

              {/* Summary */}
              <div className="form__tour-group">
                <textarea
                  className="form__input"
                  placeholder="Summary"
                  defaultValue={tour.data?.summary} // Set default value from tour data
                  {...register("summary", { required: "Summary is required" })}
                />
                <label className="form__label">Summary</label>
                {errors.summary && (
                  <p className="form__error">{errors.summary.message}</p>
                )}
              </div>

              {/* Description */}
              <div className="form__tour-group">
                <textarea
                  className="form__input"
                  placeholder="Description"
                  defaultValue={tour.data?.description} // Set default value from tour data
                  {...register("description", { required: "Description is required" })}
                />
                <label className="form__label">Description</label>
                {errors.description && (
                  <p className="form__error">{errors.description.message}</p>
                )}
              </div>

              {/* Start Dates */}
              <div className="form__tour-group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Start Dates (comma separated)"
                  defaultValue={tour.data?.startDates?.join(", ") || ""} // Set default value from tour data
                  {...register("startDates")}
                />
                <label className="form__label">Start Dates</label>
              </div>

              {/* Start Location */}
              <div className="form__tour-group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Coordinates (latitude, longitude)"
                  defaultValue={tour.data?.startLocation?.coordinates?.join(", ") || ""} // Set default value from tour data
                  {...register("coordinates")}
                />
                <label className="form__label">Coordinates</label>
              </div>
              
              <div className="form__tour-group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Address"
                  defaultValue={tour.data?.startLocation?.address || ""} // Set default value from tour data
                  {...register("address")}
                />
                <label className="form__label">Address</label>
              </div>

              <div className="form__tour-group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Start Location Description"
                  defaultValue={tour.data?.startLocation?.description || ""} // Set default value from tour data
                  {...register("startLocationDescription")}
                />
                <label className="form__label">Start Location Description</label>
              </div>

              <div className="form__tour-group">
                <input
                  type="checkbox"
                  className="form__input"
                  defaultChecked={tour.data?.secretTour} // Set default value from tour data
                  {...register("secretTour")}
                />
                <label className="form__label">Secret Tour</label>
              </div>

              {/* Guides Selection */}
              <div className="form__tour-group">
                <select
                  multiple
                  {...register("guides")}
                  defaultValue={tour.data?.data?.guides.map((guide) => guide._id) || []} // Set default value from tour data
                >
                  {availableGuides.map((guide) => (
                    <option key={guide._id} value={guide._id}>
                      {guide.name}
                    </option>
                  ))}
                </select>
                <label className="form__label">Guides</label>
              </div>

              {/* Location Management */}
              <div>
                <h3>Locations</h3>
                {tour?.data?.data?.locations.map((location, index) => (
                  <div key={index} className="location-form">
                    <input
                      type="text"
                      placeholder="Location Description"
                      value={location.description}
                      onChange={(e) => handleLocationChange(index, "description", e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Coordinates (latitude, longitude)"
                      value={location.coordinates.join(", ") || ""}
                      onChange={(e) => handleLocationChange(index, "coordinates", e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      value={location.address}
                      onChange={(e) => handleLocationChange(index, "address", e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Day"
                      value={location.day}
                      onChange={(e) => handleLocationChange(index, "day", e.target.value)}
                    />
                    <button type="button" onClick={() => handleRemoveLocation(index)}>
                      Remove
                    </button>
                  </div>
                ))}
                <button type="button" onClick={handleAddLocation}>
                  Add Location
                </button>
              </div>

              {/* Cover Image */}
              <div>
                <input
                  type="file"
                  onChange={handleCoverImageChange}
                  accept="image/*"
                />
              </div>

              {/* Tour Images */}
              <div>
                <input
                  type="file"
                  multiple
                  onChange={handleTourImagesChange}
                  accept="image/*"
                />
              </div>

              <button type="submit" className="btn btn--green">
                Update Tour
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
