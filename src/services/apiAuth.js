export async function apiLogin({ email, password }) {
  const url = "http://127.0.0.1:3000/api/v1/users/login";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // Check if the response was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Login failed:", error);
  }
}

export async function apiRegister({
  fullName,
  email,
  password,
  nationality,
  countryFlag,
  nationalID,
  admin,
}) {
  const response = await fetch("http://127.0.0.1:3000/api/v1/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fullName,
      email,
      password,
      nationality,
      countryFlag,
      nationalID,
      adminRole: admin, // Assuming the server expects `adminRole` key
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    console.error(result.message);
    throw new Error(result.message);
  }

  return result;
}
