export async function resetPasswordApi({ token, password, passwordConfirm }) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/v1/users/resetPassword/${token}`,
      {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
          password,
          passwordConfirm,
        }),
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to reset password");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response?.data.message || "Error resetting password");
  }
}
