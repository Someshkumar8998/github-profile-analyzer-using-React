import React, { useState } from 'react';

const SearchBar = ({ onSearch, loading }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3 justify-content-center">
      <div className="col-md-6">
        <div className="input-group">
          <span className="input-group-text"><i className="fab fa-github"></i></span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter GitHub username (e.g. octocat)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Analyzing...
              </>
            ) : (
              'Analyze'
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
