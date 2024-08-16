// authService.js
const API_URL = "http://localhost:5000/users";

export const login = async (username, password) => {
  const response = await fetch(API_URL);
  const users = await response.json();
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    localStorage.setItem("authToken", JSON.stringify(user));
    return user;
  }
  throw new Error("Invalid credentials");
};

export const register = async (username, password, role) => {
  const newUser = { username, password, role };
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
};
