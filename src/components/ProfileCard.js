import React from 'react';
import { FaBuilding, FaMapMarkerAlt, FaLink, FaTwitter, FaGlobe } from 'react-icons/fa';

const ProfileCard = ({ user }) => {
  return (
    <div className="card profile-card mt-5 shadow-lg">
      <div className="row g-0">
        <div className="col-md-4 text-center py-4">
          <img src={user.avatar_url} alt={user.login} className="rounded-circle img-fluid mb-3" style={{width: '150px', height: '150px'}} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{user.name || user.login} <span className="badge bg-secondary">@{user.login}</span></h2>
            {user.bio && <p className="card-text lead">{user.bio}</p>}
            <div className="row text-center">
              <div className="col-4">
                <div className="h4 text-primary mb-0">{user.public_repos}</div>
                <small>Repositories</small>
              </div>
              <div className="col-4">
                <div className="h4 text-success mb-0">{user.followers}</div>
                <small>Followers</small>
              </div>
              <div className="col-4">
                <div className="h4 text-info mb-0">{user.following}</div>
                <small>Following</small>
              </div>
            </div>
            <hr />
            <div className="row">
              {user.company && (
                <div className="col-6 mb-2">
                  <FaBuilding className="me-2" /> {user.company}
                </div>
              )}
              {user.location && (
                <div className="col-6 mb-2">
                  <FaMapMarkerAlt className="me-2" /> {user.location}
                </div>
              )}
              {user.blog && (
                <div className="col-6 mb-2">
                  <FaGlobe className="me-2" /> <a href={user.blog} target="_blank" rel="noopener noreferrer">{user.blog}</a>
                </div>
              )}
              {user.twitter_username && (
                <div className="col-6 mb-2">
                  <FaTwitter className="me-2" /> @{user.twitter_username}
                </div>
              )}
            </div>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary mt-3">
              View GitHub Profile <i className="fab fa-github ms-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
