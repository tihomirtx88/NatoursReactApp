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
  name,
  email,
  // photo,
  // role,
  password,
  passwordConfirm,
}) {
  const response = await fetch("http://127.0.0.1:3000/api/v1/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      // photo,
      // role,
      password,
      passwordConfirm,
    }),
  });

  const result = await response.json();

  console.log(result);

  if (!response.ok) {
    console.error(result.message);
    throw new Error(result.message);
  }

  return result;
}

export async function apiLogout() {
  try {
    const response = await fetch("http://127.0.0.1:3000/api/v1/users/logout");

    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.error("Login failed:", error);
  }
}

export async function updatePasswordApi({passwordCurrent, password, passwordConfirm}) {
  try {
    const token = localStorage.getItem("jwt");

    if (!token) {
      throw new Error("JWT token not found");
    }

    const response = await fetch(
      "http://127.0.0.1:3000/api/v1/users/updatePassword",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          passwordCurrent,
          password,
          passwordConfirm
        }), 
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error.response.data.message);
  }
}
