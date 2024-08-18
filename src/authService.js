// authService.js
const API_URL = "http://localhost:5000/users";

export const login = async (username, password) => {
  const response = await fetch(API_URL);
  const users = await response.json();

  // Sanitize inputs to prevent basic injection attacks
  const sanitizedUsername = username.trim();
  const sanitizedPassword = password.trim();

  const user = users.find(
    (user) =>
      user.username === sanitizedUsername &&
      user.password === sanitizedPassword
  );

  if (user) {
    localStorage.setItem("authToken", JSON.stringify(user));
    localStorage.setItem("userRole", user.role); // Store the role for role-based routing
    return user;
  }

  throw new Error("Invalid credentials");
};

export const register = async (username, password, role) => {
  const newUser = {
    username: username.trim(),
    password: password.trim(),
    role,
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });

  if (response.ok) {
    return await response.json();
  }

  throw new Error("Registration failed");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("authToken"));
};

export const logout = () => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("userRole"); // Clean up stored role
};