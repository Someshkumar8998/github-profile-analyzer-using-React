import React from 'react';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

const RepoList = ({ repos }) => {
  if (repos.length === 0) return null;

  return (
    <div className="row g-4 mb-5">
      <h3 className="mb-4">Top Repositories <span className="badge bg-info">{repos.length}</span></h3>
      {repos.map((repo) => (
        <div key={repo.id} className="col-md-6">
          <div className="card repo-card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                  {repo.name}
                </a>
                {repo.private ? <span className="badge bg-secondary ms-2">Private</span> : null}
              </h5>
              {repo.description && (
                <p className="card-text text-muted">{repo.description}</p>
              )}
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3">
                  <small className="text-muted">
                    <FaStar className="me-1" /> {repo.stargazers_count.toLocaleString()}
                  </small>
                  <small className="text-muted">
                    <FaCodeBranch className="me-1" /> {repo.forks_count.toLocaleString()}
                  </small>
                  <small className="text-muted">
                    <FaEye className="me-1" /> {repo.watchers_count.toLocaleString()}
                  </small>
                </div>
                <span className="badge bg-light text-dark">
                  {repo.language || 'Unknown'}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepoList;
