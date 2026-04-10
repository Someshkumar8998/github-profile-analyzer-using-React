import React, { useState } from 'react';
import { FaGithub, FaUser, FaLock, FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (username === 'admin' && password === 'admin@123') {
      onLogin();
    } else {
      setError('Invalid credentials. Please use admin / admin@123');
    }
    setIsLoading(false);
  };

  const handleForgotPassword = () => {
    alert('Contact support@analyzer.com | Demo: admin/admin@123');
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <FaGithub className="login-icon" />
            <h1>GitHub Analyzer</h1>
            <p>Sign in to your admin account</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <div className="error-message">
                <i className="fas fa-exclamation-circle"></i>
                {error}
              </div>
            )}

            <div className="input-group">
              <label>Username</label>
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  required
                  className="input-field"
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="•••••••"
                  required
                  className="input-field"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button type="submit" className="login-button" disabled={isLoading}>
              {isLoading ? (
                <>
                  <div className="spinner"></div>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In <FaArrowRight className="arrow-icon" />
                </>
              )}
            </button>
          </form>

          <div className="login-footer">
            <button type="button" className="link-button" onClick={handleForgotPassword}>
              Forgot password?
            </button>
            <span className="demo-hint">
              Demo: <strong>admin / admin@123</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

