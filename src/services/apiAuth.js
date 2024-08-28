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
