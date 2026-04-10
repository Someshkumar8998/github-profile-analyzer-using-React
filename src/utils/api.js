const GITHUB_API_BASE = 'https://api.github.com';

const getUser = async (username) => {
  const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);
  if (!response.ok) {
    throw new Error('User not found');
  }
  return response.json();
};

const getRepos = async (username) => {
  const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?sort=stars&per_page=10`);
  if (!response.ok) {
    throw new Error('Repos not found');
  }
  return response.json();
};

export default {
  getUser,
  getRepos
};
