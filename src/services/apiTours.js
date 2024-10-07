export async function getTours() {
  try {
    const response = await fetch("http://127.0.0.1:3000/api/v1/tours");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error("Tours could not be loaded");
  }
}

export async function getTour(tourId) {
  try {
    const response = await fetch(
      `http://127.0.0.1:3000/api/v1/tours/${tourId}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const data = await response.json();

      return data;
    }
  } catch (error) {
    console.log(error);

    throw new Error("Tour could not be loaded");
  }
}

export async function getMontlyTours(year) {
  try {
    const response = await fetch(
      `http://127.0.0.1:3000/api/v1/tours/montly-plan/${year}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error("Montly tours could not be loaded");
  }
}

export async function createTourApi({
  name,
  slug,
  duration,
  maxGroupSize,
  difficulty,
  price,
  priceDiscount,
  summary,
  description,
  imageCover,
  images,
  startDates,
  secretTour,
  startLocation,
  locations,
  guides
}){
  try {
    
    const token = localStorage.getItem("jwt");


=======
  summary,
  description,
  priceDiscount,
  startDates,
  startLocation,
  secretTour,
  guides
}) {
  try {
    const token = localStorage.getItem("jwt");

    // Create FormData to handle file uploads
    const formData = new FormData();
    formData.append("name", name);
    formData.append("duration", duration);
    formData.append("maxGroupSize", maxGroupSize);
    formData.append("difficulty", difficulty);
    formData.append("price", price);
    formData.append("summary", summary);
    formData.append("description", description);
    formData.append("priceDiscount", priceDiscount);

    // Append the cover image (file)
    if (imageCover) {
      formData.append("imageCover", imageCover);
    }

    // Append additional images (files)
    if (images && images.length > 0) {
      Array.from(images).forEach((image, index) => {
        formData.append("images", image);
      });
    }

    // Append other data
    formData.append("startDates", JSON.stringify(startDates));
    formData.append("startLocation", JSON.stringify(startLocation));
    formData.append("secretTour", secretTour);
    formData.append("guides", JSON.stringify(guides));

>>>>>>> Stashed changes
    const response = await fetch("http://127.0.0.1:3000/api/v1/tours", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        slug,
        duration,
        maxGroupSize,
        difficulty,
        price,
        priceDiscount,
        summary,
        description,
        imageCover,
        images,
        startDates,
        secretTour,
        startLocation,
        locations,
        guides
      }),
    });

    if (response.status === 401) {
      throw new Error("Unauthorized. Please check your credentials.");
    }

    if (!response.ok) {
      const errorData = await response.json(); // Log more detailed error info
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message || 'Unknown error'}`);
    }

    const data = await response.json();

    return data;
    
  } catch (error) {
    console.error("Error in createTourApi:", error); // Log error for debugging
    throw new Error(error.message || "Something went wrong while creating the tour.");
  }
}