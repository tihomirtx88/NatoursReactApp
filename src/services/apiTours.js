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
    throw new Error("Bookings could not be loaded");
  }
}
