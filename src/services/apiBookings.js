export async function getBookingsApi() {
  try {
    const token = localStorage.getItem("jwt");

    const response = await fetch("http://127.0.0.1:3000/api/v1/bookings", {
      method: "GEt",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data;

  } catch (error) {
    console.error(error.message);
    throw new Error("Bookings could not be loaded");
  }
}

export async function createBookingsApi({
  fullName,
  email,
  groupSize,
  tour,
  user,
  price,
}) {
  try {
    const token = localStorage.getItem("jwt");

    const response = await fetch("http://127.0.0.1:3000/api/v1/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        fullName,
        email,
        groupSize,
        tour,
        user,
        price,
      }),
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
      error.message || "Something went wrong while creating the booking."
    );
  }
}

export async function getBookingApi(bookingId) {
  try {
    const token = localStorage.getItem("jwt");
    const response = await fetch(
      `http://127.0.0.1:3000/api/v1/bookings/${bookingId}`,{
        method: "GEt",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const data = await response.json();
      
      return data;
    }
  } catch (error) {
    console.log(error);

    throw new Error("Booking could not be loaded");
  }
}

export async function getMyBookingApi() {
  try {
    const token = localStorage.getItem("jwt");
    const response = await fetch(
      `http://127.0.0.1:3000/api/v1/bookings/my-bookings`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error("Bookings could not be loaded");
  }
}

export async function deleteBookingApi(bookingId) {
  try {
    const token = localStorage.getItem('jwt');

    const response = await fetch(`http://127.0.0.1:3000/api/v1/bookings/${bookingId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;

  } catch (error) {
    console.error(error.message);
    throw new Error("Booking could not be deleted");
  }
}