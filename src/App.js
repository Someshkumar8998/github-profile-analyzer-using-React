import React, { useState } from 'react';
import Login from './components/Login';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';
import RepoList from './components/RepoList';
import StatsChart from './components/StatsChart';
import api from './utils/api';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setRepos([]);
  };

  const fetchProfile = async (username) => {
    setLoading(true);
    setError('');
    try {
      const userData = await api.getUser(username);
      const userRepos = await api.getRepos(username);
      setUser(userData);
      setRepos(userRepos.slice(0, 10));
    } catch (err) {
      setError('User not found or API error');
    }
    setLoading(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-dark">
        <Login onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="App min-vh-100 bg-dark text-light">
      <header className="bg-primary text-white py-4">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="mb-0"><i className="fab fa-github me-2"></i>GitHub Profile Analyzer</h1>
            <button className="btn btn-outline-light" onClick={handleLogout}>
              Logout <i className="ms-1 fas fa-sign-out-alt"></i>
            </button>
          </div>
        </div>
      </header>
      <main className="container py-5">
        <SearchBar onSearch={fetchProfile} loading={loading} />
        {error && <div className="alert alert-danger mt-4">{error}</div>}
        {loading && (
          <div className="text-center mt-4">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {user && (
          <>
            <div className="row mt-5">
              <div className="col-lg-8">
                <RepoList repos={repos} />
              </div>
              <div className="col-lg-4">
                <StatsChart user={user} />
              </div>
            </div>
            <ProfileCard user={user} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
