export async function getReviewsApi() {
  try {
    const token = localStorage.getItem("jwt");
    const response = await fetch("http://127.0.0.1:3000/api/v1/reviews", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error("Reviews could not be loaded");
  }
}
