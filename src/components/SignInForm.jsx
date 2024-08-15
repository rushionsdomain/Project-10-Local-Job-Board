// SignInForm.js
import React, { useState } from 'react';
import './SignInForm.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users/login', {
        email,
        password,
      });

      if (response.data.success) {
        console.log('Sign in successful');
        navigate('/home'); // Redirect to home page or another page
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
      {error && <p className="error">{error}</p>}
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
