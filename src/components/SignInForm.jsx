import React, { useState } from 'react';
import './SignInForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:3000/users?email=${email}&password=${password}`);

      if (response.data.length > 0) {
        // Handle successful sign in, e.g., redirect to the home page or store user information
        console.log('Sign in successful');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      console.error('Error signing in:', err);
      setError('Failed to sign in. Please try again.');
    }
  };

  return (
    <div className="SignInForm">
      <h2>Sign In</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
