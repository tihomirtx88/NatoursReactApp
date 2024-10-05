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

export async function createTourApi(formData){
  try {
    
    const token = localStorage.getItem("jwt");


    const response = await fetch("http://127.0.0.1:3000/api/v1/tours", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData, 
    });

    if (response.status === 401) {
      throw new Error("Unauthorized. Please check your credentials.");
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    throw new Error(
      error.message || "Something went wrong while creating the tour."
    );
  }
}
