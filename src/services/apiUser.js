export async function getCurrentUser() {
  try {
    const token = localStorage.getItem("jwt");

    if (!token) {
      throw new Error("JWT token not found");
    }

    const response = await fetch("http://127.0.0.1:3000/api/v1/users/getMe", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
    throw new Error("User could not be loaded");
  }
}

export async function updateUserApi(formData) {
  try {

    const token = localStorage.getItem("jwt");

    if (!token) {
      throw new Error("JWT token not found");
    }

    const response = await fetch(
      "http://127.0.0.1:3000/api/v1/users/updateMe",
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData, 
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error from server:', errorData);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Response data:', data);

    return data;
  } catch (error) {
    console.log(error.response.data.message);
  }
}
