export async function getBookingsApi() {
  try {
    const response = await fetch("http://127.0.0.1:3000/api/v1/bookings");

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
    name,
    email,
    groupSize,
  }) {
    const response = await fetch("http://127.0.0.1:3000/api/v1/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          groupSize,
        }),
      });
    
      const result = await response.json();
    
      if (!response.ok) {
        console.error(result.message);
        throw new Error(result.message);
      }
    
      return result;
  }
