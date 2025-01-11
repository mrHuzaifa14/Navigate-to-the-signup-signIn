// src/components/Auth.js
// src/components/Auth.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const AuthForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Simulate authentication success
    console.log(`${isLoginMode ? 'Login' : 'Sign Up'} form submitted`);

    // Redirect to the main page
    navigate('/');
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h2 className="auth-title">{isLoginMode ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleFormSubmit} className="auth-form">
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              className="auth-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter your password"
              className="auth-input"
              required
            />
          </div>
          {!isLoginMode && (
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm your password"
                className="auth-input"
                required
              />
            </div>
          )}
          <button type="submit" className="auth-button">
            {isLoginMode ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="auth-toggle">
          {isLoginMode
            ? "Don’t have an account?"
            : 'Already have an account?'}{' '}
          <span onClick={toggleAuthMode} className="toggle-link">
            {isLoginMode ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
